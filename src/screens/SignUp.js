import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//
import CustomButton from '../components/Button/Button';
import Input from '../components/Input/Input';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp'
  };

  handleLogin = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Input
            keyboardType="email-address"
            placeholder="Email"
          />
          <Input
            secureTextEntry
            placeholder="Password"

          />
          <CustomButton
            onPress={this.handleLogin}
            title="SignUp"
            // style
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginForm: {
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%'
  },
  loginButton: {

  }
});

export default SignUp;