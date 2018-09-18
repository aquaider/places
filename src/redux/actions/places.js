import axios from 'axios';
import * as types from '../actionsTypes';

const DB_URL = 'https://rn-course-216709.firebaseio.com';


export const addPlace = (name, location) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${DB_URL}/places.json`, {
        name,
        location,
        // image: null
      });
      dispatch({
        type: types.ADD_PLACE,
        payload: {
          name,
          location,
          key: res.data.name
        }
      })
    } catch (error) {
      alert(error.message)
    }
    // alert(`${name} ${JSON.stringify(location)}`);
  }
};

export const deletePlace = id => {
  return {
    type: types.DELETE_PLACE,
    payload: {
      id
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