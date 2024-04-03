import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import CommonButtonBG from '@components/commons/CommonButtonBG';
import CommonImage from '@components/commons/CommonImage';
import CommonGradientBG from '@components/commons/CommonGradientBG';

import {colorOpacity} from '@src/utils/ColorUtil';

import TitleLogo from '@assets/svgs/title_logo.svg';
import DropDownIcon from '@assets/svgs/common/arrow_down.svg';
import Symbol from '@assets/svgs/symbol.svg';
import ArrowRightIcon from '@assets/svgs/common/arrow_right.svg';

export default function DappScreen() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const [tabs, setTabs] = useState('tokens');
  const navigation = useNavigation();

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
            <CommonImage
              source={require('@assets/images/dapp_market.png')}
              style={{width: '100%', aspectRatio: 2.04, marginBottom: 20}}
            />
          </View>
          <DappList />
          <View style={styles.topGainersContainer}>
            <View style={styles.topGainerHeader}>
              <CommonText
                style={[styles.topGainerLabel, {color: theme.primary}]}>
                Top DApps
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
                        source={require('@assets/images/dapp.png')}
                        style={{width: '100%', height: '100%'}}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </View>
                    <CommonText
                      style={[styles.topGainerName, {color: theme.primary}]}>
                      BitDAO
                    </CommonText>
                  </View>
                  <View style={styles.topGainerBalanceContainer}>
                    <ArrowRightIcon />
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
                      #3
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
                        source={require('@assets/images/dapp.png')}
                        style={{width: '100%', height: '100%'}}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </View>
                    <CommonText
                      style={[styles.topGainerName, {color: theme.primary}]}>
                      BitDAO
                    </CommonText>
                  </View>
                  <View style={styles.topGainerBalanceContainer}>
                    <ArrowRightIcon />
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
                        source={require('@assets/images/dapp.png')}
                        style={{width: '100%', height: '100%'}}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </View>
                    <CommonText
                      style={[styles.topGainerName, {color: theme.primary}]}>
                      BitDAO
                    </CommonText>
                  </View>
                  <View style={styles.topGainerBalanceContainer}>
                    <ArrowRightIcon />
                  </View>
                </View>
              </CommonGradientBG>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  horizontalScroll: {
    flexDirection: 'row',
    columnGap: 13,
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
});
