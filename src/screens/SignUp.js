import React from 'react';
import {
  View, Text, StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import CustomButton from '../components/Button/Button';
import Input from '../components/Input/Input';
import { signup } from '../redux/actions/auth';

const { height } = Dimensions.get('window');
class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp'
  };

  state = {
    viewMode: height > 500 ? 'portrait' : 'landscape',
    email: '',
    password: '',
  };

  handleDimensionsChange = dims => {
    const height = dims.window.height;
    this.setState({
      viewMode: height > 500 ? 'portrait' : 'landscape'
    })
  }

  componentWillUnMount() {

  }

  handleSignup = () => {
    const { navigation } = this.props;
    this.props.signup(this.state, navigation);
  };
  render() {
    const { viewMode } = this.state;
    const { loading } = this.props;
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
          <View style={styles[`${viewMode}PwContainer`]}>
            <View style={styles[`${viewMode}PwInput`]}>
              <Input
                secureTextEntry
                placeholder="Password"
                onChangeText={text => {
                  this.setState({
                    password: text
                  })
                }}
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
            onPress={this.handleSignup}
            title="SignUp"
            loading={loading}
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

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signup
  }, dispatch);
  // signup: (data) => dispatch(signup(data))
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);