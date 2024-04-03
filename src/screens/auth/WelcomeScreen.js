import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import {colorOpacity} from '@src/utils/ColorUtil';
import {PricesFactory} from '@modules/core/factory/PriceFactory';
import {TokenFactory} from '@modules/core/factory/TokenFactroy';
import {WalletFactory} from '@modules/core/factory/WalletFactory';
import {ethers} from 'ethers';

import CheckIcon from '@assets/svgs/auth/check.svg';
import InfoIcon from '@assets/svgs/auth/info.svg';
import SmileIcon from '@assets/svgs/auth/smile.svg';

export default function WelcomeScreen() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const navigation = useNavigation();
  useEffect(() => {
    PricesFactory.init();
    TokenFactory.getCoins();
  }, []);

  const HorizontalSeparateLine = () => {
    return (
      <LinearGradient
        colors={[colorOpacity(theme.primary, 0.3), '#00000000']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={[
          styles.liveBiddingItemContainer,
          {
            borderColor: colorOpacity(theme.secondary2, 0.25),
            height: 1,
            width: '100%',
            marginVertical: 8,
          },
        ]}></LinearGradient>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.walletContainer}>
          <View style={styles.titleContainer}>
            <CommonText style={[styles.titleLabel, {color: theme.primary}]}>
              Welcome to
            </CommonText>
            <View style={{flexDirection: 'row'}}>
              <CommonText style={[styles.titleLabel, {color: theme.primary}]}>
                Nexis
              </CommonText>
              <CommonText style={[styles.titleLabel, {color: theme.main}]}>
                Wallet
              </CommonText>
            </View>
            <CommonText
              style={[
                styles.walletCaption,
                {color: colorOpacity(theme.primary, 0.9)},
              ]}>
              The most private, non-custodial crypto and NFT wallet built for
              Web3.
            </CommonText>
          </View>
          <View style={styles.itemsContainer}>
            <View style={styles.item}>
              <CommonTokenBG>
                <CheckIcon />
              </CommonTokenBG>
              <CommonText
                style={[styles.itemDescription, {color: theme.primary}]}>
                NexisWallet is your default browser wallet to interact with
                DApps.
              </CommonText>
            </View>
            <HorizontalSeparateLine />
            <View style={styles.item}>
              <CommonTokenBG>
                <CheckIcon />
              </CommonTokenBG>
              <CommonText
                style={[styles.itemDescription, {color: theme.primary}]}>
                Select NexisWallet or, alternatively the injected option, to
                connect with DApps.
              </CommonText>
            </View>
            <HorizontalSeparateLine />
            <View style={styles.item}>
              <CommonTokenBG>
                <InfoIcon />
              </CommonTokenBG>
              <CommonText
                style={[styles.itemDescription, {color: theme.primary}]}>
                If you don't see NexisWallet's logo when connecting, select
                another browser wallet's logo.
              </CommonText>
            </View>
            <HorizontalSeparateLine />
            <View style={styles.item}>
              <CommonTokenBG>
                <InfoIcon />
              </CommonTokenBG>
              <CommonText
                style={[styles.itemDescription, {color: theme.primary}]}>
                Join our Telegram group if you have any questions or feedback.
              </CommonText>
            </View>
            <HorizontalSeparateLine />
            <View style={styles.item}>
              <CommonTokenBG>
                <SmileIcon />
              </CommonTokenBG>
              <CommonText
                style={[styles.itemDescription, {color: theme.primary}]}>
                We hope that you are enjoy using the NexisWallet!
              </CommonText>
            </View>
            <HorizontalSeparateLine />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => navigation.navigate('OopsScreen')}>
        <CommonText
          style={[
            styles.saveBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Start Using
        </CommonText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 8,
    paddingTop: 70,
  },
  titleLabel: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: 'Satoshi-Bold',
  },
  walletContainer: {
    paddingHorizontal: 24,
  },
  walletCaption: {
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 35,
  },
  itemsContainer: {},
  item: {
    flexDirection: 'row',
    columnGap: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemDescription: {
    flex: 1,
  },
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
