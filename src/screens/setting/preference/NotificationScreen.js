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
import LinearGradient from 'react-native-linear-gradient';
import {Switch} from 'react-native-switch';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import DropdownIcon from '@assets/svgs/common/arrow_down.svg';

export default function NotificationScreen({navigation, route}) {
  const [warnings, setWarnings] = useState({
    address: false,
    gas: false,
    bridge: false,
  });
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
          styles.notificationHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.notificationTitle, {color: theme.primary}]}>
          Notification & Warning
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
          <View>
            <CommonText
              style={[
                styles.warningDescription,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Warn me when my selected account address is different from
              transaction's address.
            </CommonText>
            <View style={styles.warningAlertControl}>
              <CommonText style={[styles.warningLabel, {color: theme.primary}]}>
                Enable Lock Timeout
              </CommonText>
              <Switch
                value={warnings.address}
                onValueChange={val => setWarnings({...warnings, address: val})}
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
          </View>
          <LinearGradient
            colors={[
              'transparent',
              colorOpacity(theme.primary, 0.35),
              'transparent',
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{height: 1, marginBottom: 20}}></LinearGradient>
          <View>
            <CommonText
              style={[
                styles.warningDescription,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Warn me when a dApp suggests fees much lower/higher than
              recommended.
            </CommonText>
            <View style={styles.warningAlertControl}>
              <CommonText style={[styles.warningLabel, {color: theme.primary}]}>
                Show Gas Price Warning
              </CommonText>
              <Switch
                value={warnings.gas}
                onValueChange={val => setWarnings({...warnings, gas: val})}
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
          </View>
          <LinearGradient
            colors={[
              'transparent',
              colorOpacity(theme.primary, 0.35),
              'transparent',
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{height: 1, marginBottom: 20}}></LinearGradient>
          <View>
            <CommonText
              style={[
                styles.warningDescription,
                {color: colorOpacity(theme.primary, 0.6)},
              ]}>
              Warn me when I haven't enough funds in the destination network of
              a bridge
            </CommonText>
            <View style={styles.warningAlertControl}>
              <CommonText style={[styles.warningLabel, {color: theme.primary}]}>
                Show Bridging Warning
              </CommonText>
              <Switch
                value={warnings.bridge}
                onValueChange={val => setWarnings({...warnings, bridge: val})}
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
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  notificationTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  warningDescription: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 20,
  },
  warningAlertControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  warningLabel: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
  },
});
