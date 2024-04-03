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
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import RemoveIcon from '@assets/svgs/common/remove.svg';

export default function ConnectedSiteScreen({navigation, route}) {
  const {theme} = useSelector(state => state.ThemeReducer);

  const ConnectedItem = ({}) => {
    return (
      <View style={{marginBottom: 12}}>
        <CommonGradientBG>
          <View style={styles.connectedSiteItem}>
            <View style={styles.connectedSite}>
              <CommonImage
                source={require('@assets/images/dapp.png')}
                style={{width: 30, height: 30}}
              />
              <CommonText style={[styles.siteLink, {color: theme.primary}]}>
                app.bitdao.com
              </CommonText>
            </View>
            <TouchableOpacity style={{zIndex: 2}}>
              <RemoveIcon />
            </TouchableOpacity>
          </View>
        </CommonGradientBG>
      </View>
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
          styles.receiveFundHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.receiveFundTitle, {color: theme.primary}]}>
          Connected Sites
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
          <CommonText style={{color: theme.primary, marginBottom: 8}}>
            Connected to 23 sites
          </CommonText>
          <CommonText
            style={{color: colorOpacity(theme.primary, 0.5), marginBottom: 20}}>
            My Wallet #3 is connected to these sites. They can view your account
            address.
          </CommonText>
          <ConnectedItem />
          <ConnectedItem />
          <ConnectedItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  receiveFundHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  receiveFundTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  connectedSite: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  connectedSiteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
});
