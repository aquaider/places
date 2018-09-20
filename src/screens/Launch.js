import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import { checkAuth } from '../redux/actions/auth'

class Launch extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    this.props.checkAuth(navigation);
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