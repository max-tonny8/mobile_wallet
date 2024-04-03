import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Switch} from 'react-native-switch';
import {useDispatch, useSelector} from 'react-redux';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import {colorOpacity} from '@src/utils/ColorUtil';

import CopyIcon from '@assets/svgs/common/copy.svg';
import WarningIcon from '@assets/svgs/common/warning_secondary.svg';

export default function DefaultBrowserScreen({navigation, route}) {
  const [option, setOption] = useState(false);
  const {theme} = useSelector(state => state.ThemeReducer);
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <ImageBackground
        source={require('@assets/images/background.png')}
        style={{width: '100%', aspectRatio: 1.2, position: 'absolute', top: 0}}
      />

      <View
        style={[
          styles.defaultBrowserHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText
          style={[styles.defaultBrowserTitle, {color: theme.primary}]}>
          Default Browser Wallet
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
            <CommonGradientBG style={{padding: 14}}>
              <CommonText
                style={[styles.walletCaption, {color: theme.primary}]}>
                NexisWallet is set as your default browser wallet.
              </CommonText>
            </CommonGradientBG>
          </View>
          <View style={styles.defaultBrowserControl}>
            <CommonText
              style={[styles.defaultBrowserLabel, {color: theme.primary}]}>
              Default Browser
            </CommonText>
            <Switch
              value={option}
              onValueChange={val => setOption(val)}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={20}
              barHeight={24}
              backgroundActive={theme.main}
              backgroundInactive={theme.secondary1}
              circleActiveColor={theme.primary}
              circleInActiveColor={theme.primary}
              changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }} // style for inner animated circle for what you (may) be rendering inside the circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={3} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={3} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />
          </View>
          <View style={styles.descriptions}>
            <CommonText
              style={[
                styles.description,
                {color: colorOpacity(theme.primary, 0.5)},
              ]}>
              Turning this off will make NexisWallet unable to connect to DApps
              in case you have more than one wallet installed in your browser.
              Turn it off if you want a different browser wallet to connect to
              the DApps you are visiting.
            </CommonText>
            <CommonText
              style={[
                styles.description,
                {color: colorOpacity(theme.primary, 0.5)},
              ]}>
              You can change this setting at any time. Be aware that you need to
              refresh any DApp pages you might be on, for these changes to take
              affect.
            </CommonText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultBrowserHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  defaultBrowserTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  defaultBrowserControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  defaultBrowserLabel: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bol',
  },
  descriptions: {},
  description: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 18,
  },
});
