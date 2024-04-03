import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import TokensPanel from './TokensPanel';
import NftsPanel from './NftsPanel';
import ActivityPanel from './ActivityPanel';
import {WalletAction} from '@persistence/wallet/WalletAction';
import {colorOpacity} from '@src/utils/ColorUtil';

import TitleLogo from '@assets/svgs/title_logo.svg';
import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import Symbol from '@assets/svgs/symbol.svg';

function HomeScreen() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const [tabs, setTabs] = useState('tokens');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WalletAction.balance());
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(WalletAction.balance());
    setRefreshing(false);
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />

      <View style={styles.walletContainer}>
        <View>
          <TitleLogo />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.walletMenu}
              onPress={() => navigation.navigate('SelectAccountScreen')}>
              <CommonText style={{color: theme.primary}}>
                MY WALLET #3
              </CommonText>
              <DropDownIcon />
            </TouchableOpacity>
            <View></View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SelectNetworkScreen', {
              callback: () => navigation.navigate('Home'),
            })
          }>
          <CommonTokenBG bg={colorOpacity(theme.primary, 0.35)} size={30}>
            <Symbol />
          </CommonTokenBG>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{paddingBottom: 90}}>
          <View style={{paddingHorizontal: 24}}>
            <View style={styles.walletControlContainer}>
              <View style={styles.balanceContainer}>
                <CommonText
                  style={[
                    styles.balanceCaption,
                    {color: colorOpacity(theme.primary, 0.8)},
                  ]}>
                  Your available balance
                </CommonText>
                <View style={styles.balenceContent}>
                  <Symbol />
                  <View style={styles.balenceValue}>
                    <CommonText
                      style={[styles.balanceToken, {color: theme.primary}]}>
                      0.1827
                    </CommonText>
                    <CommonText
                      style={[
                        styles.balanceSymbol,
                        {color: colorOpacity(theme.main, 0.5)},
                      ]}>
                      ETH
                    </CommonText>
                  </View>
                </View>
                <CommonText style={[styles.usdBalance, {color: theme.primary}]}>
                  $ 215.45 USD
                </CommonText>
              </View>
              <View style={styles.controlContainer}>
                <TouchableOpacity
                  style={{}}
                  onPress={() => navigation.navigate('SendScreen')}>
                  <CommonButtonBG bg={'#34D39915'} size={54}>
                    <CommonImage
                      source={require('@assets/images/send.png')}
                      style={{width: 24, height: 24}}
                    />
                  </CommonButtonBG>
                  <CommonText
                    style={[styles.controlLabel, {color: theme.primary}]}>
                    Send
                  </CommonText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ReceiveFundScreen')}>
                  <CommonButtonBG bg={'#34D39915'} size={54}>
                    <CommonImage
                      source={require('@assets/images/receive.png')}
                      style={{width: 24, height: 24}}
                    />
                  </CommonButtonBG>
                  <CommonText
                    style={[styles.controlLabel, {color: theme.primary}]}>
                    Receive
                  </CommonText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Swap')}>
                  <CommonButtonBG bg={'#34D39915'} size={54}>
                    <CommonImage
                      source={require('@assets/images/swap.png')}
                      style={{width: 24, height: 24}}
                    />
                  </CommonButtonBG>
                  <CommonText
                    style={[styles.controlLabel, {color: theme.primary}]}>
                    Swap
                  </CommonText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('BridgeScreen')}>
                  <CommonButtonBG bg={'#34D39915'} size={54}>
                    <CommonImage
                      source={require('@assets/images/bridge.png')}
                      style={{width: 24, height: 24}}
                    />
                  </CommonButtonBG>
                  <CommonText
                    style={[styles.controlLabel, {color: theme.primary}]}>
                    Bridge
                  </CommonText>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                styles.tabsContainer,
                {backgroundColor: colorOpacity(theme.primary, 0.05)},
              ]}>
              <TouchableOpacity
                onPress={() => setTabs('tokens')}
                style={[
                  styles.tabItem,
                  {
                    backgroundColor:
                      tabs == 'tokens' ? theme.main : '#00000000',
                  },
                ]}>
                <CommonText style={[styles.tabText, {color: theme.primary}]}>
                  Tokens
                </CommonText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTabs('nft')}
                style={[
                  styles.tabItem,
                  {backgroundColor: tabs == 'nft' ? theme.main : '#00000000'},
                ]}>
                <CommonText style={[styles.tabText, {color: theme.primary}]}>
                  NFT
                </CommonText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTabs('activity')}
                style={[
                  styles.tabItem,
                  {
                    backgroundColor:
                      tabs == 'activity' ? theme.main : '#00000000',
                  },
                ]}>
                <CommonText style={[styles.tabText, {color: theme.primary}]}>
                  Activity
                </CommonText>
              </TouchableOpacity>
            </View>
          </View>
          {tabs == 'tokens' && <TokensPanel />}
          {tabs == 'nft' && <NftsPanel />}
          {tabs == 'activity' && <ActivityPanel />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    marginBottom: 10,
    paddingHorizontal: 24,
  },
  walletMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    marginTop: 6,
  },
  walletControlContainer: {
    paddingTop: 26,
    paddingHorizontal: 21,
    paddingBottom: 13,
    marginBottom: 20,
  },
  balanceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  balanceCaption: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10,
  },
  balenceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  balenceValue: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    columnGap: 10,
  },
  balanceToken: {
    fontSize: 26,
    fontFamily: 'Satoshi-Bold',
  },
  balanceSymbol: {
    fontSize: 24,
    fontFamily: 'Satoshi-Bold',
  },
  usdBalance: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    lineHeight: 26,
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlLabel: {
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 8,
    padding: 8,
    borderRadius: 8,
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 32,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tabText: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
});

export default HomeScreen;
