import 'react-native-get-random-values';
import '@ethersproject/shims'; //for ethers.js
import {utils} from 'ethers';
import {entropyToMnemonic, formatEther, formatUnits} from 'ethers/lib/utils';
import _, {result} from 'lodash';

import {ASSET_TYPE_COIN, ASSET_TYPE_TOKEN} from '../constant/constant';
import {StorageUtil} from '../util/StorageUtil';
import {EthWallet} from '@modules/core/provider/eth/EthWallet';
import {NexisWallet} from '@modules/core/provider/nexis/NexisWallet';
import {ProviderFactory} from './ProviderFactory';
import {Logs} from '@modules/log/logs';
import {PricesFactory} from './PriceFactory';

export class WalletFactory {
  static wallets = {};

  static async sleep(seconds = 2) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  static async fromMnemonic(coins, mnemonic) {
    const time1 = new Date();
    WalletFactory.destroy();
    const all = [];
    try {
      console.log('Start  =>>>>>>>>>>>');
      for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        const provider = ProviderFactory.getProvider(coin.name);
        const start1 = new Date();
        let ethWallet = new EthWallet(provider);
        console.log(new Date() - start1);
        const {success, data} = await ethWallet.fromMnemonic(coin, mnemonic);
        if (success) {
          ethWallet.setData(data);
          this.wallets[coin.name] = ethWallet;
          all.push({...data, mnemonic, privateKey: data.privateKey});
        }
      }
      console.log('complete => ', new Date() - time1);
      const wallets = _.filter(all, {type: ASSET_TYPE_COIN});
      const tokens = _.filter(all, {type: ASSET_TYPE_TOKEN});
      return {
        all,
        coins: wallets,
        tokens,
      };
    } catch (e) {
      Logs.info('WalletFactory: fromMnemonic:', e);
    }
    return {
      all,
      wallets: [],
      tokens: [],
    };
  }

  static async fromPrivateKey(coins, privateKey) {
    const all = [];
    try {
      for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        const provider = await ProviderFactory.getProvider(coin.chain);

        if (coin.chain === 'ETHEREUM') {
          let ethWallet = this.wallets[coin.chain];
          if (!ethWallet) {
            ethWallet = new EthWallet(provider);
            const {success, data} = await ethWallet.fromPrivateKey(
              coin,
              privateKey || coin.privateKey,
            );
            if (success) {
              ethWallet.setData(data);
              this.wallets[coin.chain] = ethWallet;
              all.push(data);
            }
          }
        } else if (coin.chain === 'NEXIS') {
          let nexisWallet = this.wallets['NEXIS'];
          if (!nexisWallet) {
            nexisWallet = new NexisWallet(provider);
            const {success, data} = await nexisWallet.fromPrivateKey(
              coin,
              privateKey || coin.privateKey,
            );
            if (success) {
              nexisWallet.setData(data);
              this.wallets[coin.chain] = nexisWallet;
              all.push(data);
            }
          }
        }
      }
      const wallets = _.filter(all, {type: ASSET_TYPE_COIN});
      const tokens = _.filter(all, {type: ASSET_TYPE_TOKEN});
      return {
        all,
        coins: wallets,
        tokens,
      };
    } catch (e) {
      Logs.info('WalletFactory: fromPrivateKey', e);
    }
    return {
      all,
      wallets: [],
      tokens: [],
    };
  }

  static generateMnemonics(length) {
    return entropyToMnemonic(utils.randomBytes(length || 16)).split(' ');
  }
  static destroy() {
    this.wallets = {};
  }
  static async getBalance(coins, tokens) {
    try {
      const lastTime = await StorageUtil.getItem('lastTime');
      // if (lastTime !== undefined) {
      //   const currentTime = Date.now();
      //   if (currentTime - parseInt(lastTime) <= 5000) {
      //     throw Error('To many requests');
      //   }
      // }
      await StorageUtil.setItem('lastTime', Date.now().toString());
      const balanceByWallets = await this.getNativeBalance(coins);
      // const balanceByTokens = await this.getTokenBalance(tokens);
      return {
        success: true,
        data: {
          coins: balanceByWallets,
          tokens: [],
        },
      };
    } catch (e) {
      Logs.info('WalletFactory: getBalance', e);
      return {
        success: false,
        data: e.reason,
      };
    }
  }

  static async getNativeBalance(wallets) {
    const updatedWallets = [];
    try {
      let requests = [];
      for (let i = 0; i < wallets.length; i++) {
        const {chain, name, walletAddress} = wallets[i];
        console.log(name);
        if (chain === 'ETHEREUM') {
          requests.push(this.wallets[name].getBalance(walletAddress));
        } else if (chain === 'NEXIS') {
        }
      }
      const chunks = _.chunk(requests, 5);
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        let results = await Promise.all(chunk);
        for (let index = 0; index < results.length; index++) {
          const position = i * 5 + index;
          const result = results[index];
          let balance = 0;
          const coin = _.find(PricesFactory.items, {id: wallets[position].cid});
          if (wallets[position].chain === 'ETHEREUM') {
            balance = result;
          }
          updatedWallets.push({
            ...wallets[position],
            ...coin,
            balance: balance,
            usdValue: balance * coin.current_price,
          });
        }
      }
      return updatedWallets;
    } catch (e) {
      Logs.info('WalletFactory: getNativeBalance', e);
      return wallets;
    }
  }

  static async getTokenBalance(tokens) {
    const updatedTokens = [...tokens];
    try {
      let requests = [];
      for (const [key, value] of Object.entries(tokensByChain)) {
        let url = '';
        const config = {
          method: 'get',
          url: url,
          timeout: 5000,
          headers: {
            'X-API-Key': configProperties.moralis.key,
          },
        };
        if (
          key === 'ETH' ||
          key === 'BSC' ||
          key === 'OPTIMISM' ||
          key === 'AVALANCHE' ||
          key === 'FANTOM' ||
          key === 'CELO' ||
          key === 'ARB' ||
          key === 'POLYGON'
        ) {
          url =
            configProperties.moralis.api +
            '/v2/' +
            `${value[0].walletAddress}` +
            '/erc20?chain=' +
            key.toLowerCase() +
            '&token_addresses=';

          const tokenAddresses = _.map(value, token => {
            return token.contract;
          }).join('&token_addresses=');
          url += tokenAddresses;
          config.url = url;
          requests.push(axios(config));
        } else if (key === 'TRON') {
          url =
            configProperties.tron.api2 +
            `account?address=${value[0].walletAddress}`;
          config.url = url;
          requests.push(axios(config));
        } else if (key === 'SOLANA') {
          url =
            configProperties.solana.api +
            `/account/devnet/${value[0].walletAddress}/tokens`;
          config.url = url;
          requests.push(axios(config));
        } else if (key === 'SXZO') {
          url =
            configProperties.solana.api +
            `/account/devnet/${value[0].walletAddress}/tokens`;
          config.url = url;
          requests.push(axios(config));
        }

        const chunks = _.chunk(requests, 5);
        for (let i = 0; i < chunks.length; i++) {
          const chunk = chunks[i];
          let results = await Promise.all(chunk);
          for (let index = 0; index < results.length; index++) {
            const result = results[index].data;
            if (
              key === 'ETH' ||
              key === 'BSC' ||
              key === 'OPTIMISM' ||
              key === 'AVALANCHE' ||
              key === 'FANTOM' ||
              key === 'CELO' ||
              key === 'ARB' ||
              key === 'POLYGON'
            ) {
              for (let k = 0; k < result.length; k++) {
                let balance = 0;
                const tokenBalance = result[k];
                const findIndex = _.findIndex(tokens, function (e) {
                  return (
                    e.contract.toLowerCase() ===
                    tokenBalance.token_address.toLowerCase()
                  );
                });
                let price = await PricesFactory.prices[
                  tokens[findIndex].contract
                ];
                balance = formatUnits(
                  tokenBalance.balance,
                  tokens[findIndex].decimals,
                );
                updatedTokens.splice(findIndex, 1, {
                  ...tokens[findIndex],
                  balance: balance,
                  price,
                  usdValue: balance * price,
                });
              }
            } else if (key === 'TRON') {
              for (let i = 0; i < value.length; i++) {
                const findIndex = _.findIndex(result.trc20token_balances, {
                  tokenId: value[i].contract,
                });
                let balance = 0;
                let price = await PricesFactory.prices[value[i].contract];
                if (findIndex !== -1) {
                  balance = result.trc20token_balances[findIndex].amount;
                }
                const walletIndex = _.findIndex(tokens, {
                  contract: value[i].contract,
                });
                updatedTokens.splice(walletIndex, 1, {
                  ...tokens[walletIndex],
                  balance: balance,
                  price,
                  usdValue: balance * price,
                });
              }
            } else if (key === 'SOLANA') {
              for (let i = 0; i < value.length; i++) {
                const findIndex = _.findIndex(result, {
                  mint: value[i].contract,
                });
                let balance = 0;
                let associatedTokenAddress = null;
                let mint = null;
                let price = await PricesFactory.prices[value[i].contract];
                if (findIndex !== -1) {
                  balance = result[findIndex].amount;
                  associatedTokenAddress =
                    result[findIndex].associatedTokenAddress;
                  mint = result[findIndex].mint;
                }
                const walletIndex = _.findIndex(tokens, {
                  contract: value[i].contract,
                });
                updatedTokens.splice(walletIndex, 1, {
                  ...tokens[walletIndex],
                  balance: balance,
                  price,
                  usdValue: balance * price,
                  associatedTokenAddress: associatedTokenAddress,
                  mint: mint,
                });
              }
            } else if (key === 'SXZO') {
              for (let i = 0; i < value.length; i++) {
                const findIndex = _.findIndex(result, {
                  mint: value[i].contract,
                });
                let balance = 0;
                let associatedTokenAddress = null;
                let mint = null;
                let price = await PricesFactory.prices[value[i].contract];
                if (findIndex !== -1) {
                  balance = result[findIndex].amount;
                  associatedTokenAddress =
                    result[findIndex].associatedTokenAddress;
                  mint = result[findIndex].mint;
                }
                const walletIndex = _.findIndex(tokens, {
                  contract: value[i].contract,
                });
                updatedTokens.splice(walletIndex, 1, {
                  ...tokens[walletIndex],
                  balance: balance,
                  price,
                  usdValue: balance * price,
                  associatedTokenAddress: associatedTokenAddress,
                  mint: mint,
                });
              }
            }
          }
        }
      }
      return updatedTokens;
    } catch (e) {
      Logs.info('WalletFactory: getTokenBalance', e);
      return tokens;
    }
  }

  static async getTokenBalanceByWalletAddress(walletAddress, tokens) {
    const updatedTokens = [...tokens];
    try {
      let requests: Promise<any>[] = [];
      let url =
        configProperties.moralis.api +
        '/v2/' +
        `${walletAddress}` +
        '/erc20?chain=' +
        CHAIN_ID_MAP[tokens[0].chainId] +
        '&token_addresses=';
      const tokenAddresses = _.map(tokens, token => {
        return token.address;
      }).join('&token_addresses=');
      url += tokenAddresses;
      let config = {
        method: 'get',
        url: url,
        timeout: 3000,
        headers: {
          'X-API-Key': configProperties.moralis.key,
        },
      };
      requests.push(axios(config));
      let results = await Promise.all(requests);
      for (let i = 0; i < results.length; i++) {
        const result = results[i].data;
        for (let k = 0; k < result.length; k++) {
          let balance = 0;
          const tokenBalance = result[k];
          const findIndex = _.findIndex(tokens, {
            contract: tokenBalance.token_address,
          });
          let price = await PricesFactory.prices[tokens[findIndex].contract];
          balance = formatUnits(
            tokens[findIndex].balance,
            tokens[findIndex].decimals,
          );
          updatedTokens.splice(findIndex, 1, {
            ...tokens[findIndex],
            balance: balance,
            price,
            usdValue: balance * price,
          });
        }
      }
      return updatedTokens;
    } catch (e) {
      Logs.info('WalletFactory: getTokenBalance', e);
      return tokens;
    }
  }
}
