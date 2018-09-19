import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//
import { addPlace } from '../redux/actions/places';
import PickLocation from '../components/PickLoction/PickLocation';
import PickImage from '../components/PickImage/PickImage';

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
    location: null,
    image: null,
  };

  handleInputChange = text => {
    this.setState({ placeName: text })
  };

  addPlace = () => {
    const { placeName, location, image } = this.state;
    this.props.addPlace(placeName, location, image)
  };
  handlePickLocation = location => {
    this.setState({
      location
    })
  };
  handlePickImage = base64 => {
    this.setState({
      image: base64
    })
  }
  render() {
    const { focusedLocation } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <PickImage onPickImage={this.handlePickImage} />
          <PickLocation onPickLocation={this.handlePickLocation} />
          <View>
            <TextInput
              onChangeText={this.handleInputChange}
              placeholder="Add place" />
            <Button
              onPress={this.addPlace}
              title="add"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: 200
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