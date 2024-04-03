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
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';

import {colorOpacity} from '@src/utils/ColorUtil';

import WarningIcon from '@assets/svgs/common/warning.svg';
import DownloadIcon from '@assets/svgs/common/download.svg';

export default function ResetAccounScreen({navigation, route}) {
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
          styles.resetAccountHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.resetAccountTitle, {color: theme.primary}]}>
          Reset Account
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
          <View style={{marginBottom: 20}}>
            <View style={styles.warningHeader}>
              <WarningIcon />
              <CommonText style={[styles.warningLabel, {color: theme.primary}]}>
                Warning
              </CommonText>
            </View>
            <CommonText
              style={[
                styles.warningContent,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Resetting your account will clear the transaction history and
              added tokens. You will not need to re-import your seed phrase and
              your on-chain balance will not change. You will be able to use
              your account normally.
            </CommonText>
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
          <View>
            <CommonGradientBG>
              <View style={styles.downloadContainer}>
                <CommonText
                  style={[
                    styles.downloadLabel,
                    {color: colorOpacity(theme.primary, 0.6)},
                  ]}>
                  Download state logs for support
                </CommonText>
                <TouchableOpacity
                  style={[styles.downloadBtn, {backgroundColor: theme.main}]}>
                  <DownloadIcon />
                </TouchableOpacity>
              </View>
            </CommonGradientBG>
            <CommonText
              style={[
                styles.downloadCaption,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Please download your state logs if you need support before
              resetting your account.
            </CommonText>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.resetBtn}
        onPress={() => navigation.goBack()}>
        <CommonText
          style={[
            styles.resetBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Reset
        </CommonText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resetAccountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  resetAccountTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
    marginBottom: 8,
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  warningLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  warningContent: {},
  downloadBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    zIndex: 2,
  },
  downloadCaption: {
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  resetBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  resetBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
