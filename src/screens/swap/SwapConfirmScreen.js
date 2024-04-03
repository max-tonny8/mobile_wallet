import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonImage from '@components/commons/CommonImage';
import {colorOpacity} from '@src/utils/ColorUtil';

import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import Symbol from '@assets/svgs/symbol.svg';
import AvatarIcon from '@assets/svgs/setting/avatar.svg';
import EthIcon from '@assets/svgs/nft/eth_live.svg';
import HorizontalSeparateLine from '@assets/svgs/token/separate_line.svg';

export default function SwapConfirmScreen({navigation, route}) {
  const {theme} = useSelector(state => state.ThemeReducer);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />
      <View
        style={[
          styles.sendHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.sendTitle, {color: theme.primary}]}>
          Confirm Swap
        </CommonText>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingBottom: 24,
            paddingTop: 20,
            paddingHorizontal: 24,
          }}>
          <View style={styles.swapHeader}>
            <CommonText style={[styles.swapLabel, {color: theme.primary}]}>
              Swap Cryptocurrency
            </CommonText>
          </View>
          <View style={{marginBottom: 20}}>
            <CommonGradientBorder bg={'none'}>
              <View style={{paddingHorizontal: 17, paddingVertical: 14}}>
                <CommonText
                  style={[styles.swapControlLabel, {color: theme.main}]}>
                  Swap from
                </CommonText>
                <CommonText
                  style={[styles.swapTokenName, {color: theme.primary}]}>
                  ETH (Ethereum)
                </CommonText>
                <View style={styles.swapMenu}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 100,
                        borderColor: theme.primary,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 6,
                      }}>
                      <CommonImage
                        source={require('@assets/images/symbol.png')}
                        style={{width: 24, height: 24}}
                        resizeMode={'contain'}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.swapAmount}>
                    <CommonText
                      style={[
                        styles.swapValue,
                        {
                          color: theme.primary,
                        },
                      ]}>
                      {0.1872}
                    </CommonText>
                    <CommonText
                      style={[
                        styles.swapTokenSymbol,
                        {color: colorOpacity(theme.main, 0.5)},
                      ]}>
                      ETH
                    </CommonText>
                  </View>
                </View>
              </View>
            </CommonGradientBorder>
            <View style={{alignItems: 'center', marginVertical: 20}}>
              <HorizontalSeparateLine />
            </View>
            <CommonGradientBG>
              <View style={{paddingHorizontal: 17, paddingVertical: 14}}>
                <CommonText
                  style={[styles.swapControlLabel, {color: theme.main}]}>
                  Swap to
                </CommonText>
                <CommonText
                  style={[styles.swapTokenName, {color: theme.primary}]}>
                  ETH (Ethereum)
                </CommonText>
                <View style={styles.swapMenu}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 100,
                        borderColor: theme.primary,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 6,
                      }}>
                      <CommonImage
                        source={require('@assets/images/symbol.png')}
                        style={{width: 24, height: 24}}
                        resizeMode={'contain'}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.swapAmount}>
                    <CommonText
                      style={[
                        styles.swapValue,
                        {
                          color: theme.primary,
                        },
                      ]}>
                      {0.1872}
                    </CommonText>
                    <CommonText
                      style={[
                        styles.swapTokenSymbol,
                        {color: colorOpacity(theme.main, 0.5)},
                      ]}>
                      ETH
                    </CommonText>
                  </View>
                </View>
              </View>
            </CommonGradientBG>
          </View>
          <View style={styles.gasPriceContainer}>
            <CommonText style={[styles.gasPriceLabel, {color: theme.primary}]}>
              Gas Price
            </CommonText>
            <CommonGradientBG style={styles.gasPriceContent}>
              <View style={styles.gasPriceType}>
                <CommonText
                  style={[styles.gasTypeLable, {color: theme.primary}]}>
                  Low
                </CommonText>
                <CommonText
                  style={[
                    styles.gasPriceUsdValue,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  $ 1.42
                </CommonText>
              </View>
              <View style={styles.gasPriceValue}>
                <EthIcon width={8} height={13} />
                <CommonText style={[styles.gasPrice, {color: theme.main2}]}>
                  0.47 ETH
                </CommonText>
                <DropDownIcon width={16} height={16} />
              </View>
            </CommonGradientBG>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBtn}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SuccessScreen', {
              title: 'Swap Asset Success',
              description:
                'You have successfully swap an asset to the target currency',
              callback: () => navigation.navigate('Home'),
            })
          }>
          <CommonText
            style={[
              styles.bottomBtnLabel,
              {color: theme.primary, backgroundColor: theme.main},
            ]}>
            Confirm
          </CommonText>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <View style={styles.bottomCaption}>
            <CommonText
              style={[
                styles.bottomNormal,
                {color: colorOpacity(theme.primary, 0.8)},
              ]}>
              I agree to the{' '}
            </CommonText>
            <CommonText
              style={[styles.bottomUnderline, {color: theme.primary}]}>
              Terms of Service
            </CommonText>
            <CommonText
              style={[
                styles.bottomNormal,
                {color: colorOpacity(theme.primary, 0.8)},
              ]}>
              {' '}
              and{' '}
            </CommonText>
            <CommonText
              style={[styles.bottomUnderline, {color: theme.primary}]}>
              Privacy Policy
            </CommonText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  sendTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  detailContainer: {
    rowGap: 12,
    marginBottom: 20,
  },
  swapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  swapLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  swapControlLabel: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Satoshi-Bold',
  },
  swapTokenName: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Satoshi-Bold',
  },
  swapMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  swapAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    marginLeft: 9,
  },
  swapValue: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: 'Satoshi-Black',
  },
  swapTokenSymbol: {
    fontSize: 18,
    fontFamily: 'Satoshi-Black',
    marginTop: 5,
  },
  gasPriceContainer: {
    marginBottom: 20,
  },
  gasPriceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  gasPriceType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gasTypeLable: {},
  gasPriceUsdValue: {
    marginLeft: 20,
  },
  gasPriceValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gasPrice: {
    marginRight: 15,
  },
  gasPriceLabel: {
    marginBottom: 9,
  },
  bottomBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
    rowGap: 8,
  },
  bottomBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
  bottomCaption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomNormal: {
    fontSize: 12,
    lineHeight: 20,
  },
  bottomUnderline: {
    fontSize: 12,
    lineHeight: 20,
    textDecorationLine: 'underline',
  },
});
