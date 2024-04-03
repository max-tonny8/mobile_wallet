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
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import {colorOpacity} from '@src/utils/ColorUtil';

import CheckedIcon from '@assets/svgs/common/checked.svg';
import DropDownIcon from '@assets/svgs/common/arrow_down.svg';

export default function GasPriceScreen({navigation, route}) {
  const [tab, setTab] = useState('basic');
  const [option, setOption] = useState('Low');
  const [advanced, setAdvanced] = useState({
    gasLimit: '21000',
    maxTip: '0.1',
    maxFee: '14.862938696192',
  });
  const {theme} = useSelector(state => state.ThemeReducer);

  const GasTypesItem = ({type, from, to, checked}) => {
    return (
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() => setOption(type)}>
        {!checked ? (
          <CommonGradientBG
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <CommonText style={[styles.gasType, {color: theme.primary}]}>
                {type}
              </CommonText>
              <LinearGradient
                colors={[colorOpacity(theme.primary, 0.3), '#00000000']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[
                  styles.liveBiddingItemContainer,
                  {
                    borderColor: colorOpacity(theme.secondary2, 0.25),
                    height: 1,
                    width: '100%',
                    marginVertical: 14,
                  },
                ]}></LinearGradient>
              <View>
                <CommonText
                  style={[
                    styles.gasBalance,
                    {color: colorOpacity(theme.primary, 0.7)},
                  ]}>
                  $ {from} USD - $ {to} USD
                </CommonText>
                <CommonText
                  style={[
                    styles.gasBalance,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  0.00024 ETH - 0.00033 ETH
                </CommonText>
              </View>
            </View>
          </CommonGradientBG>
        ) : (
          <CommonGradientBorder>
            <View
              style={{
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <CommonText style={[styles.gasType, {color: theme.primary}]}>
                  {type}
                </CommonText>
                <LinearGradient
                  colors={[colorOpacity(theme.primary, 0.3), '#00000000']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={[
                    styles.liveBiddingItemContainer,
                    {
                      borderColor: colorOpacity(theme.secondary2, 0.25),
                      height: 1,
                      width: '100%',
                      marginVertical: 14,
                    },
                  ]}></LinearGradient>
                <View>
                  <CommonText style={[styles.gasBalance, {color: theme.main2}]}>
                    $ {from} USD - $ {to} USD
                  </CommonText>
                  <CommonText
                    style={[
                      styles.gasBalance,
                      {color: colorOpacity(theme.primary, 0.5)},
                    ]}>
                    0.00024 ETH - 0.00033 ETH
                  </CommonText>
                </View>
              </View>
              <CheckedIcon />
            </View>
          </CommonGradientBorder>
        )}
      </TouchableOpacity>
    );
  };
  const AdvancedItem = () => {
    return (
      <View style={{rowGap: 14}}>
        <View>
          <CommonText
            style={[
              styles.advancedLabels,
              {color: theme.primary, marginBottom: 10},
            ]}>
            Gas Limit
          </CommonText>
          <CommonGradientBorder bg="none">
            <TextInput
              style={[
                {
                  color: theme.primary,
                  width: '100%',
                  height: 44,
                  zIndex: 2,
                  flex: 1,
                  paddingHorizontal: 12,
                },
              ]}
              placeholderTextColor={colorOpacity(theme.primary, 0.5)}
              placeholder="0.0"
              autoCorrect={false}
              value={advanced.gasLimit}
              onChangeText={value =>
                setAdvanced({
                  ...advanced,
                  gasLimit: value,
                })
              }
            />
          </CommonGradientBorder>
        </View>
        <View>
          <CommonText
            style={[
              styles.advancedLabels,
              {color: theme.primary, marginBottom: 10},
            ]}>
            Max Tip (per gas unit)
          </CommonText>
          <CommonGradientBG>
            <View style={styles.maxTip}>
              <CommonText
                style={[styles.advancedLabels, {color: theme.primary}]}>
                {advanced.maxTip}
              </CommonText>
              <DropDownIcon />
            </View>
          </CommonGradientBG>
        </View>
        <View>
          <CommonText
            style={[
              styles.advancedLabels,
              {color: theme.primary, marginBottom: 10},
            ]}>
            Max Fee (per gas unit)
          </CommonText>
          <CommonGradientBG>
            <TextInput
              style={[
                {
                  color: theme.primary,
                  width: '100%',
                  height: 44,
                  zIndex: 2,
                  flex: 1,
                  paddingHorizontal: 12,
                },
              ]}
              placeholderTextColor={colorOpacity(theme.primary, 0.5)}
              placeholder="0.0"
              autoCorrect={false}
              value={advanced.gasLimit}
              onChangeText={value =>
                setAdvanced({
                  ...advanced,
                  gasLimit: value,
                })
              }
            />
          </CommonGradientBG>
        </View>
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
          styles.defaultGasHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.defaultGasTitle, {color: theme.primary}]}>
          Gas Price
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
          <View
            style={[
              styles.tabContainer,
              {backgroundColor: colorOpacity(theme.primary, 0.2)},
            ]}>
            <TouchableOpacity
              onPress={() => setTab('basic')}
              style={[
                styles.tabItem,
                {backgroundColor: tab == 'basic' ? theme.main : '#00000000'},
              ]}>
              <CommonText style={[styles.tabLabel, {color: theme.primary}]}>
                Basic
              </CommonText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab('advanced')}
              style={[
                styles.tabItem,
                {
                  backgroundColor: tab == 'advanced' ? theme.main : '#00000000',
                },
              ]}>
              <CommonText style={[styles.tabLabel, {color: theme.primary}]}>
                Advanced
              </CommonText>
            </TouchableOpacity>
          </View>
          {tab == 'basic' && (
            <View>
              <GasTypesItem
                type={'Low'}
                from={'0.43'}
                to={'0.57'}
                checked={option == 'Low'}
                setOption={setOption}
              />
              <GasTypesItem
                type={'Medium'}
                from={'0.43'}
                to={'0.57'}
                checked={option == 'Medium'}
                setOption={setOption}
              />
              <GasTypesItem
                type={'High'}
                from={'0.43'}
                to={'0.57'}
                checked={option == 'High'}
                setOption={setOption}
              />
            </View>
          )}
          {tab == 'advanced' && <AdvancedItem />}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => navigation.goBack()}>
        <CommonText
          style={[
            styles.saveBtnLabel,
            {color: theme.primary, backgroundColor: theme.main},
          ]}>
          Save
        </CommonText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultGasHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  defaultGasTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  defaultGasCaption: {
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    columnGap: 8,
    padding: 8,
    borderRadius: 10,
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 5,
  },
  tabLabel: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
  },
  gasType: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    marginBottom: 6,
  },
  gasDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
  advancedLabels: {
    fontSize: 14,
    lineHeight: 20,
  },
  maxTip: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12,
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
