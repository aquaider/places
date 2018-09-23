import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import { checkAuth } from '../redux/actions/auth'

class Launch extends React.Component {
  componentDidMount() {
    this.handleAuth();
  }

  handleAuth = async () => {
    try {
      const { navigation } = this.props;
      await this.props.checkAuth(true, navigation);
    } catch (e) {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    checkAuth
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(Launch);