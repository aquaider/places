import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
//
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';

const AuthScreens = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
}, {
  initialRouteName: 'Login',
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreens,
}, {
  initialRouteName: 'Auth'
});

export default AppNavigator;