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
import {colorOpacity} from '@src/utils/ColorUtil';

import SearchIcon from '@assets/svgs/common/search.svg';
import SettingIcon from '@assets/svgs/navbar/setting.svg';
import PlusIcon from '@assets/svgs/common/plus.svg';

export default function SelectAccountScreen({navigation, route}) {
  const [searchText, setSearchText] = useState('');
  const {theme} = useSelector(state => state.ThemeReducer);

  const AccountItem = () => {
    return (
      <TouchableOpacity
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('Home')}>
        <CommonGradientBG>
          <View style={styles.walletItem}>
            <View style={styles.walletInfo}>
              <View
                style={[
                  styles.activeStatus,
                  {backgroundColor: theme.main},
                ]}></View>
              <CommonText style={[styles.walletName, {color: theme.primary}]}>
                My Wallet #1
              </CommonText>
            </View>
            <TouchableOpacity style={{zIndex: 2}}>
              <SettingIcon />
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
          styles.selectAccountHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.selectAccountTitle, {color: theme.primary}]}>
          Select Wallet
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
                      flex: 1,
                    },
                  ]}
                  placeholderTextColor={colorOpacity(theme.primary, 0.5)}
                  placeholder="Search"
                  autoCorrect={false}
                  value={searchText}
                  onChangeText={value => setSearchText(value)}
                />
                <SearchIcon />
              </View>
            </CommonGradientBG>
          </View>
          <AccountItem />
          <AccountItem />
          <AccountItem />

          <TouchableOpacity
            onPress={() => navigation.navigate('AddNewWalletScreen')}
            style={[
              styles.addToken,
              {borderColor: colorOpacity(theme.primary, 0.2)},
            ]}>
            <PlusIcon />
            <CommonText style={[{color: theme.primary}]}>
              Add Custom Token
            </CommonText>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  walletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  walletInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  activeStatus: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  walletName: {},
  addToken: {
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 6,
  },
});
