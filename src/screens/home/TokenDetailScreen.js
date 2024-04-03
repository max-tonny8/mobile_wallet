import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonImage from '@components/commons/CommonImage';

import {colorOpacity} from '@src/utils/ColorUtil';

import TitleLogo from '@assets/svgs/title_logo.svg';
import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import Symbol from '@assets/svgs/symbol.svg';
import TokenChat from '@assets/svgs/token_chat.svg';
import PriceUpIcon from '@assets/svgs/token/price_up.svg';
import PriceDOwnIcon from '@assets/svgs/token/price_down.svg';
import TopUp from '@assets/svgs/token/top_up.svg';

export default function TokenDetailScreen({navigation, route}) {
  const {theme} = useSelector(state => state.ThemeReducer);
  const [tabs, setTabs] = useState('tokens');

  const transactionItem = () => {
    return (
      <TouchableOpacity
        style={styles.transactionItemContainer}
        onPress={() => navigation.navigate('DetailHistoryScreen')}>
        <View style={styles.transactionItem}>
          <View style={styles.transactionPrice}>
            <CommonTokenBG size={40} bg={'#34D39915'}>
              <TopUp />
            </CommonTokenBG>
            <CommonText
              style={[styles.transactionValue, {color: theme.primary}]}>
              0.01823 ETH
            </CommonText>
          </View>
          <View style={styles.transactionStatus}>
            <CommonText
              style={[styles.transactionLabel, {color: theme.primary}]}>
              Top up
            </CommonText>
            <CommonText
              style={[
                styles.transactionTime,
                {color: colorOpacity(theme.main, 0.7)},
              ]}>
              1 hour ago
            </CommonText>
          </View>
        </View>
        <LinearGradient
          colors={[colorOpacity(theme.main2, 0.5), '#00000000']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={[
            styles.liveBiddingItemContainer,
            {
              borderColor: colorOpacity(theme.secondary2, 0.25),
              height: 1,
              width: '100%',
            },
          ]}></LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />

      <View style={styles.walletContainer}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 15}}>
          <CommonBackButton onPress={() => navigation.goBack()} />
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
        </View>
        <TouchableOpacity>
          <CommonTokenBG bg={colorOpacity(theme.primary, 0.35)} size={30}>
            <Symbol />
          </CommonTokenBG>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 24, paddingTop: 25}}>
          <CommonGradientBG style={{paddingVertical: 20}}>
            <View>
              <View style={styles.tokenDeltaContainer}>
                <CommonText style={[styles.tokenName, {color: theme.primary}]}>
                  Ethereum
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
                <View style={styles.deltaContainer}>
                  <CommonText
                    style={[
                      styles.deltaBalance,
                      {color: colorOpacity(theme.primary, 0.8)},
                    ]}>
                    $0.0672 (1.22%)
                  </CommonText>
                  <View
                    style={[
                      styles.hourContainer,
                      {backgroundColor: theme.primary},
                    ]}>
                    <PriceUpIcon />
                    <CommonText
                      style={[
                        styles.hourDeltaBalance,
                        {color: theme.contrast},
                      ]}>
                      10%
                    </CommonText>
                  </View>
                </View>
              </View>
              <TokenChat width={'100%'} />
              <View style={styles.controlContainer}>
                <TouchableOpacity style={{zIndex: 2}}>
                  <CommonButtonBG bg={'#34D39915'} size={54}>
                    <CommonImage
                      source={require('@assets/images/buy.png')}
                      style={{width: 24, height: 24}}
                    />
                  </CommonButtonBG>
                  <CommonText
                    style={[styles.controlLabel, {color: theme.primary}]}>
                    Buy
                  </CommonText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{zIndex: 2}}
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
                  style={{zIndex: 2}}
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
                <TouchableOpacity
                  style={{zIndex: 2}}
                  onPress={() => navigation.navigate('Swap')}>
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
              </View>
            </View>
          </CommonGradientBG>
          <View style={styles.transactionsContainer}>
            <View style={[styles.detailContainer]}>
              <CommonText style={[styles.detailLabel, {color: theme.primary}]}>
                Recent Activity
              </CommonText>
              <TouchableOpacity
                onPress={() => navigation.navigate('TransactionsScreen')}>
                <CommonText
                  style={[styles.detailSeeAll, {color: theme.primary}]}>
                  See all
                </CommonText>
              </TouchableOpacity>
            </View>
            {transactionItem()}
            {transactionItem()}
            {transactionItem()}
            {transactionItem()}
            {transactionItem()}
            {transactionItem()}
            {transactionItem()}
          </View>
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
  tokenDeltaContainer: {
    paddingHorizontal: 20,
  },
  tokenName: {
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 10,
  },
  balenceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
    marginBottom: 5,
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
  deltaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
    marginBottom: 10,
  },
  deltaBalance: {
    fontSize: 16,
    lineHeight: 26,
  },
  hourContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  hourDeltaBalance: {
    fontSize: 12,
    lineHeight: 16,
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  controlLabel: {
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
  },
  transactionsContainer: {
    marginVertical: 20,
  },
  transactionItemContainer: {
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  transactionValue: {
    fontSize: 14,
    lineHeight: 20,
  },
  transactionStatus: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  transactionLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Satoshi-Bold',
  },
  transactionTime: {
    fontSize: 12,
    lineHeight: 20,
  },
  detailLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  detailSeeAll: {
    fontSize: 14,
    lineHeight: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
