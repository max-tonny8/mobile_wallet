import moment from 'moment';
import {WALLET_LIST_KEY, WALLET_TYPE} from '@persistence/wallet/WalletConstant';
import _ from 'lodash';
import {StorageUtil} from '@modules/core/util/StorageUtil';
import {WalletFactory} from '@modules/core/factory/WalletFactory';
import {
  ASSET_TYPE_TOKEN,
  CHAIN_ID_TYPE_MAP,
} from '@modules/core/constant/constant';
import {PricesFactory} from '@modules/core/factory/PriceFactory';
import {Logs} from '@modules/log/logs';
import axios from 'axios';

export const WalletService = {
  insert,
  setActiveWallet,
  findAll,
  balance,
  addAsset,
  removeAsset,
  setActiveAsset,
  update,
};

async function insert({
  name,
  defaultChain,
  mnemonic,
  privateKey,
  address,
  assets,
}) {
  try {
    const walletListData = await StorageUtil.getItem(WALLET_LIST_KEY);
    const walletList = walletListData ? walletListData.wallets : [];
    let coins,
      tokens = [];
    if (privateKey) {
      const walletData = await WalletFactory.fromPrivateKey(assets, privateKey);
      coins = walletData.coins;
      tokens = walletData.tokens;
    } else {
      const walletData = await WalletFactory.fromMnemonic(assets, mnemonic);
      coins = walletData.coins;
      tokens = walletData.tokens;
    }
    console.log('????????');
    const wallet = {
      id: moment().format('YYYYMMDDhhmmss'),
      name: name,
      defaultChain: defaultChain,
      mnemonic: mnemonic,
      coins: coins,
      totalBalance: 0.0,
      activeAsset: {...coins[0]},
      tokens: tokens,
    };

    walletList.push(wallet);
    await StorageUtil.setItem(WALLET_LIST_KEY, {
      wallets: walletList,
      activeWallet: wallet,
    });
    return {
      success: true,
      data: {wallets: walletList, activeWallet: wallet},
    };
  } catch (error) {
    Logs.info('WalletService: insert: ' + error);
    return {
      success: false,
      data: {},
    };
  }
}

async function update(wallet) {
  try {
    const {wallets, activeWallet} = await StorageUtil.getItem(WALLET_LIST_KEY);
    let index = _.findIndex(wallets, {id: wallet.id});
    wallets.splice(index, 1, wallet);
    if (activeWallet.id === wallet.id) {
      activeWallet.name = wallet.name;
    }
    await StorageUtil.setItem(WALLET_LIST_KEY, {
      wallets: wallets,
      activeWallet: activeWallet,
    });
    return {
      success: true,
      data: {wallets: wallets, activeWallet: activeWallet},
    };
  } catch (error) {
    Logs.info('WalletService: update' + error);
    return {
      success: false,
      data: error,
    };
  }
}

async function setActiveWallet(wallet) {
  try {
    const {wallets} = await StorageUtil.getItem(WALLET_LIST_KEY);
    await StorageUtil.setItem(WALLET_LIST_KEY, {
      wallets: wallets,
      activeWallet: wallet,
    });
    return {
      success: true,
      data: {wallets: wallets, activeWallet: wallet},
    };
  } catch (error) {
    Logs.info('WalletService: setActiveWallet' + error);
    return {
      success: false,
      data: error,
    };
  }
}

async function findAll() {
  try {
    const walletData = await StorageUtil.getItem(WALLET_LIST_KEY);
    const activeWallet = walletData.activeWallet;
    const {coins, tokens} = await WalletFactory.fromMnemonic(
      [...activeWallet.coins, ...activeWallet.tokens],
      activeWallet.mnemonic,
    );
    activeWallet.coins = coins;
    activeWallet.tokens = tokens;
    return {
      success: true,
      data: {
        wallets: walletData.wallets,
        activeWallet: activeWallet,
      },
    };
  } catch (error) {
    return {
      success: false,
      data: {},
    };
  }
}

async function addAsset(asset) {
  try {
    const walletData = await StorageUtil.getItem(WALLET_LIST_KEY);
    const wallets = walletData.wallets;
    const activeWallet = walletData.activeWallet;
    const chain = CHAIN_ID_TYPE_MAP[asset.chainId];
    const price = await PricesFactory.add({
      contract: asset.address,
      chain: chain,
      symbol: asset.symbol,
    });
    const wallet = _.find(activeWallet.coins, {chain: chain});
    const tokens = activeWallet.tokens;
    let token = {
      symbol: asset.symbol.toUpperCase(),
      name: asset.name,
      cid: asset.symbol.toUpperCase(),
      chain: chain,
      type: ASSET_TYPE_TOKEN,
      decimals: asset.decimals,
      contract: asset.address || null,
      privateKey: wallet.privateKey,
      balance: 0,
      unconfirmedBalance: 0,
      usdValue: 0,
      price: price,
      active: true,
      logoURI: asset?.logoURI || asset?.image || null,
      walletAddress: wallet.walletAddress,
      swappable: wallet.swappable,
      buyable: wallet.buyable,
      verified: asset.verified,
    };
    token = (await WalletFactory.getTokenBalance([token]))[0];
    tokens.push(token);
    activeWallet.tokens = tokens;
    let index = _.findIndex(wallets, {id: activeWallet.id});
    wallets.splice(index, 1, activeWallet);
    await StorageUtil.setItem(WALLET_LIST_KEY, {
      wallets: wallets,
      activeWallet: activeWallet,
    });
    return {
      success: true,
      data: {wallets: wallets, activeWallet: activeWallet},
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: {},
    };
  }
}

async function removeAsset(asset) {
  try {
    const walletData = await StorageUtil.getItem(WALLET_LIST_KEY);
    const wallets = walletData.wallets;
    const activeWallet = walletData.activeWallet;
    // const tokens = activeWallet.tokens;
    // _.remove(tokens, { contract: asset.address });
    // activeWallet.tokens = tokens;
    let index = _.findIndex(wallets, {id: asset.id});
    wallets.splice(index, 1);
    await StorageUtil.setItem(WALLET_LIST_KEY, {
      wallets: wallets,
      activeWallet: activeWallet,
    });
    return {
      success: true,
      data: {wallets: wallets, activeWallet: activeWallet},
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: {},
    };
  }
}

async function balance() {
  try {
    const {activeWallet, wallets} = await StorageUtil.getItem(WALLET_LIST_KEY);
    const {success, data} = await WalletFactory.getBalance(
      activeWallet.coins,
      activeWallet.tokens,
    );
    if (success) {
      activeWallet.coins = data.coins;
      activeWallet.tokens = data.tokens;
      activeWallet.activeAsset = [...data.coins, ...data.tokens];
      activeWallet.totalBalance = Object.values([
        ...data.coins,
        ...data.tokens,
      ]).reduce((sum, o) => {
        return sum + (_.isNil(o.usdValue) ? 0 : o.usdValue);
      }, 0.0);
      await StorageUtil.setItem(WALLET_LIST_KEY, {activeWallet, wallets});
    }
    return {
      success,
      data: {
        activeWallet: activeWallet,
      },
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
}

async function setActiveAsset(asset) {
  try {
    const {activeWallet, wallets} = await StorageUtil.getItem(WALLET_LIST_KEY);
    activeWallet.activeAsset = asset;
    let index = _.findIndex(wallets, {id: activeWallet.id});
    wallets.splice(index, 1, activeWallet);
    await StorageUtil.setItem(WALLET_LIST_KEY, {
      wallets: wallets,
      activeWallet: activeWallet,
    });
    return {
      success: true,
      data: {wallets: wallets, activeWallet: activeWallet},
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: error,
    };
  }
}
