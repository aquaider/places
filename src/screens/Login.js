import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Login;