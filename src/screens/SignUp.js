import React from 'react';
import {
  View, Text, StyleSheet,
  Dimensions,
} from 'react-native';
//
import CustomButton from '../components/Button/Button';
import Input from '../components/Input/Input';

const { height } = Dimensions.get('window');
class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp'
  };

  state = {
    viewMode: height > 500 ? 'portrait' : 'landscape'
  };

  handleDimensionsChange = dims => {
    const height = dims.window.height;
    this.setState({
      viewMode: height > 500 ? 'portrait' : 'landscape'
    })
  }

  componentWillUnMount() {

  }

  handleLogin = () => {

  }
  render() {
    const { viewMode } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Input
            keyboardType="email-address"
            placeholder="Email"
          />
          <View style={styles[`${viewMode}PwContainer`]}>
            <View style={styles[`${viewMode}PwInput`]}>
              <Input
                secureTextEntry
                placeholder="Password"

              />
            </View>
            <View style={styles[`${viewMode}PwInput`]}>
              <Input
                secureTextEntry
                placeholder="Confirm Password"
              />
            </View>
          </View>
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
  },
  landscapePwContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  landscapePwInput: {
    width: '45%'
  },
  portraitPwContainer: {
    flexDirection: 'column',
    width: '100%'
  },
  portraitPwInput: {
    width: '100%'
  }
});

export default SignUp;