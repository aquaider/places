import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//
import CustomButton from '../components/Button/Button';
import Input from '../components/Input/Input';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  handleLogin = () => {

  }
  render() {
    const { navigation } = this.props;
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
            title="Login"
            // style
          />
          <View>
            <Text>You don't have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text>SignUp</Text>
            </TouchableOpacity>
          </View>
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

// export default Login;