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

import TitleLogo from '@assets/svgs/title_logo.svg';
import WebsiteIcon from '@assets/svgs/about/website.svg';
import TelegramIcon from '@assets/svgs/about/telegram.svg';
import FaceBookIcon from '@assets/svgs/about/facebook.svg';
import GithubIcon from '@assets/svgs/about/github.svg';
import DownloadIcon from '@assets/svgs/common/download.svg';

export default function AboutScreen({navigation, route}) {
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
          About
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
          <View style={styles.walletInfo}>
            <CommonGradientBorder>
              <View style={styles.walletContent}>
                <TitleLogo />
                <CommonText
                  style={[styles.walletVersion, {color: theme.primary}]}>
                  Version 2.56
                </CommonText>
                <CommonText
                  style={[
                    styles.walletDescription,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  NexisWallet is the most private, non-custodial browser
                  extension wallet where users can store funds and interact with
                  their favorite blockchain applications anonymously. Join us
                  today and reclaim your privacy.
                </CommonText>
                <CommonText
                  style={[
                    styles.walletStatus,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  DEVELOPMENT
                </CommonText>
              </View>
            </CommonGradientBorder>
          </View>
          <View style={{marginBottom: 20}}>
            <CommonGradientBG
              style={{paddingHorizontal: 14, paddingVertical: 20}}>
              <View>
                <CommonText
                  style={[styles.contactLabel, {color: theme.primary}]}>
                  Contacts
                </CommonText>
                <View style={styles.contactsContainer}>
                  <View style={styles.contactItem}>
                    <WebsiteIcon />
                    <CommonText
                      style={[styles.contactName, {color: theme.primary}]}>
                      nexis.network
                    </CommonText>
                  </View>
                  <View style={styles.contactItem}>
                    <TelegramIcon />
                    <CommonText
                      style={[styles.contactName, {color: theme.primary}]}>
                      t.me/Nexis_Network
                    </CommonText>
                  </View>
                  <View style={styles.contactItem}>
                    <FaceBookIcon />
                    <CommonText
                      style={[styles.contactName, {color: theme.primary}]}>
                      github.com/nexisnetwork
                    </CommonText>
                  </View>
                  <View style={styles.contactItem}>
                    <GithubIcon />
                    <CommonText
                      style={[styles.contactName, {color: theme.primary}]}>
                      github.com/nexisnetwork
                    </CommonText>
                  </View>
                </View>
              </View>
            </CommonGradientBG>
          </View>
          <CommonGradientBG>
            <View style={styles.downloadContainer}>
              <CommonText
                style={[
                  styles.downloadLabel,
                  {color: colorOpacity(theme.primary, 0.6)},
                ]}>
                Download state logs for support
              </CommonText>
              <TouchableOpacity
                style={[styles.downloadBtn, {backgroundColor: theme.main}]}>
                <DownloadIcon />
              </TouchableOpacity>
            </View>
          </CommonGradientBG>
        </View>
      </ScrollView>
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
  walletInfo: {
    marginBottom: 20,
  },
  walletContent: {
    flexDirection: 'column',
    rowGap: 10,
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  walletVersion: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  walletDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
  walletStatus: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Satoshi-Black',
  },
  contactsContainer: {
    flexDirection: 'column',
    rowGap: 4,
  },
  contactLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  contactName: {
    fontSize: 14,
    lineHeight: 20,
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  downloadBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    zIndex: 2,
  },
  downloadCaption: {
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
