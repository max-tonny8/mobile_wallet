import 'react-native-get-random-values';
import '@ethersproject/shims';
import {Logs} from '@modules/log/logs';
import {EthProvider} from '@modules/core/provider/eth/EthProvider';
import {BigNumber, ethers, Wallet} from 'ethers';
import {ProviderFactory} from '@modules/core/factory/ProviderFactory';
import {formatUnits, parseEther, parseUnits} from 'ethers/lib/utils';
import bip39 from 'react-native-bip39';
import {hdkey} from 'ethereumjs-wallet';

export class EthWallet {
  provider;
  data;
  signer;
  web3Signer;

  constructor(provider) {
    this.provider = provider;
  }

  setData(data) {
    this.data = data;
  }

  setSigner(signer) {
    this.signer = signer.connect(this.provider.provider);
  }

  async fromMnemonic(data, mnemonic) {
    try {
      const provider = await ProviderFactory.getProvider(data.name);
      const wallet = await this.createWallet(mnemonic, 0, provider.provider);
      this.setSigner(wallet);
      return {
        success: true,
        data: {
          ...data,
          walletAddress: wallet.address,
          // walletAddress: "0x55d398326f99059fF775485246999027B3197955",
          privateKey: wallet.privateKey,
        },
      };
    } catch (e) {
      Logs.info('EthWallet: fromMnemonic', e);
      return {
        success: false,
        data: {
          ...data,
        },
      };
    }
  }

  async createWallet(mnemonic, index, provider) {
    try {
      let seed = global.seed;
      if (!seed) {
        seed = bip39.mnemonicToSeed(mnemonic);
        global.seed = seed;
      }

      const hdNode = hdkey.fromMasterSeed(seed);
      const node = hdNode.derivePath(`m/44'/60'/0'`);
      const change = node.deriveChild(0);
      const childNode = change.deriveChild(index);
      const childWallet = childNode.getWallet();
      return new Wallet(childWallet.getPrivateKey().toString('hex'), provider);
    } catch (e) {
      Logs.info('EthWallet: createWallet', e);
    }
  }

  async fromPrivateKey(data, privateKey) {
    try {
      if (privateKey.length % 2 === 1) {
        privateKey = privateKey.replace('0x', '0x0');
      }
      const provider = ProviderFactory.getProvider(data.name);
      const wallet = new ethers.Wallet(privateKey, provider.provider);
      this.setSigner(wallet);
      return {
        success: true,
        data: {
          ...data,
          walletAddress: await wallet.address,
          privateKey: wallet.privateKey,
        },
      };
    } catch (e) {
      Logs.info('EthWallet: fromPrivateKey', e);
      return {
        success: false,
        data: {
          ...data,
        },
      };
    }
  }

  async sendTransaction(transaction) {
    if (transaction.tokenContractAddress) {
      return this.sendToken(transaction);
    }
    return this.sendNative(transaction);
  }

  async sendNative(transaction) {
    try {
      const {to, value, gasPrice, gasLimit, takerFee, takerAddress} =
        transaction;
      let tx,
        txFee = '';
      tx = await this.executeNative(
        to,
        parseEther(value.toString()),
        gasPrice,
        gasLimit,
      );
      let takerAmount = 0;
      if (takerFee && takerAddress) {
        takerAmount = (takerFee * parseEther(value.toString())) / 100;
        await tx.wait(3);
        txFee = await this.executeNative(
          takerAddress,
          takerAmount,
          gasPrice,
          gasLimit,
        );
      }
      return {
        success: true,
        data: {
          ...transaction,
          takerAmount: formatUnits(takerAmount.toString()),
          tx,
          txFee,
        },
      };
    } catch (e) {
      Logs.info('EthWallet: sendNative', e);
      return {
        success: false,
        data: e.reason,
      };
    }
  }

  async executeNative(to, value, gasPrice, gasLimit) {
    return await this.signer.sendTransaction({
      to: to,
      value: value,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
    });
  }

  async sendToken(transaction) {
    try {
      let tx,
        txFee = '';
      const {value, takerFee, takerAddress, decimals, tokenContractAddress} =
        transaction;
      let maxFeePerGas = ethers.BigNumber.from(60000000000); // fallback to 40 gwei
      let maxPriorityFeePerGas = ethers.BigNumber.from(60000000000); // fallback to 40 gwei
      tx = await this.executeToken({
        ...transaction,
        value: parseUnits(value.toString(), decimals).toString(),
      });
      const gasFee = {
        gasLimit: BigNumber.from(210000),
        maxFeePerGas,
        maxPriorityFeePerGas,
      };
      const isPolygon = (await this.signer.getChainId()) === 137;
      if (isPolygon) {
        tx = {
          ...tx,
          ...gasFee,
        };
      }
      await this.signer.sendTransaction(tx);
      let takerAmount = 0;
      if (takerFee && takerAddress) {
        takerAmount = (takerFee * parseUnits(value.toString(), decimals)) / 100;
        txFee = await this.executeToken({
          to: takerAddress,
          value: takerAmount.toString(),
          tokenContractAddress,
        });
        if (isPolygon) {
          txFee = {
            ...txFee,
            gasLimit: BigNumber.from(210000),
            maxFeePerGas,
            maxPriorityFeePerGas,
          };
        }
        await this.signer.sendTransaction(txFee);
      }
      return {
        success: true,
        data: {
          ...transaction,
          takerAmount: formatUnits(takerAmount.toString(), decimals),
          tx,
          txFee,
        },
      };
    } catch (e) {
      Logs.info('EthWallet: sendToken', e);
      return {
        success: false,
        data: e.reason,
      };
    }
  }

  async executeToken(transaction) {
    const {to, value, tokenContractAddress} = transaction;
    return await this.provider.transferToken({
      signer: this.signer,
      tokenContractAddress,
      to,
      value,
    });
  }

  async getTransactions(wallet) {
    try {
      const provider = await ProviderFactory.getProvider(wallet.name);
      return {
        success: true,
        data: await provider.getTransactions(wallet),
      };
    } catch (e) {
      Logs.info('EthWallet: getTransactions', e);
      return {
        success: false,
        data: [],
      };
    }
  }

  async getBalance(address) {
    return await this.provider.getBalance(address);
  }

  async getTokenBalance(wallet, tokenContractAddress) {
    const result = await this.provider.getTokenBalance({
      tokenContractAddress,
      signer: this.signer,
      // walletAddress: wallet.,
    });
    return result;
  }
}
