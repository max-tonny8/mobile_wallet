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
import {Switch} from 'react-native-switch';

import CommonText from '@components/commons/CommonText';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import CommonTokenBG from '@components/commons/CommonTokenBG';
import {colorOpacity} from '@src/utils/ColorUtil';

import DropdownIcon from '@assets/svgs/common/arrow_down.svg';

export default function LockTimeoutScreen({navigation, route}) {
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
          styles.exportAccountHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.exportAccountTitle, {color: theme.primary}]}>
          Lock Timeout
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
          <View style={styles.enableOptionControl}>
            <CommonText style={[styles.enableLabel, {color: theme.primary}]}>
              Enable Lock Timeout
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
          <CommonText
            style={[
              styles.lockCaption,
              {color: colorOpacity(theme.primary, 0.5)},
            ]}>
            NexisWallet will automatically lock and require an additional login
            after the selected period.
          </CommonText>
          <View>
            <CommonText
              style={[
                styles.lockPeriod,
                {color: colorOpacity(theme.primary, 0.7)},
              ]}>
              Periode
            </CommonText>
            <TouchableOpacity>
              <CommonGradientBG
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 14,
                }}>
                <CommonText
                  style={[
                    styles.lockTypeText,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  5 minutes
                </CommonText>
                <DropdownIcon />
              </CommonGradientBG>
            </TouchableOpacity>
          </View>
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
  exportAccountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  exportAccountTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  enableOptionControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  enableLabel: {},
  lockCaption: {
    marginBottom: 20,
  },
  lockPeriod: {
    marginBottom: 9,
  },
  lockTypeText: {},
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
