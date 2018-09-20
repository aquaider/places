import axios from 'axios';
import * as types from '../actionsTypes';
const DB_URL = 'https://rn-course-216709.firebaseio.com';

const STORE_IMAGE_URL = 'https://us-central1-rn-course-216709.cloudfunctions.net/storeImage';
export const addPlace = (name, location, image, navigation) => {
  return async dispatch => {
    try {
      dispatch({
        type: types.ADD_PLACE_LOADING,
        payload: true
      });
      const imgRes = await axios.post(STORE_IMAGE_URL, {
        image: image
      },);
      const imageURL = imgRes.data.imageURL;
      const res = await axios.post(`${DB_URL}/places.json`, {
        name,
        location,
        image: imageURL
      });
      dispatch({
        type: types.ADD_PLACE,
        payload: {
          name,
          location,
          image: imageURL,
          key: res.data.name
        }
      })
      navigation.navigate('Places')
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch({
        type: types.ADD_PLACE_LOADING,
        payload: false
      });
    }
    // alert(`${name} ${JSON.stringify(location)}`);
  }
};

export const deletePlace = key => {
  return async dispatch => {
    try {
      await axios.delete(`${DB_URL}/places/${key}.json`);
      dispatch({
        type: types.DELETE_PLACE,
        payload: {
          key
        }
      })
    } catch (e) {
      alert(e.message)
    }
  }
};

export const fetchPlaces = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${DB_URL}/places.json`);
      let data = response.data;
      if(data !== null) {
        data = Object.keys(data).map(key => {
          return {
            ...data[key],
            key
          }
        })
      } else {
        data = []
      }
      dispatch({
        type: types.FETCH_PLACES,
        payload: data
      })
      // const data = {
      //   '-LMgFwJBTuhcc9Vg1UW5': {
      //     name: 'ssfsdf',
      //     location: {
      //       latitude: 3214324,
      //       longitude: 34524243
      //     }
      //   },
      //   '-LMgFwJBTuhcc9Vg1UW5': {
      //     name: 'ssfsdf',
      //     location: {
      //       latitude: 3214324,
      //       longitude: 34524243
      //     }
      //   },
      // }
      // alert(JSON.stringify(response.data))
    } catch (e) {

    }
  }
}