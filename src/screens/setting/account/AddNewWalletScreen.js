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
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import DownloadIcon from '@assets/svgs/common/download.svg';
import CreateIcon from '@assets/svgs/setting/create.svg';
import HardwareIcon from '@assets/svgs/setting/hardware.svg';
import ArrowRight from '@assets/svgs/common/arrow_right.svg';

export default function AddNewWalletScreen({navigation, route}) {
  const [option, setOption] = useState('create');
  const {theme} = useSelector(state => state.ThemeReducer);

  const WalletOptionItem = ({logo, type, text, pattern, onPress}) => {
    const checked = option == pattern;
    return (
      <TouchableOpacity
        style={{marginBottom: 14}}
        onPress={() => {
          setOption(pattern);
          onPress();
        }}>
        {!checked ? (
          <CommonGradientBG
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.walletOptionItem}>
              <View style={styles.walletInfo}>
                <CommonTokenBG>{logo}</CommonTokenBG>
                <View style={{flex: 1}}>
                  <CommonText
                    style={[styles.walletType, {color: theme.primary}]}>
                    {type}
                  </CommonText>
                  <CommonText
                    style={[
                      styles.walletDescription,
                      {color: colorOpacity(theme.primary, 0.5)},
                    ]}>
                    {text}
                  </CommonText>
                </View>
              </View>
              <ArrowRight />
            </View>
          </CommonGradientBG>
        ) : (
          <CommonGradientBorder>
            <View style={[styles.walletOptionItem, {padding: 16}]}>
              <View style={styles.walletInfo}>
                <CommonTokenBG>{logo}</CommonTokenBG>
                <View style={{flex: 1}}>
                  <CommonText
                    style={[styles.walletType, {color: theme.primary}]}>
                    {type}
                  </CommonText>
                  <CommonText
                    style={[
                      styles.walletDescription,
                      {color: colorOpacity(theme.primary, 0.5)},
                    ]}>
                    {text}
                  </CommonText>
                </View>
              </View>
              <ArrowRight />
            </View>
          </CommonGradientBorder>
        )}
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
          styles.selectAccountHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.selectAccountTitle, {color: theme.primary}]}>
          Add New Wallet
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
          <View style={styles.addNewWalletHeader}>
            <CommonText
              style={[styles.addNewWalletCaption, {color: theme.primary}]}>
              Let’s add your wallet
            </CommonText>
            <CommonText
              style={[
                styles.addNewWalletDescription,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Choose your method to add
            </CommonText>
          </View>
          <WalletOptionItem
            logo={<CreateIcon />}
            type={'Create Wallet'}
            pattern={'create'}
            text={'Create a new account from seed stored in EzoWallet'}
            onPress={() => navigation.navigate('CreateWalletScreen')}
          />
          <WalletOptionItem
            logo={<DownloadIcon />}
            type={'Import Wallet'}
            pattern={'import'}
            text={'Import a new account from private key'}
            onPress={() => navigation.navigate('ImportWalletScreen')}
          />
          <WalletOptionItem
            logo={<HardwareIcon />}
            type={'Import Wallet'}
            pattern={'connect'}
            text={'Import a new account from private key'}
            onPress={() => navigation.navigate('CreateWalletScreen')}
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
  selectAccountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  selectAccountTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  addNewWalletHeader: {
    marginBottom: 24,
  },
  addNewWalletCaption: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: 'Satoshi-Bold',
  },
  addNewWalletDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  walletOptionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 15,
    alignItems: 'center',
  },
  walletInfo: {
    flexDirection: 'row',
    columnGap: 14,
    flex: 1,
  },
  walletType: {
    fontSize: 16,
    lineHeight: 30,
    fontFamily: 'Satoshi-Bold',
  },
  walletDescription: {
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
  },
});
