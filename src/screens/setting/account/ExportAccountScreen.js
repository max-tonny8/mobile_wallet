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

import CommonText from '@components/commons/CommonText';
import CommonImage from '@components/commons/CommonImage';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import {colorOpacity} from '@src/utils/ColorUtil';

import DropdownIcon from '@assets/svgs/common/arrow_down.svg';

export default function ExportAccountScreen({navigation, route}) {
  const [password, setPassword] = useState('');
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
          <CommonGradientBorder style={{marginBottom: 20}}>
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
                  </View>
                </View>
              </View>
            </View>
          </CommonGradientBorder>
          <View style={styles.passwordContainer}>
            <CommonText style={[styles.passwordLabel, {color: theme.primary}]}>
              Your Password
            </CommonText>
            <CommonGradientBorder>
              <TextInput
                style={[
                  styles.password,
                  {
                    color: theme.primary,
                    width: '100%',
                    height: 50,
                    zIndex: 2,
                    padding: 12,
                  },
                ]}
                placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                placeholder="Enter your password."
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                onChangeText={value => setPassword(value)}
              />
            </CommonGradientBorder>
          </View>
          <View style={styles.formatContainer}>
            <CommonText style={[styles.formatLabel, {color: theme.primary}]}>
              Format
            </CommonText>
            <CommonGradientBG style={styles.formatContnt}>
              <CommonText style={[styles.ItemLabel, {color: theme.primary}]}>
                Private Key
              </CommonText>
              <DropdownIcon />
            </CommonGradientBG>
          </View>
          <View style={styles.qrCode}>
            <CommonImage
              source={require('@assets/images/qr_code.png')}
              style={{width: 252, height: 242}}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.exportBtn}
        onPress={() => navigation.navigate('ShowAccountDataScreen')}>
        <CommonText
          style={[
            styles.exportBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Export
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
  passwordContainer: {marginBottom: 14},
  passwordLabel: {
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  password: {
    fontSize: 14,
    lineHeight: 20,
  },
  formatContainer: {
    marginBottom: 20,
  },
  formatLabel: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  formatContnt: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ItemLabel: {
    fontSize: 14,
    lineHeight: 20,
  },
  qrCode: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
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
