import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  createSwitchNavigator, createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
//
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import PlacesScreen from '../screens/Places';
import AddPlaceScreen from '../screens/AddPlace';
import PlaceDetailScreen from '../screens/PlaceDetail';

import * as colors from '../theme/colors';

import logo from '../assets/images/logo.png';

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    marginHorizontal: 16
  }
})

const AppScreens = createBottomTabNavigator({
  Places: PlacesScreen,
  AddPlace: AddPlaceScreen,
}, {
  tabBarOptions: {
    activeTintColor: colors.PRIMARY_COLOR,
    // showLabel: false
  }
});

const AppStack = createStackNavigator({
  AppScreens,
}, {
  navigationOptions: {
    title: 'GGateway',
    headerLeft: <Image source={logo} style={styles.logo} />
  }
});

const FullAppScreens = createStackNavigator({
  AppStack: {
    screen: AppStack,
    navigationOptions: {
      header: null
    }
  },
  PlaceDetail: PlaceDetailScreen
});

const AuthScreens = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
}, {
  initialRouteName: 'Login',
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreens,
  App: FullAppScreens,
}, {
  initialRouteName: 'Auth'
});

export default AppNavigator;