import React from 'react';
import {
  View, Text, StyleSheet,
  FlatList, TouchableOpacity,
  Image, TextInput, Button, ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//
import { fetchPlaces } from '../redux/actions/places';
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

  componentDidMount() {
    this.props.fetchPlaces();
  }

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  _renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('PlaceDetail', {
          item
        })}
        style={styles.placeRow}
      >
        <Image
          style={styles.placeImage}
          source={{ uri: item.image }}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { places, loading } = this.props;
    if(loading) {
      return (
        <View style={styles.activityIndicContainer}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={places}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.key}
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
  },
  activityIndicContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.data,
    loading: state.places.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPlaces
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Places);