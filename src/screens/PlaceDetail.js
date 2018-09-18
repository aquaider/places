import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
//
import TitleText from '../components/TitleText/TitleText';
import { deletePlace } from '../redux/actions/places';

class PlaceDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const { params } = state;
    return {
      title: params.item.name
    }
  };
  handleDeletePlace = () => {
    const { navigation } = this.props;
    const { state } = navigation;
    const { item } = state.params;
    this.props.deletePlace(item.id);
    navigation.goBack();
  }
  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    const { item } = state.params;
    const  focusedLocation = {
      latitude: item.location.latitude,
      longitude: item.location.longitude,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }
    return (
      <View style={styles.container}>
        <TitleText headType="h4">
          {item.name}
        </TitleText>
        <MapView
          scrollEnabled={false}
          style={styles.map}
          initialRegion={focusedLocation}>
          <Marker coordinate={focusedLocation} />
        </MapView>
        <Image style={styles.placeImage} source={{ uri: item.image }} />
        <TouchableOpacity onPress={this.handleDeletePlace}>
          <Ionicons size={30} color={'#f00'} name="ios-trash" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  placeImage: {
    width: '100%',
    height: 150
  },
  map: {
    width: '100%',
    height: 200
  }
});

const mapDispatchToProps = dispatch => {
  return {
    deletePlace: (id) => dispatch(deletePlace(id))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);