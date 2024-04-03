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
import CommonImage from '@components/commons/CommonImage';
import CommonBackButton from '@components/commons/CommonBackButton';
import CommonGradientBG from '@components/commons/CommonGradientBG';
import CommonGradientBorder from '@components/commons/CommonGradientBorder';
import {colorOpacity} from '@src/utils/ColorUtil';

import RegenerateIcon from '@assets/svgs/common/regenerate.svg';

export default function ProtectionScreen({navigation, route}) {
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
          styles.protectionHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.protectionTitle, {color: theme.primary}]}>
          Phishing Protection
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
          <CommonText
            style={[
              styles.protectionCaption,
              {color: colorOpacity(theme.primary, 0.6)},
            ]}>
            The following image is uniquely created for you to prevent phishing
            attempts. Ensure this graphic is on every login/seed phrase page.
          </CommonText>
          <View style={styles.protectionControl}>
            <CommonText
              style={[styles.protectionLabel, {color: theme.primary}]}>
              Use Phishing Protection
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
          <View style={styles.qrCode}>
            <CommonImage
              source={require('@assets/images/qr_code.png')}
              style={{width: 252, height: 242}}
            />
          </View>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
            <View
              style={[
                styles.regenerateItem,
                {backgroundColor: colorOpacity(theme.secondary2, 0.3)},
              ]}>
              <RegenerateIcon />
              <CommonText style={[styles.regenerate, {color: theme.primary}]}>
                Regenerate Image
              </CommonText>
            </View>
          </TouchableOpacity>
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
  protectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  protectionTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  protectionCaption: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 20,
  },
  protectionControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  protectionLabel: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
  },
  qrCode: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  regenerateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: 165,
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
