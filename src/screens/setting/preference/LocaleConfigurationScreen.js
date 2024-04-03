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
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-native-switch';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import DropdownIcon from '@assets/svgs/common/arrow_down.svg';

export default function LocaleConfigurationScreen({navigation, route}) {
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
          styles.localeConfigurationHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText
          style={[styles.localeConfigurationTitle, {color: theme.primary}]}>
          Locale Configuration
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
          <TouchableOpacity style={styles.itemContainer}>
            <CommonText style={[styles.itemLabel, {color: theme.primary}]}>
              Currency
            </CommonText>
            <CommonGradientBG
              style={{
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CommonText
                style={[
                  styles.itemText,
                  {color: colorOpacity(theme.primary, 0.5)},
                ]}>
                USD - United States Dollar
              </CommonText>
              <DropdownIcon />
            </CommonGradientBG>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <CommonText style={[styles.itemLabel, {color: theme.primary}]}>
              Language
            </CommonText>
            <CommonGradientBG
              style={{
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CommonText
                style={[
                  styles.itemText,
                  {color: colorOpacity(theme.primary, 0.5)},
                ]}>
                English
              </CommonText>
              <DropdownIcon />
            </CommonGradientBG>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <CommonText style={[styles.itemLabel, {color: theme.primary}]}>
              Timezone
            </CommonText>
            <CommonGradientBG
              style={{
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CommonText
                style={[
                  styles.itemText,
                  {color: colorOpacity(theme.primary, 0.5)},
                ]}>
                GMT +7 (Jakarta, Bangkok)
              </CommonText>
              <DropdownIcon />
            </CommonGradientBG>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => navigation.goBack()}>
        <CommonText
          style={[
            styles.saveBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Save
        </CommonText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  localeConfigurationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  localeConfigurationTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemLabel: {
    marginBottom: 9,
  },
  itemText: {},
  saveBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  saveBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
