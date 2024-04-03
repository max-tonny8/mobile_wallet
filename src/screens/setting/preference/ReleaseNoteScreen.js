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

export default function ReleaseNoteScreen({navigation, route}) {
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
          styles.releaseNoteHeader,
          {borderColor: colorOpacity(theme.primary, 0.1)},
        ]}>
        <CommonBackButton onPress={() => navigation.goBack()} />
        <CommonText style={[styles.releaseNoteTitle, {color: theme.primary}]}>
          Release Note
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
            <CommonGradientBorder>
              <View style={{padding: 14}}>
                <View style={styles.releaseInfo}>
                  <CommonText
                    style={[styles.releaseVersion, {color: theme.primary}]}>
                    Nexis 2.56
                  </CommonText>
                  <CommonText
                    style={[
                      styles.releaseDate,
                      {color: colorOpacity(theme.primary, 0.7)},
                    ]}>
                    Jan 2, 2023
                  </CommonText>
                </View>
                <CommonText
                  style={[
                    styles.releaseCaption,
                    {color: colorOpacity(theme.primary, 0.5)},
                  ]}>
                  Resetting your account will clear the transaction history and
                  added tokens.
                </CommonText>
                <View>
                  <CommonText
                    style={[styles.releaseFix, {color: theme.primary}]}>
                    Bugs Fix
                  </CommonText>
                  <CommonText
                    style={[
                      styles.fixedItem,
                      {
                        color: colorOpacity(theme.primary, 0.5),
                      },
                    ]}>{`\u2022 Don’t move unknown pseudo-elements to the end of selectors`}</CommonText>
                  <CommonText
                    style={[
                      styles.fixedItem,
                      {
                        color: colorOpacity(theme.primary, 0.5),
                      },
                    ]}>{`\u2022 Inherit gradient stop positions when using variants`}</CommonText>
                </View>
              </View>
            </CommonGradientBorder>
          </View>
          <CommonGradientBG>
            <View style={{padding: 14}}>
              <View style={styles.releaseInfo}>
                <CommonText
                  style={[styles.releaseVersion, {color: theme.primary}]}>
                  Nexis 2.55
                </CommonText>
                <CommonText
                  style={[
                    styles.releaseDate,
                    {color: colorOpacity(theme.primary, 0.7)},
                  ]}>
                  Dec 2, 2022
                </CommonText>
              </View>
              <CommonText
                style={[
                  styles.releaseCaption,
                  {color: colorOpacity(theme.primary, 0.5)},
                ]}>
                Resetting your account will clear the transaction history and
                added tokens. You will not need to re-import your seed phrase
                and your on-chain balance will not change. You will be able to
                use your account normally.
              </CommonText>
              <View style={{marginBottom: 6}}>
                <CommonText style={[styles.releaseFix, {color: theme.primary}]}>
                  Bugs Fix
                </CommonText>
                <CommonText
                  style={[
                    styles.fixedItem,
                    {
                      color: colorOpacity(theme.primary, 0.5),
                    },
                  ]}>{`\u2022 Don’t move unknown pseudo-elements to the end of selectors`}</CommonText>
                <CommonText
                  style={[
                    styles.fixedItem,
                    {
                      color: colorOpacity(theme.primary, 0.5),
                    },
                  ]}>{`\u2022 Honor default to position of gradient when using implicit transparent colors`}</CommonText>
                <CommonText
                  style={[
                    styles.fixedItem,
                    {
                      color: colorOpacity(theme.primary, 0.5),
                    },
                  ]}>{`\u2022 Normalize arbitrary modifiers`}</CommonText>
              </View>
              <View>
                <CommonText style={[styles.releaseFix, {color: theme.primary}]}>
                  Changes
                </CommonText>
                <CommonText
                  style={[
                    styles.fixedItem,
                    {
                      color: colorOpacity(theme.primary, 0.5),
                    },
                  ]}>{`\u2022 Don’t move unknown pseudo-elements to the end of selectors`}</CommonText>
              </View>
            </View>
          </CommonGradientBG>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  releaseNoteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
  },
  releaseNoteTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  releaseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  releaseVersion: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
  },
  releaseDate: {
    fontSize: 12,
    lineHeight: 24,
  },
  releaseCaption: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 6,
  },
  releaseFix: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 6,
  },
  fixedItem: {
    fontSize: 14,
    lineHeight: 18,
  },
});
