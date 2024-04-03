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
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import TitleLogo from '@assets/svgs/title_logo.svg';
import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import Symbol from '@assets/svgs/symbol.svg';
import SearchIcon from '@assets/svgs/common/search.svg';
import ArrowLeft from '@assets/svgs/common/arrow_left.svg';
import ArrowRight from '@assets/svgs/common/arrow_right.svg';
import TokenGraph from '@assets/svgs/token_graph.svg';
import PopularEth from '@assets/svgs/nft/eth_popular.svg';
import HeartO from '@assets/svgs/common/heart-o.svg';
import Heart from '@assets/svgs/common/heart.svg';
import DotsMenu from '@assets/svgs/common/dots.svg';

export default function SelectAssetsScreen({navigation, route}) {
  const [searchText, setSearchText] = useState('');
  const {theme} = useSelector(state => state.ThemeReducer);
  const {callback} = route.params;

  const TokenItem = () => {
    return (
      <TouchableOpacity style={styles.tokenContainer} onPress={callback}>
        <CommonGradientBG style={{paddingHorizontal: 8, paddingVertical: 8}}>
          <View style={[styles.tokenItem]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 12,
              }}>
              <CommonTokenBG size={30} bg={'#34D39915'}>
                <CommonImage
                  source={require('@assets/images/symbol.png')}
                  style={{width: 20, height: 20}}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </CommonTokenBG>
              <View style={styles.tokenBalanceContainer}>
                <CommonText
                  style={[styles.tokenSymbol, {color: theme.primary}]}>
                  Ether
                </CommonText>
                <CommonText
                  style={[
                    styles.tokenBalance,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  0.01823 ETH
                </CommonText>
              </View>
            </View>
            <View style={styles.tokenUsdBalanceContainer}>
              <CommonText
                style={[styles.tokenUsdBalance, {color: theme.primary}]}>
                $124.00 USD
              </CommonText>
            </View>
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
          styles.preferenceHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.preferenceTitle, {color: theme.primary}]}>
          Select Assets
        </CommonText>
        <View></View>
      </View>

      <View style={{paddingHorizontal: 24, paddingTop: 20, paddingBottom: 10}}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{paddingHorizontal: 24, paddingTop: 10, paddingBottom: 10}}>
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
          <TokenItem />
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tokenContainer: {
    marginBottom: 10,
  },
  tokenItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tokenBalanceContainer: {},
  tokenSymbol: {
    fontSize: 14,
    fontFamily: 'Satoshi-Medium',
    lineHeight: 20,
  },
  tokenBalance: {
    fontSize: 14,
    fontFamily: 'Satoshi-Medium',
    lineHeight: 20,
  },
  tokenUsdBalanceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  tokenUsdBalance: {
    fontSize: 12,
    fontFamily: 'Satoshi-Medium',
    lineHeight: 20,
  },
});
