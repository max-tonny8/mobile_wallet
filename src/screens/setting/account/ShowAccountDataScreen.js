import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import {colorOpacity} from '@src/utils/ColorUtil';

import CopyIcon from '@assets/svgs/common/copy.svg';
import WarningIcon from '@assets/svgs/common/warning_secondary.svg';

export default function ShowAccountDataScreen({navigation, route}) {
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
          styles.exportAccountHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.exportAccountTitle, {color: theme.primary}]}>
          Export Account Data
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
          <CommonGradientBorder borderWidth={2}>
            <CommonText style={[styles.exportData, {color: theme.primary}]}>
              0x685f98e45904b8969B51850ddf3845904b8969B51850ddf381D1DE
            </CommonText>
          </CommonGradientBorder>
          <TouchableOpacity style={{marginBottom: 20}}>
            <CommonGradientBG>
              <View style={styles.copyContainer}>
                <CopyIcon />
                <CommonText style={[styles.copyLabel, {color: theme.primary}]}>
                  Copy key to clipboard
                </CommonText>
              </View>
            </CommonGradientBG>
          </TouchableOpacity>
          <View style={styles.warningContainer}>
            <WarningIcon />
            <CommonText
              style={[
                styles.warningLabel,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Warning: Never disclose this information. Anyone with your private
              keys can steal any assets held in your account.
            </CommonText>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.exportBtn}
        onPress={() => navigation.goBack()}>
        <CommonText
          style={[
            styles.exportBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Done
        </CommonText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exportAccountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  exportAccountTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  exportData: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Satoshi-MediumItalic',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 26,
  },
  copyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 7,
    padding: 14,
  },
  copyLabel: {
    fontSize: 14,
    lineHeight: 20,
  },
  warningContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  warningLabel: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
  },
  exportBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  exportBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
