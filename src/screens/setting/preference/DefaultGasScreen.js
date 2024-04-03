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

import CheckedIcon from '@assets/svgs/common/checked.svg';
import InfoIcon from '@assets/svgs/common/info.svg';

export default function DefaultGasScreen({navigation, route}) {
  const [option, setOption] = useState('Low');
  const {theme} = useSelector(state => state.ThemeReducer);

  const GasTypesItem = ({type, text, checked}) => {
    return (
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() => setOption(type)}>
        {!checked ? (
          <CommonGradientBG
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <CommonText style={[styles.gasType, {color: theme.primary}]}>
                {type}
              </CommonText>
              <CommonText
                style={[
                  styles.gasDescription,
                  {color: colorOpacity(theme.primary, 0.5)},
                ]}>
                {text}
              </CommonText>
            </View>
          </CommonGradientBG>
        ) : (
          <CommonGradientBorder>
            <View
              style={{
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <CommonText style={[styles.gasType, {color: theme.primary}]}>
                  {type}
                </CommonText>
                <CommonText
                  style={[
                    styles.gasDescription,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  {text}
                </CommonText>
              </View>
              <CheckedIcon />
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
          styles.defaultGasHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.defaultGasTitle, {color: theme.primary}]}>
          Default Gas Setting
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
          <CommonText
            style={[
              styles.defaultGasCaption,
              {color: colorOpacity(theme.primary, 0.5)},
            ]}>
            Set your preferred gas setting for all future transactions in this
            app
          </CommonText>
          <GasTypesItem
            type={'Low'}
            text={'Cheaper but slower'}
            checked={option == 'Low'}
            setOption={setOption}
          />
          <GasTypesItem
            type={'Medium'}
            text={'Balance price and speed'}
            checked={option == 'Medium'}
            setOption={setOption}
          />
          <GasTypesItem
            type={'High'}
            text={'Pricier but faster'}
            checked={option == 'High'}
            setOption={setOption}
          />
          <View style={styles.gasInfo}>
            <InfoIcon />
            <CommonText
              style={[
                styles.gasInfoContent,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              This setting will apply on all transactions on all networks. You
              will still be able to change the gas amount before submitting your
              transactions.
            </CommonText>
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
  defaultGasHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  defaultGasTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  defaultGasCaption: {
    marginBottom: 20,
  },
  gasType: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 6,
  },
  gasDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
  gasInfo: {
    flexDirection: 'row',
    columnGap: 10,
  },
  gasInfoContent: {
    flex: 1,
  },
});
