import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class AddPlace extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Add Place',
      tabBarIcon: ({ focused, tintColor }) => {
        const color = focused ? tintColor : '';
        return <Ionicons name="ios-add-circle" size={25} color={color} />
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>AddPlace Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AddPlace;