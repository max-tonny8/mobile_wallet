import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonImage from '@components/commons/CommonImage';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import {colorOpacity} from '@src/utils/ColorUtil';
import {PricesFactory} from '@modules/core/factory/PriceFactory';

import PlusIcon from '@assets/svgs/common/plus.svg';
import ArrowLeft from '@assets/svgs/common/arrow_left.svg';
import ArrowRight from '@assets/svgs/common/arrow_right.svg';
import TokenGraph from '@assets/svgs/token_graph.svg';

export default function TokensPanel() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const {activeWallet, wallets} = useSelector(state => state.WalletReducer);
  const navigation = useNavigation();
  const TokenItemRender = ({item}) => {
    if (!item) return;
    return (
      <TouchableOpacity
        style={styles.tokenContainer}
        onPress={() => navigation.navigate('TokenDetailScreen')}>
        <CommonGradientBG style={{paddingHorizontal: 10, paddingVertical: 12}}>
          <View style={[styles.tokenItem]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 12,
              }}>
              <CommonTokenBG size={40} bg={'#34D39915'}>
                <CommonImage
                  source={{uri: item?.image}}
                  style={{width: 24, height: 24, borderRadius: 100}}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </CommonTokenBG>
              <View style={styles.tokenBalanceContainer}>
                <CommonText
                  style={[styles.tokenSymbol, {color: theme.primary}]}>
                  {item?.name}
                </CommonText>
                <CommonText
                  style={[
                    styles.tokenBalance,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  {item?.balance || '0.0'} {item.symbol.toUpperCase()}
                </CommonText>
              </View>
            </View>
            <View style={styles.tokenUsdBalanceContainer}>
              <CommonText
                style={[styles.tokenUsdBalance, {color: theme.primary}]}>
                ${item?.current_price} USD
              </CommonText>
              <CommonText
                style={[
                  styles.tokenChangeAmount,
                  {color: colorOpacity(theme.main, 0.7)},
                ]}>
                {item?.price_change_percentage_24h || 0.0} USD
              </CommonText>
            </View>
          </View>
        </CommonGradientBG>
      </TouchableOpacity>
    );
  };
  const OwnTokenList = () => {
    return (
      <View style={styles.tokensContainer}>
        <View style={styles.tokenHeader}>
          <CommonText style={[styles.tokenLabel, {color: theme.primary}]}>
            Tokens
          </CommonText>
          <TouchableOpacity>
            <CommonText style={[styles.tokenSeeAll, {color: theme.primary}]}>
              See All
            </CommonText>
          </TouchableOpacity>
        </View>
        <View style={styles.tokenList}>
          <TokenItemRender />
          {[...activeWallet.coins, ...activeWallet.tokens].map(
            (item, index) => {
              return <TokenItemRender item={item} key={index} />;
            },
          )}
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SelectAssetsScreen', {
                  callback: () => navigation.navigate('Home'),
                })
              }
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
        </View>
      </View>
    );
  };

  const TrendingTokenList = () => {
    return (
      <View style={styles.trendingTokensContainer}>
        <View style={styles.trendingHeader}>
          <CommonText style={[styles.trendingLabel, {color: theme.primary}]}>
            Trending Tokens
          </CommonText>
          <View style={styles.trendingSlice}>
            <TouchableOpacity>
              <ArrowLeft />
            </TouchableOpacity>
            <TouchableOpacity>
              <ArrowRight />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalScroll}>
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
                      style={[
                        styles.trendingTokenSymbol,
                        {color: theme.primary},
                      ]}>
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
                    style={[
                      styles.trendingTokenBalance,
                      {color: theme.primary},
                    ]}>
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
                      style={[
                        styles.trendingTokenSymbol,
                        {color: theme.primary},
                      ]}>
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
                    style={[
                      styles.trendingTokenBalance,
                      {color: theme.primary},
                    ]}>
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
                      style={[
                        styles.trendingTokenSymbol,
                        {color: theme.primary},
                      ]}>
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
                    style={[
                      styles.trendingTokenBalance,
                      {color: theme.primary},
                    ]}>
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
          </View>
        </ScrollView>
      </View>
    );
  };

  const DappList = () => {
    return (
      <View style={styles.dappContainer}>
        <View style={styles.dappHeader}>
          <CommonText style={[styles.dappLabel, {color: theme.primary}]}>
            Explore Dapps
          </CommonText>
          <TouchableOpacity>
            <CommonText style={[styles.dappSeeAll, {color: theme.primary}]}>
              See All
            </CommonText>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalScroll}>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dappItem}>
              <CommonGradientBG style={{padding: 14}}>
                <CommonImage
                  source={require('@assets/images/dapp.png')}
                  style={{width: 44, height: 44}}
                />
              </CommonGradientBG>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View>
      <OwnTokenList />
      <TrendingTokenList />
      <DappList />
      <View style={{paddingHorizontal: 24}}>
        <CommonImage
          source={require('@assets/images/advantage.png')}
          style={{width: '100%', aspectRatio: 2 / 1, marginBottom: 20}}
        />
      </View>
      <View style={styles.topGainersContainer}>
        <View style={styles.topGainerHeader}>
          <CommonText style={[styles.topGainerLabel, {color: theme.primary}]}>
            Top Gainers
          </CommonText>
          <TouchableOpacity>
            <CommonText
              style={[styles.topGainerSeeAll, {color: theme.primary}]}>
              See All
            </CommonText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.topGainerItemContainer}>
          <CommonGradientBG style={{padding: 10}}>
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
                <CommonText
                  style={[styles.topGainerName, {color: theme.primary}]}>
                  BitDAO
                </CommonText>
              </View>
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
          </CommonGradientBG>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topGainerItemContainer}>
          <CommonGradientBG style={{padding: 10}}>
            <View style={styles.topGainerItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CommonText
                  style={[
                    styles.topGainerIndex,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  #2
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
                <CommonText
                  style={[styles.topGainerName, {color: theme.primary}]}>
                  BitDAO
                </CommonText>
              </View>
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
          </CommonGradientBG>
        </TouchableOpacity>
      </View>
      <View style={styles.topLosersContainer}>
        <View style={styles.topGainerHeader}>
          <CommonText style={[styles.topGainerLabel, {color: theme.primary}]}>
            Top Losers
          </CommonText>
          <TouchableOpacity>
            <CommonText
              style={[styles.topGainerSeeAll, {color: theme.primary}]}>
              See All
            </CommonText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.topGainerItemContainer}>
          <CommonGradientBG style={{padding: 10}}>
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
                <CommonText
                  style={[styles.topGainerName, {color: theme.primary}]}>
                  BitDAO
                </CommonText>
              </View>
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
          </CommonGradientBG>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topGainerItemContainer}>
          <CommonGradientBG style={{padding: 10}}>
            <View style={styles.topGainerItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CommonText
                  style={[
                    styles.topGainerIndex,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  #2
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
                <CommonText
                  style={[styles.topGainerName, {color: theme.primary}]}>
                  BitDAO
                </CommonText>
              </View>
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
          </CommonGradientBG>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalScroll: {
    flexDirection: 'row',
    columnGap: 16,
    paddingHorizontal: 24,
  },
  tokensContainer: {
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  tokenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tokenLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  tokenSeeAll: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Satoshi-Medium',
  },
  tokenList: {},
  tokenContainer: {
    marginBottom: 12,
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
  tokenChangeAmount: {
    fontSize: 12,
    fontFamily: 'Satoshi-Medium',
    lineHeight: 20,
  },
  addToken: {
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  trendingTokensContainer: {
    marginBottom: 20,
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 14,
    paddingHorizontal: 24,
  },
  trendingLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  trendingSlice: {
    flexDirection: 'row',
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
  dappContainer: {
    marginBottom: 20,
  },
  dappHeader: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dappLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  dappSeeAll: {
    fontSize: 14,
    lineHeight: 20,
  },
  dappItem: {
    width: 76,
  },
  topGainersContainer: {
    paddingHorizontal: 24,
    marginBottom: 8,
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
  topGainerItemContainer: {
    marginBottom: 12,
  },
  topGainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
});
