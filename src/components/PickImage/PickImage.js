import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class PickImage extends React.Component {
  state = {
    source: null
  }
  handlePickImage = () => {
    const options = {
      title: 'Pick Image',
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      }  else {
        let source = { uri: response.uri };
        // response.data
          this.setState({
          source,
        })
      }
    })
  }
  render() {
    const { source } = this.state;
    return (
      <React.Fragment>
        <View style={styles.imagePlaceholder}>
          <Image
            source={source}
            style={styles.pickedImage}
          />
        </View>
        <Button
          title="Pick Image"
          onPress={this.handlePickImage}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#9d9d9d',
    borderColor: 'black'
  },
  pickedImage: {
    width: '100%',
    height: '100%'
  }
});

export default PickImage;