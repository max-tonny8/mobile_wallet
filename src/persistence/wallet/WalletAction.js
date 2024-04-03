import {WalletService} from '@persistence/wallet/WalletService';
import {
  addAssetSuccess,
  createWalletSuccess,
  getBalanceSuccess,
  getWalletsSuccess,
  setActiveWalletSuccess,
  updateWalletSuccess,
  removeAssetSuccess,
} from '@persistence/wallet/WalletReducer';

export const WalletAction = {
  insert,
  findAll,
  balance,
  addAsset,
  removeAsset,
  setActiveAsset,
  setActiveWallet,
  update,
};

function insert({name, defaultChain, mnemonic, privateKey, address, assets}) {
  return async dispatch => {
    const {success, data} = await WalletService.insert({
      name,
      defaultChain,
      mnemonic,
      privateKey,
      address,
      assets,
    });
    if (success) {
      dispatch(createWalletSuccess(data));
    }
    return {success, data};
  };
}

function update(wallet) {
  return async dispatch => {
    const {success, data} = await WalletService.update(wallet);
    if (success) {
      dispatch(updateWalletSuccess(data));
    }
    return {success, data};
  };
}

function setActiveWallet(wallet) {
  return async dispatch => {
    const {success, data} = await WalletService.setActiveWallet(wallet);
    if (success) {
      dispatch(setActiveWalletSuccess(data));
    }
    return {success, data};
  };
}

function findAll() {
  return async dispatch => {
    const {success, data} = await WalletService.findAll();
    if (success) {
      dispatch(getWalletsSuccess(data));
    }
    return {success, data};
  };
}

function balance() {
  return async dispatch => {
    const {success, data} = await WalletService.balance();
    if (success) {
      dispatch(getBalanceSuccess(data));
    }
    return {success, data};
  };
}

function addAsset(asset) {
  return async dispatch => {
    const {success, data} = await WalletService.addAsset(asset);
    if (success) {
      const time1 = new Date();
      dispatch(addAssetSuccess(data));
      console.log(new Date() - time1);
    }
    return {success, data};
  };
}

function removeAsset(asset) {
  return async dispatch => {
    const {success, data} = await WalletService.removeAsset(asset);
    if (success) {
      dispatch(removeAssetSuccess(data));
    }
    return {success, data};
  };
}

function setActiveAsset(asset) {
  return async dispatch => {
    const {success, data} = await WalletService.setActiveAsset(asset);
    if (success) {
      dispatch(addAssetSuccess(data));
    }
    return {success, data};
  };
}
