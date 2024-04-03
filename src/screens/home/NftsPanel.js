import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonImage from '@components/commons/CommonImage';
import PlaceBidModal from '@components/commons/PlaceBidModal';
import {colorOpacity} from '@src/utils/ColorUtil';

import ArrowLeft from '@assets/svgs/common/arrow_left.svg';
import ArrowRight from '@assets/svgs/common/arrow_right.svg';
import LiveEth from '@assets/svgs/nft/eth_live.svg';
import PopularEth from '@assets/svgs/nft/eth_popular.svg';
import HeartO from '@assets/svgs/common/heart-o.svg';
import Heart from '@assets/svgs/common/heart.svg';
import DotsMenu from '@assets/svgs/common/dots.svg';
import CommonGradientBG from '@components/commons/CommonGradientBG';

export default function NftsPanel() {
  const categories = ['All', 'Art', 'Sport', 'People', 'Photography', 'Music'];
  const {theme} = useSelector(state => state.ThemeReducer);
  const navigation = useNavigation();
  const [category, setCategory] = useState('All');
  const [visible, setVisible] = useState(false);

  const liveBiddingItem = () => {
    return (
      <View>
        <PlaceBidModal visible={visible} setVisible={setVisible} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('NftDetailScreen', {title: 'The Space 305'})
          }>
          <CommonGradientBG>
            <CommonImage
              source={require('@assets/images/nft.png')}
              style={{width: 225, height: 128}}
            />
            <View style={styles.liveNftContent}>
              <CommonText
                style={[
                  styles.liveNftCaption,
                  {color: colorOpacity(theme.primary, 0.7)},
                ]}>
                Shapire Cole
              </CommonText>
              <View style={styles.liveNftInfo}>
                <CommonText
                  style={[styles.liveNftName, {color: theme.primary}]}>
                  The Space 305
                </CommonText>
                <View style={styles.liveNftPrice}>
                  <LiveEth />
                  <CommonText
                    style={[styles.liveNftValue, {color: theme.main2}]}>
                    0.47 ETH
                  </CommonText>
                </View>
              </View>
              <View style={styles.liveNftControl}>
                <CommonText
                  style={[
                    styles.liveNftTime,
                    {color: colorOpacity(theme.secondary2, 0.4)},
                  ]}>
                  3h 12m 36s Left
                </CommonText>
                <TouchableOpacity
                  style={{zIndex: 2}}
                  onPress={() => setVisible(true)}>
                  <CommonText
                    style={[
                      styles.livePlaceBid,
                      {
                        color: theme.primary,
                        backgroundColor: theme.main,
                      },
                    ]}>
                    Place a bid
                  </CommonText>
                </TouchableOpacity>
              </View>
            </View>
          </CommonGradientBG>
        </TouchableOpacity>
      </View>
    );
  };
  const popularNftItem = () => {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() =>
          navigation.navigate('NftDetailScreen', {title: 'The Space 305'})
        }>
        <CommonGradientBG>
          <CommonImage
            source={require('@assets/images/nft.png')}
            style={{width: '100%', height: 100}}
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
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom: 20}}>
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
                    {color: data == category ? theme.main : theme.primary},
                  ]}>
                  {data}
                </CommonText>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.liveBiddingContainer}>
        <View style={styles.liveBiddingHeader}>
          <CommonText style={[styles.liveBiddingLabel, {color: theme.primary}]}>
            Live Bidding
          </CommonText>
          <View style={styles.liveBiddingSlice}>
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
            {liveBiddingItem()}
            {liveBiddingItem()}
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 24, marginBottom: 20}}>
          <CommonImage
            source={require('@assets/images/nft_market.png')}
            style={{width: '100%', aspectRatio: 3.67}}
          />
        </View>
        <View style={styles.popularContainer}>
          <View style={styles.popularHeader}>
            <CommonText style={[styles.popularLabel, {color: theme.primary}]}>
              Popular
            </CommonText>
            <TouchableOpacity>
              <CommonText
                style={[styles.popularSeeAll, {color: theme.primary}]}>
                See All
              </CommonText>
            </TouchableOpacity>
          </View>
          <View style={styles.popularNftItemsContainer}>
            {popularNftItem()}
            {popularNftItem()}
          </View>
        </View>
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
  categoryContainer: {
    flexDirection: 'row',
    columnGap: 6,
    paddingHorizontal: 24,
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
  liveBiddingContainer: {
    marginBottom: 20,
  },
  liveBiddingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 14,
    paddingHorizontal: 24,
  },
  liveBiddingLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  liveBiddingSlice: {
    flexDirection: 'row',
  },
  liveBiddingTokenItem: {
    width: 157,
  },
  liveBiddingItemContainer: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  liveNftContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 16,
  },
  liveNftCaption: {
    fontSize: 14,
    lineHeight: 20,
  },
  liveNftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  liveNftName: {
    fontSize: 14,
    fontFamily: 'Satoshi-Bold',
    lineHeight: 24,
  },
  liveNftPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3,
  },
  liveNftValue: {
    fontSize: 12,
    lineHeight: 20,
  },
  liveNftControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveNftTime: {
    fontSize: 12,
  },
  livePlaceBid: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    lineHeight: 20,
  },
  popularContainer: {paddingHorizontal: 24},
  popularHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  popularLabel: {fontSize: 16, lineHeight: 24, fontFamily: 'Satoshi-Bold'},
  popularSeeAll: {fontSize: 14, lineHeight: 20},
  popularNftItemsContainer: {
    flexDirection: 'row',
    columnGap: 20,
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
});
