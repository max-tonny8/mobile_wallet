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
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import {signOutSuccess} from '@persistence/user/UserReducer';

import TitleLogo from '@assets/svgs/title_logo.svg';
import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import Symbol from '@assets/svgs/symbol.svg';
import ArrowRight from '@assets/svgs/common/arrow_right.svg';
import AboutIcon from '@assets/svgs/setting/about.svg';
import AccountIcon from '@assets/svgs/setting/account.svg';
import AddressBookIcon from '@assets/svgs/setting/address_book.svg';
import HardwareIcon from '@assets/svgs/setting/hardware.svg';
import NetworkIcon from '@assets/svgs/setting/network.svg';
import PreferenceIcon from '@assets/svgs/setting/preferences.svg';
import LogoutIcon from '@assets/svgs/setting/logout.svg';

export default function SettingScreen() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
          styles.walletContainer,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <View>
          <TitleLogo />
          <TouchableOpacity style={styles.walletMenu}>
            <CommonText
              style={{color: theme.primary}}
              onPress={() => navigation.navigate('SelectAccountScreen')}>
              MY WALLET #3
            </CommonText>
            <DropDownIcon />
          </TouchableOpacity>
        </View>
        <CommonTokenBG bg={colorOpacity(theme.primary, 0.35)} size={30}>
          <Symbol />
        </CommonTokenBG>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 90, paddingHorizontal: 24}}>
          <CommonText style={[styles.settingLabel, {color: theme.primary}]}>
            Settings
          </CommonText>
          <View>
            <SettingItem
              logo={<AccountIcon />}
              label={'Account'}
              onPress={() => navigation.navigate('AccountScreen')}
            />
            <SettingItem logo={<NetworkIcon />} label={'Network'} />
            <SettingItem
              logo={<AddressBookIcon />}
              label={'Address Book'}
              onPress={() => navigation.navigate('AddressBookScreen')}
            />
            <SettingItem
              logo={<PreferenceIcon />}
              label={'Preferences'}
              onPress={() => navigation.navigate('PreferenceScreen')}
            />
            <SettingItem
              logo={<HardwareIcon />}
              label={'Connect Hardware Wallet'}
            />
            <SettingItem
              logo={<AboutIcon />}
              label={'About'}
              onPress={() => navigation.navigate('AboutScreen')}
            />
            <SettingItem
              logo={<LogoutIcon />}
              label={'Logout'}
              onPress={() => dispatch(signOutSuccess())}
            />
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
