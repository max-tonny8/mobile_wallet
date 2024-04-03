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

import CommonImage from '@components/commons/CommonImage';

export default function SuccessScreen({navigation, route}) {
  const {title, description, callback} = route.params;
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
          <CommonImage
            source={require('@assets/images/success.png')}
            style={{width: 227, height: 227, marginBottom: 30}}
          />
          <CommonText style={[styles.successTitle, {color: theme.primary}]}>
            {title}
          </CommonText>
          <CommonText
            style={[
              styles.successDescription,
              {color: colorOpacity(theme.primary, 0.6)},
            ]}>
            {description}
          </CommonText>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.createBtn} onPress={callback}>
        <CommonText
          style={[
            styles.createBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Done
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
