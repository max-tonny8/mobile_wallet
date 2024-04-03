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

import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import CommonImage from '@components/commons/CommonImage';

export default function ImportWalletScreen({navigation, route}) {
  const [account, setAccount] = useState({
    name: '',
    type: 'Private Key',
    privateKey: '',
  });
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
          styles.selectAccountHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.selectAccountTitle, {color: theme.primary}]}>
          Impot Wallet
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
          <View style={{marginBottom: 20}}>
            <CommonText style={[styles.createLabel, {color: theme.primary}]}>
              Account Name
            </CommonText>
            <CommonGradientBorder>
              <View style={{paddingHorizontal: 12}}>
                <TextInput
                  style={[
                    {
                      color: theme.primary,
                      width: '100%',
                      height: 44,
                      zIndex: 2,
                      flex: 1,
                    },
                  ]}
                  placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                  placeholder="Enter account name"
                  autoCorrect={false}
                  value={account.name}
                  onChangeText={value => setAccount({...account, name: value})}
                />
              </View>
            </CommonGradientBorder>
          </View>
          <View style={{marginBottom: 20}}>
            <CommonText style={[styles.createLabel, {color: theme.primary}]}>
              Select Type
            </CommonText>
            <TouchableOpacity>
              <CommonGradientBG>
                <View style={styles.selectType}>
                  <CommonText
                    style={[styles.typeContent, {color: theme.primary}]}>
                    {account.type}
                  </CommonText>
                  <DropDownIcon />
                </View>
              </CommonGradientBG>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 20}}>
            <CommonText style={[styles.createLabel, {color: theme.primary}]}>
              Private Key String
            </CommonText>
            <CommonGradientBG>
              <View style={{paddingHorizontal: 12}}>
                <TextInput
                  style={[
                    {
                      color: theme.primary,
                      width: '100%',
                      height: 44,
                      zIndex: 2,
                      flex: 1,
                    },
                  ]}
                  placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                  placeholder="Paste your private key string"
                  autoCorrect={false}
                  value={account.privateKey}
                  onChangeText={value =>
                    setAccount({...account, privateKey: value})
                  }
                />
              </View>
            </CommonGradientBG>
          </View>
          <View style={{alignItems: 'center'}}>
            <CommonImage
              source={require('@assets/images/qr_code.png')}
              style={{width: 182, height: 177}}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.createBtn}
        onPress={() =>
          navigation.navigate('SuccessScreen', {
            title: 'Account Added',
            description:
              'You have successfully added an account on Nexis Wallet',
            callback: () => navigation.navigate('AddNewWalletScreen'),
          })
        }>
        <CommonText
          style={[
            styles.createBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Create
        </CommonText>
      </TouchableOpacity>
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
  createLabel: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
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
  selectType: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeContent: {},
});
