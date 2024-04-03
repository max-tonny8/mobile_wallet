import * as React from 'react';
import {useEffect} from 'react';
import {enableScreens} from 'react-native-screens';

import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import ReduxStore from '@modules/redux/ReduxStore';
import {LogBox} from 'react-native';

import {ProviderFactory} from '@modules/core/factory/ProviderFactory';
import ApplicationNavigator from '@modules/navigation/ApplicationNavigator';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['VirtualizedLists should never']);

enableScreens();
export default function App() {
  useEffect(() => {
    (async () => {
      // await StorageUtil.clear();
      //await TokenService.upgrade();
      ProviderFactory.init([
        {
          chain: 'ETHEREUM',
          name: 'Ethereum',
          chainId: 1,
          rpcUrl: 'https://eth.llamarpc.com',
          apiEndpoint: 'https://api.etherscan.com/api',
          apiKey: 'EI95F1A7XHVT219DDCM9472XE7NGWQ8T3V',
          testnet: false,
        },
        {
          chain: 'ETHEREUM',
          name: 'BNB',
          rpcUrl: 'https://bsc-dataseed1.defibit.io/',
          chainId: 56,
          apiEndpoint: 'https://api.bscscan.com/api',
          apiKey: 'PWDHTP6FGSVSTMYSTPBJ4BFN44Z7GNXWPZ',
          testnet: false,
        },
        {
          chain: 'ETHEREUM',
          name: 'Polygon',
          rpcUrl:
            'https://polygon-mainnet.g.alchemy.com/v2/3kOYMQggguF2eEdBEBHokzgp6tnKosU0',
          chainId: 137,
          apiEndpoint: 'https://api.polygonscan.com/api',
          apiKey: 'ADZI52F2INID3WJCEJPV7TEQUQUMRNE9M7',
          testnet: false,
        },
        {
          chain: 'RIPPLE',
          name: 'XRP',
          rpcUrl: 'https://s1.ripple.com:51234/',
          apiEndpoint: '',
          apiKey: 'ADZI52F2INID3WJCEJPV7TEQUQUMRNE9M7',
          testnet: false,
        },
        {
          chain: 'ETHEREUM',
          name: 'Avalanche',
          chainId: 43114,
          rpcUrl:
            'https://avalanche-mainnet.infura.io/v3/d26d5f4154164d209e83e3ca30be634f',
          apiEndpoint: 'https://api.etherscan.com/api',
          apiKey: '4DUWR9JECH25G9YCXSZ6UPERZ16SRBG6WR',
          testnet: false,
        },
        {
          chain: 'ETHEREUM',
          name: 'Optimism',
          chainId: 10,
          rpcUrl: 'https://mainnet.optimism.io',
          apiEndpoint: 'https://api.etherscan.com/api',
          apiKey: '4DUWR9JECH25G9YCXSZ6UPERZ16SRBG6WR',
          testnet: false,
        },
        {
          chain: 'ETHEREUM',
          name: 'Fantom',
          chainId: 250,
          rpcUrl: 'https://rpc.ftm.tools',
          apiEndpoint: 'https://api.etherscan.com/api',
          apiKey: '4DUWR9JECH25G9YCXSZ6UPERZ16SRBG6WR',
          testnet: false,
        },
        {
          chain: 'ETHEREUM',
          name: 'Celo',
          chainId: 42220,
          rpcUrl: 'https://forno.celo.org',
          apiEndpoint: 'https://api.etherscan.com/api',
          apiKey: '4DUWR9JECH25G9YCXSZ6UPERZ16SRBG6WR',
          testnet: false,
        },
        {
          chain: 'ETHEREUM',
          chainId: 42161,
          name: 'Arbitrum',
          rpcUrl: 'https://arb1.arbitrum.io/rpc ',
          apiEndpoint: 'https://api.etherscan.com/api',
          apiKey: '4DUWR9JECH25G9YCXSZ6UPERZ16SRBG6WR',
          testnet: false,
        },
      ]);
    })();
  }, []);
  return (
    <Provider store={ReduxStore}>
      <ApplicationNavigator />
    </Provider>
  );
}
