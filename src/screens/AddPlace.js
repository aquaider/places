import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import { addPlace } from '../redux/actions/places';

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

  state = {
    placeName: '',
  };

  handleInputChange = text => {
    this.setState({ placeName: text })
  };

  addPlace = () => {
    const { placeName } = this.state;
    this.props.addPlace(placeName)
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            onChangeText={this.handleInputChange}
            placeholder="Add place" />
          <Button
            onPress={this.addPlace}
            title="add" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addPlace
  }, dispatch)
  // return {
  //   addPlace: (name) => dispatch(addPlace(name))
  // }
}

export default connect(null,mapDispatchToProps)(AddPlace);