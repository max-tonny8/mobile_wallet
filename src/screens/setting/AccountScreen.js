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
import {GradientBorderView} from '@good-react-native/gradient-border';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import {colorOpacity} from '@src/utils/ColorUtil';

import ArrowRight from '@assets/svgs/common/arrow_right.svg';
import SettingIcon from '@assets/svgs/navbar/setting.svg';
import ReceiveIcon from '@assets/svgs/account/receive_fund.svg';
import ConnectedIcon from '@assets/svgs/account/connect_site.svg';
import ExportIcon from '@assets/svgs/account/export_data.svg';
import ViewIcon from '@assets/svgs/account/view_scan.svg';
import AccountsIcon from '@assets/svgs/account/accounts.svg';
import ResetIcon from '@assets/svgs/account/reset.svg';

export default function AccountScreen({navigation, route}) {
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
          Account
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
          <CommonGradientBorder>
            <View style={{padding: 12}}>
              <View style={styles.activeWalletItem}>
                <View style={styles.activeWalletContent}>
                  <View
                    style={[
                      styles.activeWalletStatus,
                      {backgroundColor: theme.main},
                    ]}></View>
                  <View style={styles.activeWalletInfo}>
                    <CommonText
                      style={[styles.activeWalletName, {color: theme.primary}]}>
                      My Wallet #1
                    </CommonText>
                    <CommonText
                      style={[
                        styles.activeWalletAddress,
                        {color: colorOpacity(theme.primary, 0.6)},
                      ]}>
                      0xA62986298710237h28389
                    </CommonText>
                    <CommonText
                      style={[
                        styles.activeWalletBalance,
                        {color: colorOpacity(theme.main, 0.8)},
                      ]}>
                      10.2412 ETH
                    </CommonText>
                  </View>
                </View>
                <TouchableOpacity style={styles.walletSetting}>
                  <SettingIcon />
                </TouchableOpacity>
              </View>
            </View>
          </CommonGradientBorder>
          <LinearGradient
            colors={[
              'transparent',
              colorOpacity(theme.primary, 0.35),
              'transparent',
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{height: 1, marginBottom: 20}}></LinearGradient>
          <SettingItem
            logo={<ReceiveIcon />}
            label={'Receive Fund'}
            onPress={() => navigation.navigate('ReceiveFundScreen')}
          />
          <SettingItem
            logo={<ConnectedIcon />}
            label={'Connected Sites'}
            onPress={() => navigation.navigate('ConnectedSiteScreen')}
          />
          <SettingItem
            logo={<ExportIcon />}
            label={'Export Account Data'}
            onPress={() => navigation.navigate('ExportAccountScreen')}
          />
          <SettingItem logo={<ViewIcon />} label={'View on Etherscan'} />
          <SettingItem
            logo={<AccountsIcon />}
            label={'My Accounts'}
            onPress={() => navigation.navigate('SelectAccountScreen')}
          />
          <SettingItem
            logo={<ResetIcon />}
            label={'Reset Account'}
            onPress={() => navigation.navigate('ResetAccounScreen')}
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
  activeWalletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeWalletContent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  activeWalletStatus: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  activeWalletInfo: {},
  activeWalletName: {
    fontSize: 14,
  },
  activeWalletAddress: {
    fontSize: 12,
  },
  activeWalletBalance: {
    fontSize: 14,
    fontFamily: 'Satoshi-Black',
  },
  walletSetting: {
    zIndex: 2,
  },
});
