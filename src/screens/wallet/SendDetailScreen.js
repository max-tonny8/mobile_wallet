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
import AvatarIcon from '@assets/svgs/setting/avatar.svg';
import EthIcon from '@assets/svgs/nft/eth_live.svg';

export default function SendDetailScreen({navigation, route}) {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
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
          Send
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
          <View style={styles.detailContainer}>
            <CommonText style={[styles.itemTitle, {color: theme.primary}]}>
              Detail Assets
            </CommonText>
            <CommonGradientBorder bg={'none'}>
              <View style={styles.contactContainer}>
                <View style={styles.contactInfo}>
                  <CommonTokenBG bg={'#34D39915'}>
                    <AvatarIcon />
                  </CommonTokenBG>
                  <View>
                    <CommonText
                      style={[styles.contactName, {color: theme.primary}]}>
                      underground182
                    </CommonText>
                    <CommonText
                      style={[
                        styles.contactAddress,
                        {color: colorOpacity(theme.primary, 0.6)},
                      ]}>
                      0xA62986298710237h28389
                    </CommonText>
                  </View>
                </View>
              </View>
            </CommonGradientBorder>
            <CommonGradientBG>
              <View style={{padding: 14}}>
                <CommonText style={[styles.tokenCaption, {color: theme.main}]}>
                  Amount
                </CommonText>
                <TouchableOpacity style={styles.tokenContainer}>
                  <View style={styles.tokenInfo}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        borderColor: theme.primary,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 12,
                      }}>
                      <CommonImage
                        source={require('@assets/images/symbol.png')}
                        style={{width: 24, height: 24}}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </View>
                    <View style={styles.tokenContent}>
                      <CommonText
                        style={[styles.tokenSymbol, {color: theme.primary}]}>
                        BTC{' '}
                      </CommonText>
                      <CommonText
                        style={[styles.tokenName, {color: theme.primary}]}>
                        (Bitcoin)
                      </CommonText>
                    </View>
                  </View>
                  <DropDownIcon />
                </TouchableOpacity>
              </View>
            </CommonGradientBG>
            <CommonGradientBG>
              <View style={{padding: 14}}>
                <CommonText style={[styles.tokenCaption, {color: theme.main}]}>
                  Amount
                </CommonText>
                <View style={[styles.tokenContainer, {alignItems: 'flex-end'}]}>
                  <View
                    style={[styles.tokenAmount, {flex: amount == '' ? 0 : 1}]}>
                    <View style={styles.tokenBalance}>
                      <TextInput
                        style={[
                          styles.inputAmount,
                          {
                            color: theme.primary,
                            paddingRight: amount == '' ? 0 : 30,
                            flex: 1,
                          },
                        ]}
                        placeholderTextColor={colorOpacity(theme.primary, 0.6)}
                        placeholder="0.0"
                        autoCorrect={false}
                        value={amount}
                        onChangeText={value => setAmount(value)}
                      />
                      {amount == '' && (
                        <CommonText
                          style={[styles.amountSymbol, {color: theme.main}]}>
                          ETH
                        </CommonText>
                      )}
                    </View>
                    <CommonText
                      style={[
                        styles.usdBalance,
                        {color: colorOpacity(theme.primary, 0.5)},
                      ]}>
                      $12.789 USD
                    </CommonText>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.maxBtn,
                      {
                        borderColor: colorOpacity(theme.primary, 0.3),
                        backgroundColor: colorOpacity(theme.secondary2, 0.2),
                      },
                    ]}>
                    <CommonText
                      style={[styles.maxLabel, {color: theme.primary}]}>
                      Max
                    </CommonText>
                  </TouchableOpacity>
                </View>
              </View>
            </CommonGradientBG>
          </View>
          <View style={styles.gasPriceContainer}>
            <CommonText style={[styles.gasPriceLabel, {color: theme.primary}]}>
              Gas Price
            </CommonText>
            <TouchableOpacity
              style={{zIndex: 2}}
              onPress={() => navigation.navigate('GasPriceScreen')}>
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
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBtn}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SuccessScreen', {
              title: 'Send Asset Success',
              description:
                'You have successfully send an asset to the recipient',
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
  detailContainer: {
    rowGap: 12,
    marginBottom: 20,
  },
  sendTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  itemTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  contactName: {
    fontSize: 14,
  },
  contactAddress: {
    fontSize: 12,
  },
  tokenCaption: {
    marginBottom: 6,
  },
  tokenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  tokenInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenContent: {
    flexDirection: 'row',
  },
  tokenSymbol: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Satoshi-Bold',
  },
  tokenName: {
    fontSize: 12,
    lineHeight: 26,
    fontFamily: 'Satoshi-Bold',
    marginTop: 1,
  },
  tokenAmount: {},
  tokenBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inputAmount: {
    zIndex: 2,
    fontSize: 20,
    fontFamily: 'Satoshi-Bold',
  },
  amountSymbol: {
    fontSize: 20,
    fontFamily: 'Satoshi-Bold',
    marginTop: -2,
  },
  maxBtn: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 2,
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
