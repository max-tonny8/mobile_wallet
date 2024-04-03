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
import CommonImage from '@components/commons/CommonImage';
import {colorOpacity} from '@src/utils/ColorUtil';

import PlusIcon from '@assets/svgs/common/plus.svg';

export default function SendScreen({navigation, route}) {
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const {theme} = useSelector(state => state.ThemeReducer);

  const RecipientItem = () => {
    return (
      <TouchableOpacity style={styles.recipientItem}>
        <CommonImage
          source={require('@assets/images/contact_avatar.png')}
          style={{width: 46, height: 46, marginBottom: 8}}
        />
        <CommonText
          style={[
            styles.contactName,
            {color: colorOpacity(theme.primary, 0.7)},
          ]}>
          Sallie
        </CommonText>
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
          styles.sendHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.sendTitle, {color: theme.primary}]}>
          Send
        </CommonText>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingBottom: 24,
            paddingTop: 20,
          }}>
          <CommonText
            style={[
              styles.recentRecipientLabel,
              {color: theme.primary, paddingHorizontal: 24},
            ]}>
            Recent Recipient
          </CommonText>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 20}}>
            <View style={styles.recipientsContainer}>
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
              <RecipientItem />
            </View>
          </ScrollView>
          <View style={{paddingHorizontal: 24, marginBottom: 20}}>
            <CommonText
              style={[styles.recentRecipientLabel, {color: theme.primary}]}>
              Select Recipient
            </CommonText>
            <CommonGradientBorder>
              <View style={styles.inputAddressContainer}>
                <TextInput
                  style={[
                    styles.inputAddress,
                    {
                      color: theme.primary,
                    },
                  ]}
                  placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                  placeholder="Enter Public Address or Name"
                  autoCorrect={false}
                  value={address}
                  onChangeText={value => setAddress(value)}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddressBookScreen')}
                  style={[
                    styles.plusItem,
                    {backgroundColor: theme.secondary1},
                  ]}>
                  <PlusIcon width={15} height={15} />
                </TouchableOpacity>
              </View>
            </CommonGradientBorder>
          </View>
          <View style={{paddingHorizontal: 24, marginBottom: 20}}>
            <CommonText
              style={[styles.recentRecipientLabel, {color: theme.primary}]}>
              Notes
            </CommonText>
            <CommonGradientBG>
              <View style={styles.inputAddressContainer}>
                <TextInput
                  style={[
                    styles.inputAddress,
                    {
                      color: theme.primary,
                    },
                  ]}
                  placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                  placeholder="Your notes to recipient"
                  autoCorrect={false}
                  value={notes}
                  onChangeText={value => setNotes(value)}
                />
              </View>
            </CommonGradientBG>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.bottomBtn}
        onPress={() => navigation.navigate('SendDetailScreen')}>
        <CommonText
          style={[
            styles.bottomBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Confirm
        </CommonText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  sendTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  recentRecipientLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 12,
  },
  recipientsContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    columnGap: 24,
  },
  recipientItem: {
    alignItems: 'center',
  },
  contactName: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.06,
  },
  inputAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    columnGap: 5,
  },
  inputAddress: {
    width: '100%',
    height: 44,
    zIndex: 2,
    flex: 1,
  },
  plusItem: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 2,
  },
  bottomBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  bottomBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
