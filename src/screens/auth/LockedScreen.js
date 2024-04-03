import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {signInSuccess} from '@persistence/user/UserReducer';
import {StorageUtil} from '@modules/core/util/StorageUtil';
import CommonText from '@components/commons/CommonText';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';

import {colorOpacity} from '@src/utils/ColorUtil';

import LogoIcon from '@assets/svgs/logo_158.svg';
import LockIcon from '@assets/svgs/auth/lock.svg';
import {WalletAction} from '@persistence/wallet/WalletAction';

export default function LockedScreen() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const psw = await StorageUtil.getItem('password');
    if (psw == password) {
      await dispatch(WalletAction.findAll());
      dispatch(signInSuccess());
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />
      <View style={[styles.lockContainer]}>
        <View style={{alignItems: 'center'}}>
          <LogoIcon />
        </View>
        <View>
          <CommonText style={[styles.passwordLabel, {color: theme.primary}]}>
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
          <TouchableOpacity style={styles.unLockBtn} onPress={onSubmit}>
            <CommonText
              style={[
                styles.unLockBtnLabel,
                {color: theme.primary, backgroundColor: theme.main},
              ]}>
              Unlock
            </CommonText>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <CommonText style={[styles.forgotLabel, {color: theme.main}]}>
              Forgot Password?
            </CommonText>
          </TouchableOpacity>
        </View>
      </View>
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
  lockContainer: {
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    rowGap: 65,
    paddingHorizontal: 24,
    marginTop: -24,
  },
  unLockBtn: {
    // paddingHorizontal: 24,
  },
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
