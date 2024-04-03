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
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import CommonBackButton from '@components/commons/CommonBackButton';
import {colorOpacity} from '@src/utils/ColorUtil';

import ArrowRight from '@assets/svgs/common/arrow_right.svg';
import LockIcon from '@assets/svgs/setting/lock_timeout.svg';
import LocaleIcon from '@assets/svgs/setting/locale.svg';
import ReleaseIcon from '@assets/svgs/setting/release.svg';
import DefaultBrowserIcon from '@assets/svgs/setting/default_browser.svg';
import DefaultGasIcon from '@assets/svgs/setting/default_gas.svg';
import NotificationIcon from '@assets/svgs/setting/notification.svg';
import ProtectionIcon from '@assets/svgs/setting/protection.svg';

export default function PreferenceScreen({navigation, route}) {
  const {theme} = useSelector(state => state.ThemeReducer);

  const SettingItem = ({logo, label, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          style={[
            styles.settingItem,
            {borderColor: colorOpacity(theme.secondary2, 0.3)},
          ]}
          colors={
            label == 'Logout'
              ? [colorOpacity(theme.danger2, 1), colorOpacity(theme.danger2, 1)]
              : [
                  colorOpacity(theme.secondary1, 0.1),
                  colorOpacity(theme.secondary1, 0.04),
                ]
          }>
          <View style={[styles.settingInfo]}>
            <View>{logo}</View>
            <CommonText style={[styles.itemLabel, {color: theme.primary}]}>
              {label}
            </CommonText>
          </View>
          <ArrowRight />
        </LinearGradient>
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
          styles.preferenceHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.preferenceTitle, {color: theme.primary}]}>
          Preferences
        </CommonText>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{paddingBottom: 90, paddingHorizontal: 24, paddingTop: 20}}>
          <SettingItem
            logo={<LockIcon />}
            label={'Lock Timeout'}
            onPress={() => navigation.navigate('LockTimeoutScreen')}
          />
          <SettingItem
            logo={<LocaleIcon />}
            label={'Locale Configuration'}
            onPress={() => navigation.navigate('LocaleConfigurationScreen')}
          />
          <SettingItem
            logo={<ReleaseIcon />}
            label={'Release Notes'}
            onPress={() => navigation.navigate('ReleaseNoteScreen')}
          />
          <SettingItem
            logo={<DefaultBrowserIcon />}
            label={'Default Browser Wallet'}
            onPress={() => navigation.navigate('DefaultBrowserScreen')}
          />
          <SettingItem
            logo={<DefaultGasIcon />}
            label={'Default Gas Setting'}
            onPress={() => navigation.navigate('DefaultGasScreen')}
          />
          <SettingItem
            logo={<NotificationIcon />}
            label={'Notification & Warning'}
            onPress={() => navigation.navigate('NotificationScreen')}
          />
          <SettingItem
            logo={<ProtectionIcon />}
            label={'Phishing  Protection'}
            onPress={() => navigation.navigate('ProtectionScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preferenceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  preferenceTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 20,
    paddingTop: 20,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  itemLabel: {
    fontSize: 14,
    lineHeight: 20,
  },
});
