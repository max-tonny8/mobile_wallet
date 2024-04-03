import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import Home from '@components/icons/menu/Home';
import Collectible from '@components/icons/menu/Collectible';
import Setting from '@components/icons/menu/Setting';
import Swap from '@components/icons/menu/Swap';
import History from '@components/icons/menu/History';
import MarketPlace from '@components/icons/menu/MarketPlace';

import HomeScreen from '@screens/home/HomeScreen';
import SwapScreen from '@screens/swap/SwapScreen';
import SettingScreen from '@screens/setting/SettingScreen';
import CollectibleScreen from '@screens/collectibles/CollectibleScreen';
import MarketPlaceScreen from '@screens/marketPlace/MarketPlaceScreen';
import DappScreen from '@screens/dapp/DappScreen';
const Tab = createBottomTabNavigator();

function CustomNavBar({state, descriptors, navigation}) {
  return (
    <ImageBackground
      source={require('@assets/images/navbar_bg.png')}
      resizeMode="stretch"
      style={{
        height: 80,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const tabBarIcon = options.tabBarIcon;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({
                name: route.name,
                merge: true,
              });
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopWidth: 2,
                  borderColor: 'transparent',
                },
              ]}>
              {tabBarIcon === 'Home' && <Home isFocused={isFocused} />}
              {tabBarIcon === 'MarketPlace' && (
                <MarketPlace isFocused={isFocused} />
              )}
              {tabBarIcon === 'Swap' && <Swap isFocused={isFocused} />}
              {/* {tabBarIcon === 'History' && <History isFocused={isFocused} />} */}
              {tabBarIcon === 'Dapp' && <Collectible isFocused={isFocused} />}
              {tabBarIcon === 'Setting' && <Setting isFocused={isFocused} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </ImageBackground>
  );
}
function BottomTabBarNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomNavBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'Home',
        }}
      />
      <Tab.Screen
        name="MarketPlace"
        component={MarketPlaceScreen}
        options={{
          tabBarLabel: 'MarketPlace',
          tabBarIcon: 'MarketPlace',
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarLabel: 'Swap',
          tabBarIcon: 'Swap',
        }}
      />
      <Tab.Screen
        name="Dapp"
        component={DappScreen}
        options={{
          tabBarLabel: 'Dapp',
          tabBarIcon: 'Dapp',
        }}
      />
      {/* <Tab.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: 'History',
        }}
      /> */}
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBarNavigator;
