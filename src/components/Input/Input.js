import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Input extends React.Component {

  render() {
    const { style, ...others } = this.props;
    return (
      <TextInput
        {...others}
        style={[styles.input, style]}
        underlineColorAndroid="transparent"
      />
    );
  }
}

Input.defaultProps = {
  style: {}
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#9f9f9f',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Input;