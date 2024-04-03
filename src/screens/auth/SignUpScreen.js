import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StorageUtil} from '@modules/core/util/StorageUtil';

import {signInSuccess} from '@persistence/user/UserReducer';
import {WalletFactory} from '@modules/core/factory/WalletFactory';
import {WalletAction} from '@persistence/wallet/WalletAction';
import {WALLET_LIST} from '@persistence/wallet/WalletConstant';

import CommonText from '@components/commons/CommonText';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';

import {colorOpacity} from '@src/utils/ColorUtil';

import LogoIcon from '@assets/svgs/logo_158.svg';
import LockIcon from '@assets/svgs/auth/lock.svg';
import {Logs} from '@modules/log/logs';

export default function SignUpScreen({navigation, route}) {
  const {theme} = useSelector(state => state.ThemeReducer);
  const [walletName, setWalletName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [mnemonics] = useState(WalletFactory.generateMnemonics());
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      if (password == '') {
        setError('Password is required.');
        return;
      }
      if (password.length < 4) {
        setError('Password must be at least 4 characters.');
        return;
      }
      if (password != confirm) {
        setError(`Password isn't matched.`);
        return;
      }
      setError('');
      await dispatch(
        WalletAction.insert({
          name: walletName,
          defaultChain: 'Ethereum',
          mnemonic: mnemonics.join(' '),
          privateKey: null,
          address: null,
          assets: WALLET_LIST.coins,
        }),
      );
      StorageUtil.setItem('isInitialized', true);
      StorageUtil.setItem('password', password);

      await dispatch(signInSuccess());
    } catch (e) {
      Logs.info('SignUpScreen: submit', e);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.lockContainer]}>
          <View style={{alignItems: 'center'}}>
            <LogoIcon />
          </View>
          <View>
            <View>
              <CommonText
                style={[styles.passwordLabel, {color: theme.primary}]}>
                Wallet Name
              </CommonText>
              <CommonGradientBorder bg={'none'} style={{marginBottom: 14}}>
                <View style={styles.passwordBar}>
                  <TextInput
                    style={[
                      styles.searchInput,
                      {
                        color: theme.primary,
                        width: '100%',
                        height: 44,
                        zIndex: 3,
                      },
                    ]}
                    placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                    placeholder="Enter Your Wallet Name"
                    autoCorrect={false}
                    value={walletName}
                    onChangeText={value => setWalletName(value)}
                  />
                </View>
              </CommonGradientBorder>
            </View>
            <View>
              <CommonText
                style={[styles.passwordLabel, {color: theme.primary}]}>
                Enter Your Password
              </CommonText>
              <CommonGradientBorder bg={'none'} style={{marginBottom: 14}}>
                <View style={styles.passwordBar}>
                  <LockIcon />
                  <TextInput
                    style={[
                      styles.searchInput,
                      {
                        color: theme.primary,
                        width: '100%',
                        height: 44,
                        zIndex: 3,
                      },
                    ]}
                    placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                    placeholder="Enter Your Password"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={value => setPassword(value)}
                  />
                </View>
              </CommonGradientBorder>
              <CommonGradientBorder bg={'none'} style={{marginBottom: 4}}>
                <View style={styles.passwordBar}>
                  <LockIcon />
                  <TextInput
                    style={[
                      styles.searchInput,
                      {
                        color: theme.primary,
                        width: '100%',
                        height: 44,
                        zIndex: 3,
                      },
                    ]}
                    placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                    placeholder="Enter Your Confirm Password"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={confirm}
                    onChangeText={value => setConfirm(value)}
                  />
                </View>
              </CommonGradientBorder>
              <CommonText
                style={[
                  styles.errorText,
                  {color: theme.danger, opacity: error != '' ? 1 : 0},
                ]}>
                {error}
              </CommonText>
              <TouchableOpacity
                style={styles.unLockBtn}
                onPress={() => dispatch(signInSuccess())}>
                <CommonText
                  style={[
                    styles.unLockBtnLabel,
                    {color: theme.primary, backgroundColor: theme.main},
                  ]}
                  onPress={onSubmit}>
                  Sign Up
                </CommonText>
              </TouchableOpacity>
            </View>
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
  passwordBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    columnGap: 5,
  },
  passwordLabel: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  errorText: {
    marginBottom: 14,
  },
  lockContainer: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    rowGap: 65,
    paddingHorizontal: 24,
    marginTop: -24,
  },
  unLockBtn: {},
  unLockBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
  forgotLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Satoshi-Bold',
  },
});
