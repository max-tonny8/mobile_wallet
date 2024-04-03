import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';

import CommonText from '@components/commons/CommonText';
import {colorOpacity} from '@src/utils/ColorUtil';
import CommonImage from '@components/commons/CommonImage';

const slides = [
  {
    key: 1,
    title: 'The Most Trusted & Secure Crypto Wallet',
    text: 'Track more than 100+ crypto coins unders our user-frendly, safe and secure platform',
  },
  {
    key: 2,
    title: 'The Most Trusted & Secure Crypto Wallet',
    text: 'Track more than 100+ crypto coins unders our user-frendly, safe and secure platform',
  },
  {
    key: 3,
    title: 'The Most Trusted & Secure Crypto Wallet',
    text: 'Track more than 100+ crypto coins unders our user-frendly, safe and secure platform',
  },
  {
    key: 4,
    title: 'The Most Trusted & Secure Crypto Wallet',
    text: 'Track more than 100+ crypto coins unders our user-frendly, safe and secure platform',
  },
];

export default function WalkThroughScreen() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const [dotIndex, setDotIndex] = useState(0);
  const navigation = useNavigation();
  const ref = useRef(null);
  const opacityFadeAnim = useRef(new Animated.Value(0)).current;
  const radiusFadeAnim = useRef(new Animated.Value(0)).current;
  const btnGroupFadeAnim = useRef(new Animated.Value(400)).current;
  const itemRightFadeAnim = useRef(new Animated.Value(400)).current;
  const itemLeftFadeAnim = useRef(new Animated.Value(-400)).current;

  const opacityFadeIn = () => {
    // Will change fadeAnim value to 1 in .5 seconds
    Animated.timing(opacityFadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const radiusFadeIn = () => {
    // Will change fadeAnim value to 1 in .5 seconds
    Animated.timing(radiusFadeAnim, {
      toValue: 30,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const btnGroupFadeIn = () => {
    // Will change fadeAnim value to 1 in .5 seconds
    Animated.timing(btnGroupFadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const itemLeftFadeIn = () => {
    // Will change fadeAnim value to 1 in .5 seconds
    Animated.timing(itemLeftFadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const itemRightFadeIn = () => {
    // Will change fadeAnim value to 1 in .5 seconds
    Animated.timing(itemRightFadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    opacityFadeIn();
    radiusFadeIn();
    btnGroupFadeIn();
    itemLeftFadeIn();
    itemRightFadeIn();
  }, []);

  const renderItem = () => {
    return (
      <View style={styles.carouselContainer}>
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              backgroundColor: 'rgba(32, 169, 160, 0.65)',
              borderRadius: radiusFadeAnim,
              opacity: opacityFadeAnim,
            },
          ]}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: itemLeftFadeAnim,
                },
              ],
            }}>
            <CommonImage
              source={require('@assets/images/walks/item1.png')}
              style={{width: 231, height: 56, marginLeft: -100}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: itemRightFadeAnim,
                },
              ],
            }}>
            <CommonImage
              source={require('@assets/images/walks/item2.png')}
              style={{width: 231, height: 56, marginLeft: 100}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Animated.View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: itemLeftFadeAnim,
                },
              ],
            }}>
            <CommonImage
              source={require('@assets/images/walks/item3.png')}
              style={{width: 231, height: 56, marginLeft: -100}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Animated.View>
        </Animated.View>
        <View>
          <CommonText style={[styles.itemTitle, {color: theme.primary}]}>
            The Most Trusted & Secure Crypto Wallet
          </CommonText>
          <CommonText
            style={[
              styles.itemDescription,
              {color: colorOpacity(theme.primary, 0.6)},
            ]}>
            Track more than 100+ crypto coins unders our user-frendly, safe and
            secure platform
          </CommonText>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppIntroSlider
          ref={ref}
          renderItem={renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: theme.main,
            marginTop: -80,
            width: 30,
          }}
          dotStyle={{
            marginTop: -80,
            backgroundColor: theme.primary,
          }}
          onSlideChange={(index, lastIndex) => {
            setDotIndex(index);
          }}
          showSkipButton={false}
          showDoneButton={false}
          showNextButton={false}
        />
      </ScrollView>
      <Animated.View
        style={[
          styles.btnGroup,
          {
            transform: [
              {
                translateY: btnGroupFadeAnim,
              },
            ],
          },
        ]}>
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <CommonText
            style={[
              styles.createBtnLabel,
              {
                color: theme.primary,
                borderColor: theme.secondary1,
                borderWidth: 1,
              },
            ]}>
            Skip
          </CommonText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => {
            if (dotIndex >= 3) {
              navigation.navigate('LockedScreen');
              return;
            }
            if (ref.current) {
              ref.current.goToSlide(dotIndex + 1);
              setDotIndex(dotIndex + 1);
            }
          }}>
          <CommonText
            style={[
              styles.createBtnLabel,
              {color: theme.primary, backgroundColor: theme.main},
            ]}>
            Next
          </CommonText>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    paddingHorizontal: 24,
    height: Dimensions.get('window').height - 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  createBtn: {
    flex: 1,
  },
  createBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
  animatedContainer: {
    marginHorizontal: 41,
    height: 262,
    width: 245,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 12,
    marginBottom: 50,
  },
  itemTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemDescription: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});
