import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import TopUp from '@assets/svgs/token/top_up.svg';
import Send from '@assets/svgs/token/send.svg';

export default function ActivityPanel() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const navigation = useNavigation();

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
    <View style={styles.transactionsContainer}>
      {transactionItem()}
      {transactionItem()}
      {transactionItem()}
      {transactionItem()}
      {transactionItem()}
      {transactionItem()}
      {transactionItem()}
    </View>
  );
}

const styles = StyleSheet.create({
  transactionsContainer: {
    paddingHorizontal: 24,
    marginBottom: 20,
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
