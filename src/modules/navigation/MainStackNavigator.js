import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomTabBarNavigator from '@modules/navigation/BottomTabBarNavigator';
import PreferenceScreen from '@screens/setting/PreferenceScreen';
import AccountScreen from '@screens/setting/AccountScreen';
import ReceiveFundScreen from '@screens/setting/account/ReceiveFundScreen';
import ConnectedSiteScreen from '@screens/setting/account/ConnectedSiteScreen';
import ExportAccountScreen from '@screens/setting/account/ExportAccountScreen';
import ShowAccountDataScreen from '@screens/setting/account/ShowAccountDataScreen';
import ResetAccounScreen from '@screens/setting/account/ResetAccountScreen';
import AddressBookScreen from '@screens/setting/AddressBookScreen';
import AddAddressScreen from '@screens/setting/addressBook/AddAddressScreen';
import LockTimeoutScreen from '@screens/setting/preference/LockTimeoutScreen';
import ReleaseNoteScreen from '@screens/setting/preference/ReleaseNoteScreen';
import LocaleConfigurationScreen from '@screens/setting/preference/LocaleConfigurationScreen';
import DefaultBrowserScreen from '@screens/setting/preference/DefaultBrowserScreen';
import DefaultGasScreen from '@screens/setting/preference/DefaultGasScreen';
import NotificationScreen from '@screens/setting/preference/NotificationScreen';
import ProtectionScreen from '@screens/setting/preference/ProtectionScreen';
import AboutScreen from '@screens/setting/AboutScreen';
import SelectAccountScreen from '@screens/setting/account/SelectAccountScreen';
import AddNewWalletScreen from '@screens/setting/account/AddNewWalletScreen';
import CreateWalletScreen from '@screens/setting/account/CreateWalletScreen';
import ImportWalletScreen from '@screens/setting/account/ImportWalletScreen';
import SuccessScreen from '@screens/setting/account/SuccessScreen';
import SendScreen from '@screens/wallet/SendScreen';
import SendDetailScreen from '@screens/wallet/SendDetailScreen';
import GasPriceScreen from '@screens/wallet/GasPriceScreen';
import NftDetailScreen from '@screens/home/NftDetailScreen';
import DetailHistoryScreen from '@screens/wallet/DetailHistoryScreen';
import TokenDetailScreen from '@screens/home/TokenDetailScreen';
import SelectAssetsScreen from '@screens/home/SelectAssetsScreen';
import SelectNetworkScreen from '@screens/home/SelectNetworkScreen';
import TransactionsScreen from '@screens/home/TransactionsScreen';
import SwapConfirmScreen from '@screens/swap/SwapConfirmScreen';
import BridgeScreen from '@screens/wallet/BridgeScreen';
import BridgeConfirmScreen from '@screens/wallet/BridgeConfirmScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="BottomTabBarNavigator"
        component={BottomTabBarNavigator}
      />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="ReceiveFundScreen" component={ReceiveFundScreen} />
      <Stack.Screen
        name="ConnectedSiteScreen"
        component={ConnectedSiteScreen}
      />
      <Stack.Screen
        name="ExportAccountScreen"
        component={ExportAccountScreen}
      />
      <Stack.Screen
        name="ShowAccountDataScreen"
        component={ShowAccountDataScreen}
      />
      <Stack.Screen name="ResetAccounScreen" component={ResetAccounScreen} />
      <Stack.Screen name="AddressBookScreen" component={AddressBookScreen} />
      <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} />
      <Stack.Screen name="LockTimeoutScreen" component={LockTimeoutScreen} />
      <Stack.Screen name="ReleaseNoteScreen" component={ReleaseNoteScreen} />
      <Stack.Screen
        name="LocaleConfigurationScreen"
        component={LocaleConfigurationScreen}
      />
      <Stack.Screen
        name="DefaultBrowserScreen"
        component={DefaultBrowserScreen}
      />
      <Stack.Screen name="DefaultGasScreen" component={DefaultGasScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="ProtectionScreen" component={ProtectionScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen
        name="SelectAccountScreen"
        component={SelectAccountScreen}
      />
      <Stack.Screen name="AddNewWalletScreen" component={AddNewWalletScreen} />
      <Stack.Screen name="CreateWalletScreen" component={CreateWalletScreen} />
      <Stack.Screen name="ImportWalletScreen" component={ImportWalletScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="SendScreen" component={SendScreen} />
      <Stack.Screen name="SendDetailScreen" component={SendDetailScreen} />
      <Stack.Screen name="GasPriceScreen" component={GasPriceScreen} />
      <Stack.Screen name="NftDetailScreen" component={NftDetailScreen} />
      <Stack.Screen
        name="DetailHistoryScreen"
        component={DetailHistoryScreen}
      />
      <Stack.Screen name="TokenDetailScreen" component={TokenDetailScreen} />
      <Stack.Screen name="SelectAssetsScreen" component={SelectAssetsScreen} />
      <Stack.Screen
        name="SelectNetworkScreen"
        component={SelectNetworkScreen}
      />
      <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} />
      <Stack.Screen name="SwapConfirmScreen" component={SwapConfirmScreen} />
      <Stack.Screen name="BridgeScreen" component={BridgeScreen} />
      <Stack.Screen
        name="BridgeConfirmScreen"
        component={BridgeConfirmScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
