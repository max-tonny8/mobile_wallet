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

export default function TransactionsScreen({navigation, route}) {
  const categories = ['All', 'Buy', 'Send', 'Receive', 'Swap'];
  const [category, setCategory] = useState('All');
  const {theme} = useSelector(state => state.ThemeReducer);

  const TransactionItem = () => {
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

      <View
        style={[
          styles.walletContainer,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
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
        <View
          style={{paddingHorizontal: 24, paddingTop: 15, paddingBottom: 20}}>
          <View style={{marginBottom: 20}}>
            <CommonText
              style={[styles.transactionDateLabel, {color: theme.primary}]}>
              Transactions History
            </CommonText>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.categoryContainer}>
                {categories.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setCategory(data)}
                      key={index}
                      style={[
                        styles.categoryItem,
                        {
                          backgroundColor:
                            data == category
                              ? theme.primary
                              : colorOpacity(theme.secondary2, 0.08),
                          borderColor:
                            data == category
                              ? theme.primary
                              : colorOpacity(theme.secondary1, 0.5),
                        },
                      ]}>
                      <CommonText
                        style={[
                          styles.categoryLabel,
                          {
                            color:
                              data == category ? theme.main : theme.primary,
                          },
                        ]}>
                        {data}
                      </CommonText>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View>
            <CommonText
              style={[styles.transactionDateLabel, {color: theme.primary}]}>
              Today
            </CommonText>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
          </View>
          <View>
            <CommonText
              style={[styles.transactionDateLabel, {color: theme.primary}]}>
              Yesterday
            </CommonText>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
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
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  walletMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    marginTop: 6,
  },
  transactionDateLabel: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    columnGap: 6,
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  categoryLabel: {
    fontSize: 13,
    letterSpacing: 0.13,
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
});
