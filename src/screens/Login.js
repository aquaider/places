import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomButton from '../components/Button/Button';
import Input from '../components/Input/Input';
import * as colors from '../theme/colors';
import { signin } from '../redux/actions/auth';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };
  state = {
    email: '',
    password: ''
  }
  handleLogin = () => {
    const { navigation } = this.props;
    this.props.signin(this.state, navigation)
  }
  render() {
    const { navigation, loading } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Input
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={text => {
              this.setState({
                email: text
              })
            }}
          />
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={text => {
              this.setState({
                password: text
              })
            }}

          />
          <CustomButton
            onPress={this.handleLogin}
            title="Login"
            loading={loading}
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

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signin
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);