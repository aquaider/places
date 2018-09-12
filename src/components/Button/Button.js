import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//
import styles from './Style';

class Button extends React.Component {

  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.loginButton}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  title: ''
}



export default Button;