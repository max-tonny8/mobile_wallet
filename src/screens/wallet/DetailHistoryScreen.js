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

import AvatarIcon from '@assets/svgs/setting/avatar.svg';

export default function DetailHistoryScreen({navigation, route}) {
  const {theme} = useSelector(state => state.ThemeReducer);

  const HorizontalSeparateLine = () => {
    return (
      <LinearGradient
        colors={[colorOpacity(theme.primary, 0.3), '#00000000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          styles.liveBiddingItemContainer,
          {
            borderColor: colorOpacity(theme.secondary2, 0.25),
            height: 1,
            width: '100%',
            marginVertical: 14,
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

      <View
        style={[
          styles.preferenceHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.preferenceTitle, {color: theme.primary}]}>
          Detail History
        </CommonText>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingBottom: 24,
            paddingHorizontal: 24,
            paddingTop: 40,
          }}>
          <View style={styles.tokenStatus}>
            <CommonImage
              source={require('@assets/images/token/send.png')}
              style={styles.tokenStatusImage}
            />
            <CommonText style={[styles.tokenBalance, {color: theme.primary}]}>
              0.04313 ETH
            </CommonText>
            <CommonText
              style={[
                styles.usdBalance,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              $2.85
            </CommonText>
          </View>
          <View>
            <CommonText style={[styles.detailLabel, {color: theme.primary}]}>
              Recipient
            </CommonText>
            <CommonGradientBorder bg={'none'} style={{marginBottom: 20}}>
              <View style={styles.contactContainer}>
                <View style={styles.contactInfo}>
                  <CommonTokenBG bg={'#34D39915'}>
                    <AvatarIcon />
                  </CommonTokenBG>
                  <View>
                    <CommonText
                      style={[styles.contactName, {color: theme.primary}]}>
                      underground182
                    </CommonText>
                    <CommonText
                      style={[
                        styles.contactAddress,
                        {color: colorOpacity(theme.primary, 0.6)},
                      ]}>
                      0xA62986298710237h28389
                    </CommonText>
                  </View>
                </View>
              </View>
            </CommonGradientBorder>
            <CommonGradientBorder bg={'none'}>
              <View style={styles.historyContent}>
                <View style={styles.historyItem}>
                  <CommonText
                    style={[
                      styles.historyCommonLabel,
                      {color: colorOpacity(theme.primary, 0.6)},
                    ]}>
                    Date
                  </CommonText>
                  <CommonText
                    style={[styles.historyCommonLabel, {color: theme.primary}]}>
                    Jan 1, 2023 at 09.30
                  </CommonText>
                </View>
                <HorizontalSeparateLine />
                <View style={styles.historyItem}>
                  <CommonText
                    style={[
                      styles.historyCommonLabel,
                      {color: colorOpacity(theme.primary, 0.6)},
                    ]}>
                    Type
                  </CommonText>
                  <CommonText
                    style={[styles.historyCommonLabel, {color: theme.primary}]}>
                    Send
                  </CommonText>
                </View>
                <HorizontalSeparateLine />
                <View style={styles.historyItem}>
                  <CommonText
                    style={[
                      styles.historyCommonLabel,
                      {color: colorOpacity(theme.primary, 0.6)},
                    ]}>
                    Network Fee
                  </CommonText>
                  <CommonText
                    style={[styles.historyCommonLabel, {color: theme.primary}]}>
                    $0,206
                  </CommonText>
                </View>
                <HorizontalSeparateLine />
                <View style={styles.historyItem}>
                  <CommonText
                    style={[styles.historyStatus, {color: theme.primary}]}>
                    Status
                  </CommonText>
                  <CommonText
                    style={[styles.historyStatus, {color: theme.main}]}>
                    Success
                  </CommonText>
                </View>
              </View>
            </CommonGradientBorder>
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
  tokenStatusImage: {
    width: 129,
    height: 129,
    marginBottom: 16,
  },
  tokenStatus: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tokenBalance: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'Satoshi-Bold',
  },
  usdBalance: {
    fontSize: 16,
    lineHeight: 20,
  },
  detailLabel: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 9,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  contactName: {
    fontSize: 14,
  },
  contactAddress: {
    fontSize: 12,
  },
  historyContent: {
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  historyItem: {flexDirection: 'row', justifyContent: 'space-between'},
  historyCommonLabel: {
    fontSize: 14,
    lineHeight: 20,
  },
  historyStatus: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Satoshi-Bold',
  },
});
