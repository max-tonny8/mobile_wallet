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

export default function AddressBookScreen({navigation, route}) {
  const [searchText, setSearchText] = useState('');
  const {theme} = useSelector(state => state.ThemeReducer);

  const ContactItem = () => {
    return (
      <TouchableOpacity
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('SendScreen')}>
        <CommonGradientBG>
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
            <TouchableOpacity style={{zIndex: 2}}>
              <ContactDots />
            </TouchableOpacity>
          </View>
        </CommonGradientBG>
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
          <View style={styles.contactControler}>
            <View style={{flex: 1}}>
              <CommonGradientBG>
                <View style={styles.searchBar}>
                  <TextInput
                    style={[
                      styles.searchInput,
                      {
                        color: theme.primary,
                        width: '100%',
                        height: 44,
                        zIndex: 2,
                      },
                    ]}
                    placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                    placeholder="Search contact"
                    autoCorrect={false}
                    value={searchText}
                    onChangeText={value => setSearchText(value)}
                  />
                  <SearchIcon />
                </View>
              </CommonGradientBG>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddAddressScreen')}
              style={[styles.addContact, {backgroundColor: theme.main}]}>
              <AddContact />
              <CommonText
                style={[styles.addContactLabel, {color: theme.primary}]}>
                Add
              </CommonText>
            </TouchableOpacity>
          </View>
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
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
  exportAccountTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  contactControler: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchInput: {
    fontSize: 14,
    lineHeight: 20,
    zIndex: 2,
    flex: 1,
  },
  addContact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
  },
  addContactLabel: {
    fontSize: 14,
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
});
