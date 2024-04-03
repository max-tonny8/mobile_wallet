import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import ThemeReducer from '@persistence/theme/ThemeReducer';
import UserReducer from '@persistence/user/UserReducer';
import WalletReducer from '@persistence/wallet/WalletReducer';

const ReduxStore = configureStore({
  reducer: {
    ThemeReducer,
    UserReducer,
    WalletReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default ReduxStore;
