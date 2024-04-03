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
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonImage from '@components/commons/CommonImage';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonBackButton from '@components/commons/CommonBackButton';
import {colorOpacity} from '@src/utils/ColorUtil';

import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import AvatarIcon from '@assets/svgs/setting/avatar.svg';
import SwapIcon from '@assets/svgs/navbar/swap.svg';

import EthIcon from '@assets/svgs/nft/eth_live.svg';

export default function BridgeScreen() {
  const navigation = useNavigation();
  const [swapAmount, setSwapAmount] = useState({
    from: '',
    to: '',
  });
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
          Bridge
        </CommonText>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 24, paddingBottom: 20}}>
          <View style={styles.swapHeader}>
            <CommonText style={[styles.swapLabel, {color: theme.primary}]}>
              Bridge Cryptocurrency
            </CommonText>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CommonText
                style={[
                  styles.swapCancel,
                  {color: colorOpacity(theme.primary, 0.5)},
                ]}>
                Cancel
              </CommonText>
            </TouchableOpacity>
          </View>
          <View style={styles.swapControlContainer}>
            <ImageBackground
              source={require('@assets/images/swap_up.png')}
              resizeMode={'contain'}
              style={{
                width: '100%',
                aspectRatio: 3.2,
                borderRadius: 10,
                marginBottom: 16,
              }}>
              <View style={{paddingHorizontal: 17, paddingVertical: 14}}>
                <CommonText
                  style={[styles.swapControlLabel, {color: theme.main}]}>
                  Bridge from
                </CommonText>
                <CommonText
                  style={[styles.swapTokenName, {color: theme.primary}]}>
                  ETH (Ethereum)
                </CommonText>
                <View style={styles.swapMenu}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SelectAssetsScreen', {
                        callback: () => navigation.navigate('Swap'),
                      })
                    }
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
                    <DropDownIcon />
                  </TouchableOpacity>
                  <View style={styles.swapAmount}>
                    <TextInput
                      style={[
                        styles.swapValue,
                        {
                          color: theme.primary,
                          width: swapAmount.from == '' ? 60 : 100,
                          // height: 50,
                        },
                      ]}
                      placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                      placeholder="0.0"
                      value={swapAmount.from}
                      onChangeText={value =>
                        setSwapAmount({...swapAmount, from: value})
                      }
                    />
                    {swapAmount.from == '' && (
                      <CommonText
                        style={[
                          styles.swapTokenSymbol,
                          {color: colorOpacity(theme.main, 0.5)},
                        ]}>
                        ETH
                      </CommonText>
                    )}
                  </View>
                </View>
              </View>
            </ImageBackground>
            <TouchableOpacity
              style={{
                width: 48,
                height: 48,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.main,
                borderRadius: 100,
                position: 'absolute',
                top: '34%',
                right: '10%',
                transform: [
                  {
                    rotateZ: '90deg',
                  },
                  {
                    translateX: -24,
                  },
                  {
                    translateY: 2,
                  },
                ],
              }}>
              <SwapIcon />
            </TouchableOpacity>
            <ImageBackground
              source={require('@assets/images/swap_down.png')}
              resizeMode={'contain'}
              style={{
                width: '100%',
                aspectRatio: 3.2,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SelectNetworkScreen', {
                    callback: () => navigation.navigate('BridgeScreen'),
                  })
                }
                style={{
                  paddingHorizontal: 17,
                  paddingVertical: 14,
                }}>
                <CommonText
                  style={[
                    styles.swapControlLabel,
                    {color: theme.main, marginBottom: 10},
                  ]}>
                  To Network
                </CommonText>
                <View style={styles.networkItem}>
                  <View style={styles.networkInfo}>
                    <CommonTokenBG bg={'#34D39915'}>
                      <AvatarIcon />
                    </CommonTokenBG>
                    <CommonText
                      style={[styles.swapTokenName, {color: theme.primary}]}>
                      Polygon Mainnet
                    </CommonText>
                  </View>
                  <DropDownIcon />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <CommonGradientBG>
              <View style={{paddingHorizontal: 17, paddingVertical: 14}}>
                <CommonText
                  style={[styles.swapControlLabel, {color: theme.main}]}>
                  Bridge to
                </CommonText>
                <CommonText
                  style={[styles.swapTokenName, {color: theme.primary}]}>
                  ETH (Ethereum)
                </CommonText>
                <View style={styles.swapMenu}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      zIndex: 2,
                    }}>
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
                  </View>
                  <View style={styles.swapAmount}>
                    <CommonText
                      style={[styles.swapValue, {color: theme.primary}]}>
                      0.1856
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
            <TouchableOpacity style={{zIndex: 2}}>
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
          <View style={{opacity: 1}}>
            <CommonText style={[styles.feePrice, {color: theme.main}]}>
              Bridge fees : 0.0 ETH
            </CommonText>
            <CommonText
              style={[
                styles.durationText,
                {color: theme.secondary1},
              ]}>{`Estimation duration : <5 minutes`}</CommonText>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{paddingHorizontal: 24, marginBottom: 24}}
        onPress={() => navigation.navigate('BridgeConfirmScreen')}>
        <CommonText
          style={[
            styles.reviewBtn,
            {
              color: theme.primary,
              backgroundColor: colorOpacity(theme.main, 0.4),
              borderColor: colorOpacity(theme.secondary2, 0.5),
            },
          ]}>
          Review Bridge
        </CommonText>
      </TouchableOpacity>
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
  swapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginBottom: 20,
  },
  swapLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  swapCancel: {
    fontSize: 14,
    lineHeight: 20,
  },
  swapControlContainer: {
    marginBottom: 20,
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
  feePrice: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 6,
  },
  durationText: {
    fontSize: 14,
    lineHeight: 16,
  },
  reviewBtn: {
    textAlign: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderWidth: 1,
  },
  networkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10,
  },
  networkInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
