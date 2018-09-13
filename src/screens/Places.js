import React from 'react';
import {
  View, Text, StyleSheet,
  FlatList, TouchableOpacity,
  Image, TextInput, Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
//
import * as colors from '../theme/colors';

class Places extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({ focused, tintColor }) => {
        const color = focused ? tintColor : '';
        return <Ionicons name="ios-map" size={25} color={color} />
      }
    }
  };

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  addPlace = () => {
    const { text } = this.state;
    // const newPlaces = [
    //   {
    //     image: 'https://multco.us/sites/default/files/styles/small/public/APFY_tem_webbanner.png',
    //     name: text,
    //     id: places.length
    //   },
    //   ...places
    // ];
    // this.setState({
    //   places: newPlaces
    // })
  };
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.placeRow}>
        <Image
          style={styles.placeImage}
          source={{ uri: item.image }}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { places } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
            placeholder="Add place" />
          <Button
            onPress={this.addPlace}
            title="add" />
        </View>
        <FlatList
          data={places}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  placeRow: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_COLOR,
  },
  placeImage: {
    width: 40,
    height: 40,
    marginRight: 16,
    borderRadius: 6,
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places,
  }
}

export default connect(mapStateToProps)(Places);