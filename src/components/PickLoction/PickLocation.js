import React from 'react';
import {View, Button, Dimensions, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class PickLocation extends React.Component {
  state = {
    focusedLocation: {
      latitude: 37.900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }
  };

  locateMe = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const event = {
        nativeEvent: {
          coordinate: pos.coords
        }
      };
      this.handlePickLocation(event)
    }, err => {
      alert(JSON.stringify(err))
    });
  };
  handlePickLocation = (event) => {
    const coordinate = event.nativeEvent.coordinate;
    // alert(JSON.stringify(coordinate))
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
    this.setState(prev => ({
        focusedLocation: {
          ...prev.focusedLocation,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        }
    }))
    this.props.onPickLocation({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    })
  }
  render() {
    const { focusedLocation } = this.state;
    return (
      <React.Fragment>
        <View style={styles.imagePlaceholder}>
          <MapView
            style={styles.map}
            initialRegion={focusedLocation}
            onPress={this.handlePickLocation}
            ref={node => this.map = node}
          >
            <Marker coordinate={focusedLocation} />
          </MapView>
        </View>
        <Button title="Locate me" onPress={this.locateMe} />
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#9d9d9d',
    borderColor: 'black'
  },
  map: {
    width: '100%',
    height: 200
  }
});

export default PickLocation;