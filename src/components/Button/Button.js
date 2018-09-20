import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet,
  TouchableOpacity, ActivityIndicator
} from 'react-native';
//
import styles from './Style';

class Button extends React.Component {

  render() {
    const { title, onPress, ...rest } = this.props;
    return (
      <TouchableOpacity
        {...rest}
        onPress={onPress}
        disabled={rest.disabled || rest.loading}
        style={[
          styles.loginButton,
          rest.disabled ? styles.disabled : {},
          rest.loading ? styles.loading : {}
          ]}>
        <Text style={styles.title}>{title}</Text>
        {
          rest.loading &&
            <ActivityIndicator
              size="small"
              color="white"
              style={styles.indicator}
            />
        }
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  title: ''
}



export default Button;