/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
//
import AppNavigator from './src/Navigator/AppNavigator';

YellowBox.ignoreWarnings([
  'Warning:',
  'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
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
