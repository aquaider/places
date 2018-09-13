import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//
import CustomButton from '../components/Button/Button';
import Input from '../components/Input/Input';
import * as colors from '../theme/colors';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  handleLogin = () => {
    this.props.navigation.navigate('App')
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
          <View style={styles.noAccount}>
            <Text>You don't have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signup}>SignUp</Text>
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
  noAccount: {
    flexDirection: 'row',
    marginVertical: 32
  },
  signup: {
    color: colors.PRIMARY_COLOR,
    textDecorationLine: 'underline'
  }
});

// export default Login;