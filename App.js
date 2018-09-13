/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet,
  Text, View, YellowBox,
} from 'react-native';
import { Provider } from 'react-redux';
//
import AppNavigator from './src/Navigator/AppNavigator';
import configureStore from './src/redux/configureStore';

YellowBox.ignoreWarnings([
  'Warning:',
  'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
