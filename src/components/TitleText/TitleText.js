import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = (props) => {
  const { headType } = props;
  const style = styles[headType] || { fontSize: 18 };
  return (
    <Text style={style}>{props.children}</Text>
  )
};

TitleText.defaultProps = {
  headType: 'h3',
}
const styles = StyleSheet.create({
  h1: {
    fontSize: 30
  },
  h2: {
    fontSize: 24
  },
  h3: {
    fontSize: 24
  },
})

export default TitleText;