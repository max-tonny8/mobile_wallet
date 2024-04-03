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
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import PlaceBidModal from '@components/commons/PlaceBidModal';
import {colorOpacity} from '@src/utils/ColorUtil';

import ShareIcon from '@assets/svgs/common/share.svg';
import HeartIcon from '@assets/svgs/common/heart.svg';

export default function NftDetailScreen({navigation, route}) {
  const [visible, setVisible] = useState(false);
  const {theme} = useSelector(state => state.ThemeReducer);
  const {title} = route.params;

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
          {title}
        </CommonText>
        <View></View>
      </View>
      <PlaceBidModal visible={visible} setVisible={setVisible} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingBottom: 24,
            paddingHorizontal: 24,
            paddingTop: 20,
          }}>
          <View style={{marginBottom: 20}}>
            <CommonGradientBG>
              <CommonImage
                source={require('@assets/images/nft.png')}
                style={{width: '100%', aspectRatio: 1.44}}
              />
              <View style={styles.controllerContainer}>
                <CommonGradientBG>
                  <CommonText
                    style={[styles.liveNftTime, {color: theme.primary}]}>
                    3h 12m 36s Left
                  </CommonText>
                </CommonGradientBG>
                <View style={styles.controllers}>
                  <TouchableOpacity style={{zIndex: 2}}>
                    <CommonButtonBG
                      size={32}
                      bg={colorOpacity(theme.secondary2, 0.2)}>
                      <ShareIcon width={16} height={16} />
                    </CommonButtonBG>
                  </TouchableOpacity>
                  <TouchableOpacity style={{zIndex: 2}}>
                    <CommonButtonBG
                      size={32}
                      bg={colorOpacity(theme.secondary2, 0.2)}>
                      <HeartIcon width={16} height={16} />
                    </CommonButtonBG>
                  </TouchableOpacity>
                </View>
              </View>
            </CommonGradientBG>
          </View>
          <View style={{marginBottom: 20}}>
            <CommonGradientBG style={styles.itemInfo}>
              <View style={styles.item}>
                <CommonImage
                  source={require('@assets/images/avatar.png')}
                  style={{width: 32, height: 32}}
                />
                <View>
                  <CommonText
                    style={[
                      styles.headerTitle,
                      {color: colorOpacity(theme.primary, 0.6)},
                    ]}>
                    Creator
                  </CommonText>
                  <CommonText
                    style={[styles.headerContent, {color: theme.primary}]}>
                    Shapire Cole
                  </CommonText>
                </View>
              </View>
              <View style={styles.item}>
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
                      styles.headerTitle,
                      {color: colorOpacity(theme.primary, 0.6)},
                    ]}>
                    Current Price
                  </CommonText>
                  <CommonText
                    style={[styles.headerContent, {color: theme.main}]}>
                    0.47 ETH
                  </CommonText>
                </View>
              </View>
            </CommonGradientBG>
          </View>
          <View style={{marginBottom: 20}}>
            <CommonText style={[styles.nftDescLabel, {color: theme.primary}]}>
              Description
            </CommonText>
            <CommonText
              style={[
                styles.nftDesc,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Space the domain of settings and surroundings of events,
              characters. and objects in literary narrative, along with other
              domains like story, character, time and ideology, constitutes a
              fictional universe.
            </CommonText>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.saveBtn} onPress={() => setVisible(true)}>
        <CommonText
          style={[
            styles.saveBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Place a Bid
        </CommonText>
      </TouchableOpacity>
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
  controllerContainer: {
    position: 'absolute',
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
  },
  liveNftTime: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  controllers: {
    flexDirection: 'row',
    columnGap: 15,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  headerTitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  headerContent: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Satoshi-Bold',
  },
  nftDescLabel: {
    marginBottom: 8,
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  nftDesc: {
    fontSize: 14,
    lineHeight: 20,
  },
  saveBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  saveBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
