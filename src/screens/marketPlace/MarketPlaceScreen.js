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
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
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

export default function MarketPlaceScreen() {
  const categories = [
    'All',
    'Recent',
    'Trending',
    'NFTs',
    'DeFi',
    'Top Gainer',
    'Top Looser',
    'Ethereum',
    'BSC',
    'Fan Token',
    'MATIC',
    'SOLANA',
    'Avalanche',
    'Arbitrum',
    'Fantom',
    'Optimism',
  ];
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
  const {theme} = useSelector(state => state.ThemeReducer);
  const TrendingItem = () => {
    return (
      <TouchableOpacity style={styles.trendingTokenItem}>
        <CommonGradientBG style={styles.trendingTokenContainer}>
          <View style={styles.trendingToken}>
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 100,
                borderColor: theme.primary,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CommonImage
                source={require('@assets/images/symbol.png')}
                style={{width: 24, height: 24}}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View>
              <CommonText
                style={[styles.trendingTokenSymbol, {color: theme.primary}]}>
                ETH
              </CommonText>
              <CommonText
                style={[
                  styles.trendingTokenName,
                  {color: colorOpacity(theme.primary, 0.4)},
                ]}>
                Ether
              </CommonText>
            </View>
          </View>

          <View style={styles.trendingGraph}>
            <TokenGraph width={120} height={35} />
          </View>
          <View style={styles.trendingTokenBalanceContainer}>
            <CommonText
              style={[styles.trendingTokenBalance, {color: theme.primary}]}>
              $13,645
            </CommonText>
            <CommonText
              style={[
                styles.trendingTokenBalance,
                {color: colorOpacity(theme.main, 0.7)},
              ]}>
              +1,337%
            </CommonText>
          </View>
        </CommonGradientBG>
      </TouchableOpacity>
    );
  };
  const TokenItem = () => {
    return (
      <TouchableOpacity style={styles.topGainerItemContainer}>
        <View style={styles.topGainerItem}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CommonText
              style={[
                styles.topGainerIndex,
                {color: colorOpacity(theme.primary, 0.5)},
              ]}>
              #1
            </CommonText>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
                borderColor: theme.primary,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 12,
              }}>
              <CommonImage
                source={require('@assets/images/symbol.png')}
                style={{width: 24, height: 24}}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View>
              <CommonText
                style={[styles.topGainerName, {color: theme.primary}]}>
                Ethereum
              </CommonText>
              <CommonText
                style={[
                  styles.topGainerSymbol,
                  {color: colorOpacity(theme.primary, 0.6)},
                ]}>
                Eth
              </CommonText>
            </View>
          </View>
          <TokenGraph width={61} height={18} />
          <View style={styles.topGainerBalanceContainer}>
            <CommonText
              style={[styles.topGainerBalance, {color: theme.primary}]}>
              $ 0.485563
            </CommonText>
            <CommonText
              style={[
                styles.topGainerChagneAmount,
                {color: colorOpacity(theme.main, 0.7)},
              ]}>
              +1.00%
            </CommonText>
          </View>
        </View>
        <LinearGradient
          colors={[colorOpacity(theme.primary, 0.25), '#00000000']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={[
            {
              height: 1,
              width: '100%',
            },
          ]}></LinearGradient>
      </TouchableOpacity>
    );
  };
  const PopularNftItem = () => {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() =>
          navigation.navigate('NftDetailScreen', {title: 'The Space 305'})
        }>
        <CommonGradientBG>
          <CommonImage
            source={require('@assets/images/nft.png')}
            style={{width: 145, height: 100}}
          />
          <TouchableOpacity
            style={[
              styles.popularDots,
              {backgroundColor: colorOpacity(theme.primary, 0.4)},
            ]}>
            <DotsMenu />
          </TouchableOpacity>
          <View style={styles.popularNftContent}>
            <CommonText style={[styles.popularNftName, {color: theme.primary}]}>
              Abstract Lava
            </CommonText>
            <View style={styles.popularNftInfo}>
              <View style={styles.popularNftPrice}>
                <PopularEth />
                <CommonText
                  style={[
                    styles.popularNftValue,
                    {color: colorOpacity(theme.primary, 0.7)},
                  ]}>
                  0.47 ETH
                </CommonText>
              </View>
              <View style={styles.popularNftHeart}>
                <Heart />
                <CommonText
                  style={[styles.popularNftHeartCount, {color: theme.danger}]}>
                  31
                </CommonText>
              </View>
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
          styles.walletContainer,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <View>
          <TitleLogo />
          <TouchableOpacity style={styles.walletMenu}>
            <CommonText
              style={{color: theme.primary}}
              onPress={() => navigation.navigate('SelectAccountScreen')}>
              MY WALLET #3
            </CommonText>
            <DropDownIcon />
          </TouchableOpacity>
        </View>
        <CommonTokenBG bg={colorOpacity(theme.primary, 0.35)} size={30}>
          <Symbol />
        </CommonTokenBG>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 90}}>
          <View style={{paddingHorizontal: 24, paddingTop: 20}}>
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
            <View style={styles.categoryController}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryContainer}>
                  {categories.map((data, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => setCategory(data)}
                        key={index}
                        style={[
                          styles.categoryItem,
                          {
                            backgroundColor:
                              data == category
                                ? theme.primary
                                : colorOpacity(theme.secondary2, 0.08),
                            borderColor:
                              data == category
                                ? theme.primary
                                : colorOpacity(theme.secondary1, 0.5),
                          },
                        ]}>
                        <CommonText
                          style={[
                            styles.categoryLabel,
                            {
                              color:
                                data == category ? theme.main : theme.primary,
                            },
                          ]}>
                          {data}
                        </CommonText>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
              <View style={styles.categorySlice}>
                <TouchableOpacity>
                  <ArrowLeft />
                </TouchableOpacity>
                <TouchableOpacity>
                  <ArrowRight />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.trendingHeader}>
              <CommonText
                style={[styles.trendingLabel, {color: theme.primary}]}>
                Trending Tokens
              </CommonText>
              <View style={styles.categorySlice}>
                <TouchableOpacity>
                  <ArrowLeft />
                </TouchableOpacity>
                <TouchableOpacity>
                  <ArrowRight />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 20}}>
            <View style={styles.horizontalScroll}>
              <TrendingItem />
              <TrendingItem />
              <TrendingItem />
            </View>
          </ScrollView>
          <View style={styles.topGainersContainer}>
            <View style={styles.topGainerHeader}>
              <CommonText
                style={[styles.topGainerLabel, {color: theme.primary}]}>
                Top Gainers
              </CommonText>
              <TouchableOpacity>
                <CommonText
                  style={[styles.topGainerSeeAll, {color: theme.primary}]}>
                  See All
                </CommonText>
              </TouchableOpacity>
            </View>
            <TokenItem />
            <TokenItem />
            <TokenItem />
          </View>
          <View style={styles.topLosersContainer}>
            <View style={styles.topGainerHeader}>
              <CommonText
                style={[styles.topGainerLabel, {color: theme.primary}]}>
                Top Losers
              </CommonText>
              <TouchableOpacity>
                <CommonText
                  style={[styles.topGainerSeeAll, {color: theme.primary}]}>
                  See All
                </CommonText>
              </TouchableOpacity>
            </View>
            <TokenItem />
            <TokenItem />
            <TokenItem />
          </View>
          <View style={[styles.trendingHeader, {paddingHorizontal: 24}]}>
            <CommonText style={[styles.trendingLabel, {color: theme.primary}]}>
              Popular Nfts
            </CommonText>
            <View style={styles.categorySlice}>
              <TouchableOpacity>
                <ArrowLeft />
              </TouchableOpacity>
              <TouchableOpacity>
                <ArrowRight />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 20}}>
            <View style={styles.horizontalScroll}>
              <PopularNftItem />
              <PopularNftItem />
              <PopularNftItem />
            </View>
          </ScrollView>
          <View style={{paddingHorizontal: 24, marginBottom: 20}}>
            <CommonImage
              source={require('@assets/images/nft_market.png')}
              style={{width: '100%', aspectRatio: 3.67}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  horizontalScroll: {
    flexDirection: 'row',
    columnGap: 16,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  walletMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    marginTop: 6,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  categoryController: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    columnGap: 6,
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  categoryLabel: {
    fontSize: 13,
    letterSpacing: 0.13,
  },
  categorySlice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 14,
  },
  trendingLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  trendingTokenItem: {
    width: 157,
  },
  trendingTokenContainer: {
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  trendingToken: {
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  trendingTokenSymbol: {
    fontSize: 14,
    lineHeight: 20,
  },
  trendingTokenName: {
    fontSize: 10,
    fontFamily: 'Satoshi-Regualar',
    lineHeight: 15,
  },
  trendingGraph: {marginBottom: 14},
  trendingTokenBalanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trendingTokenBalance: {
    fontSize: 12,
    fontFamily: 'Satoshi-Bold',
  },
  topGainersContainer: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  topGainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  topGainerLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  topGainerSeeAll: {
    fontSize: 14,
    lineHeight: 20,
  },
  topGainerItemContainer: {},
  topGainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  topGainerIndex: {
    marginRight: 6,
    fontSize: 14,
    lineHeight: 20,
  },
  topGainerName: {
    marginRight: 6,
    fontSize: 14,
    lineHeight: 20,
  },
  topGainerBalanceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  topGainerBalance: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Satoshi-Bold',
  },
  topGainerChagneAmount: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Satoshi-Bold',
  },
  topLosersContainer: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  popularDots: {
    zIndex: 2,
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    flexDirection: 'column',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularNftContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 14,
  },
  popularNftName: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 4,
  },
  popularNftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popularNftPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  popularNftValue: {
    fontSize: 12,
    lineHeight: 20,
  },
  popularNftHeart: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  popularNftHeartCount: {},
});
