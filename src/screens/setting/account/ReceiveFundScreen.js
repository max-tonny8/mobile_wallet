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
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonImage from '@components/commons/CommonImage';
import CommonBackButton from '@components/commons/CommonBackButton';
import {colorOpacity} from '@src/utils/ColorUtil';

export default function ReceiveFundScreen({navigation, route}) {
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
          styles.receiveFundHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.receiveFundTitle, {color: theme.primary}]}>
          Receive Fund
        </CommonText>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingBottom: 24,
            paddingHorizontal: 24,
            paddingTop: 20,
          }}>
          <View
            style={[
              styles.activeTokenItem,
              {
                backgroundColor: '#253534e0',
                borderColor: colorOpacity(theme.secondary2, 0.3),
              },
            ]}>
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
            <View style={styles.activeToken}>
              <CommonText
                style={[styles.activeTokenSymbol, {color: theme.primary}]}>
                ETH{' '}
              </CommonText>
              <CommonText
                style={[styles.activeTokenName, {color: theme.primary}]}>
                (Ethereum)
              </CommonText>
            </View>
          </View>
          <View style={styles.qrCode}>
            <CommonImage
              source={require('@assets/images/qr_code.png')}
              style={{width: 252, height: 242}}
            />
          </View>
          <LinearGradient
            colors={[
              'transparent',
              colorOpacity(theme.primary, 0.35),
              'transparent',
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{height: 1, marginBottom: 20}}></LinearGradient>
          <View
            style={[
              styles.activeTokenAdressContianer,
              {
                backgroundColor: colorOpacity(theme.secondary2, 0.1),
                borderColor: colorOpacity(theme.secondary2, 0.3),
              },
            ]}>
            <CommonText
              numberOfLines={1}
              style={[
                styles.activeTokenAdress,
                {color: colorOpacity(theme.primary, 0.4)},
              ]}>
              0x685f98e45904b8969B51850ddf381DE...
            </CommonText>
            <TouchableOpacity>
              <CommonText
                style={[
                  styles.tokenAddressCopy,
                  {
                    color: theme.primary,
                    borderColor: colorOpacity(theme.secondary2, 0.3),
                    backgroundColor: colorOpacity(theme.secondary2, 0.25),
                  },
                ]}>
                Copy
              </CommonText>
            </TouchableOpacity>
          </View>
          <CommonText
            style={{
              color: colorOpacity(theme.primary, 0.5),
              paddingHorizontal: 30,
              textAlign: 'center',
            }}>
            This address can only be used to receive compatible token
          </CommonText>
        </View>
      </ScrollView>
      {/* <TouchableOpacity style={styles.setAmountBtn}>
        <CommonText
          style={[
            styles.setAmountBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Set Amount
        </CommonText>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  receiveFundHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  receiveFundTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  activeTokenItem: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 14,
    marginBottom: 20,
  },
  activeToken: {
    flexDirection: 'row',
  },
  activeTokenSymbol: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Satoshi-Bold',
  },
  activeTokenName: {
    fontSize: 12,
    lineHeight: 26,
    fontFamily: 'Satoshi-Bold',
    marginTop: 1,
  },
  qrCode: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  activeTokenAdressContianer: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    flex: 1,
    marginBottom: 20,
  },
  activeTokenAdress: {
    flex: 1,
  },
  tokenAddressCopy: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  setAmountBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  setAmountBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
