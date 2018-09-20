import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native';
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
import LaunchScreen from '../screens/Launch';
import * as colors from '../theme/colors';

import logo from '../assets/images/logo.png';

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    marginHorizontal: 16
  },
  signoutText: {
    fontSize: 18,
    paddingHorizontal: 16,
    fontWeight: 'bold'
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
  navigationOptions: ({ navigation }) => {
    return {
      title: 'GGateway',
      headerLeft: <Image source={logo} style={styles.logo} />,
      headerRight: (
        <TouchableOpacity
          onPress={async () => {
          try {
            await AsyncStorage.removeItem('@p:auth');
            navigation.navigate('Auth');
          } catch (e) {

          }
        }}>
          <Text style={styles.signoutText}>Signout</Text>
        </TouchableOpacity>
      )
    }
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
  Launch: LaunchScreen,
  Auth: AuthScreens,
  App: FullAppScreens,
}, {
  // initialRouteName: 'Auth'
  // initialRouteName: 'App'
});

export default AppNavigator;