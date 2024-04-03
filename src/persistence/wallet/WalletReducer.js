import {createSlice} from '@reduxjs/toolkit';

const WalletReducer = createSlice({
  name: 'wallet',
  initialState: {
    wallets: [],
    activeWallet: {},
  },
  reducers: {
    createWalletSuccess(state, {payload}) {
      state.wallets = payload.wallets;
      state.activeWallet = payload.activeWallet;
    },
    setActiveWalletSuccess(state, {payload}) {
      state.wallets = payload.wallets;
      state.activeWallet = payload.activeWallet;
    },
    updateWalletSuccess(state, {payload}) {
      state.wallets = payload.wallets;
      state.activeWallet = payload.activeWallet;
    },
    getWalletsSuccess(state, {payload}) {
      state.wallets = payload.wallets;
      state.activeWallet = payload.activeWallet;
    },
    getBalanceSuccess(state, {payload}) {
      state.activeWallet = payload.activeWallet;
    },
    addAssetSuccess(state, {payload}) { 
      state.wallets = payload.wallets;
      state.activeWallet = payload.activeWallet;
    },
    removeAssetSuccess(state, {payload}) {
      state.wallets = payload.wallets;
      state.activeWallet = payload.activeWallet;
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = WalletReducer;
// Extract and export each action creator by name
export const {
  createWalletSuccess,
  getWalletsSuccess,
  getBalanceSuccess,
  addAssetSuccess,
  removeAssetSuccess,
  setActiveWalletSuccess,
  updateWalletSuccess,
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
