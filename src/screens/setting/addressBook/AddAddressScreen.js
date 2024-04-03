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

import SearchIcon from '@assets/svgs/common/search.svg';
import AvatarIcon from '@assets/svgs/setting/avatar.svg';
import AddContact from '@assets/svgs/setting/add_contact.svg';
import ContactDots from '@assets/svgs/common/contact_dots.svg';

export default function AddAddressScreen({navigation, route}) {
  const [user, setUser] = useState({
    name: '',
    address: '',
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
          styles.exportAccountHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.exportAccountTitle, {color: theme.primary}]}>
          Address Book
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
          <View style={styles.contactNameContainer}>
            <CommonText style={[styles.contactName, {color: theme.primary}]}>
              Contact Name
            </CommonText>
            <CommonGradientBG>
              <TextInput
                style={[
                  styles.contactInput,
                  {
                    color: theme.primary,
                    width: '100%',
                    height: 44,
                    zIndex: 2,
                  },
                ]}
                placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                placeholder="Enter Name"
                autoCorrect={false}
                value={user.name}
                onChangeText={value => setUser({...user, name: value})}
              />
            </CommonGradientBG>
          </View>
          <View style={styles.contactAddressContainer}>
            <CommonText style={[styles.contactAddress, {color: theme.primary}]}>
              Contact Address
            </CommonText>
            <CommonGradientBG>
              <TextInput
                style={[
                  styles.contactInput,
                  {
                    color: theme.primary,
                    width: '100%',
                    height: 44,
                    zIndex: 2,
                  },
                ]}
                placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                placeholder="Enter Address"
                autoCorrect={false}
                value={user.address}
                onChangeText={value => setUser({...user, address: value})}
              />
            </CommonGradientBG>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.contactBtn}
        onPress={() => navigation.navigate('ShowAccountDataScreen')}>
        <CommonText
          style={[
            styles.contactBtnLabel,
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
  exportAccountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  exportAccountTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  contactNameContainer: {
    marginBottom: 20,
  },
  contactName: {
    marginBottom: 9,
    fontSize: 14,
    lineHeight: 20,
  },
  contactInput: {
    padding: 14,
  },
  contactAddressContainer: {},
  contactAddress: {
    marginBottom: 9,
    fontSize: 14,
    lineHeight: 20,
  },
  contactBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  contactBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
