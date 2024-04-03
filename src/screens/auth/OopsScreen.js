import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import {colorOpacity} from '@src/utils/ColorUtil';

import OopsIcon from '@assets/svgs/auth/oops.svg';

export default function OopsScreen({navigation, route}) {
  const {theme} = useSelector(state => state.ThemeReducer);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            height: Dimensions.get('window').height - 110,
            justifyContent: 'center',
          }}>
          <View style={{marginBottom: 30}}>
            <OopsIcon />
          </View>
          <CommonText style={[styles.successTitle, {color: theme.primary}]}>
            Oops...
          </CommonText>
          <CommonText
            style={[
              styles.successDescription,
              {color: colorOpacity(theme.primary, 0.6)},
            ]}>
            It seems you have not to completed your wallet setup yet
          </CommonText>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate('WalkThroughScreen')}>
        <CommonText
          style={[
            styles.createBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Back to Onboarding
        </CommonText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  successTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 20,
  },
  successDescription: {
    maxWidth: 260,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
  },
  createBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  createBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
