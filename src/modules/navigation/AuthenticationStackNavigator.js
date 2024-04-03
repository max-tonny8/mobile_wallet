import React, {useEffect} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import LockedScreen from '@screens/auth/LockedScreen';
import WelcomeScreen from '@screens/auth/WelcomeScreen';
import OopsScreen from '@screens/auth/OopsScreen';
import WalkThroughScreen from '@screens/auth/WalkThroughScreen';
import SignUpScreen from '@screens/auth/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthenticationStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="OopsScreen" component={OopsScreen} />
      <Stack.Screen name="WalkThroughScreen" component={WalkThroughScreen} />
      <Stack.Screen name="LockedScreen" component={LockedScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
