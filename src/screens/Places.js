import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Places extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({ focused, tintColor }) => {
        const color = focused ? tintColor : '';
        return <Ionicons name="ios-map" size={25} color={color} />
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Places Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Places;