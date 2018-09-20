import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { AUTH_LOADING, AUTH_SUCCESS } from "../actionsTypes";

const API_KEY = 'AIzaSyAqmX1ZfBZ2_3Jwxgc6SLHzlTgVLX9m3fg';
const SIGNUP_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`
const SIGNIN_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`
export const signup = ({ email, password }, navigation) => {
  return async dispatch => {
    try {
      dispatch({
        type: AUTH_LOADING,
        payload: true
      });
      const res = await axios.post(SIGNUP_URL, {
        email,
        password,
        returnSecureToken: true
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await AsyncStorage.setItem('@p:auth', JSON.stringify(res.data));
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data,
      });
      navigation.navigate('App');
      // alert(JSON.stringify(res.data));
    } catch (e) {
      // alert(e.message)
    } finally {
      dispatch({
        type: AUTH_LOADING,
        payload: false
      });
    }
  }
};

export const signin = ({ email, password }, navigation) => {
  return async dispatch => {
    try {
      dispatch({
        type: AUTH_LOADING,
        payload: true
      });
      const res = await axios.post(SIGNIN_URL, {
        email,
        password,
        returnSecureToken: true
      });
      await AsyncStorage.setItem('@p:auth', JSON.stringify(res.data));
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data,
      });
      navigation.navigate('App');
    } catch (e) {
      alert(e.message)
    } finally {
      dispatch({
        type: AUTH_LOADING,
        payload: false
      });
    }
  }
}

export const checkAuth = (navigation) => {
  return async dispatch => {
    try {
      let data = await AsyncStorage.getItem('@p:auth');
      if(!data)
        throw new Error('');

      data = JSON.parse(data);
      dispatch({
        type: AUTH_SUCCESS,
        payload: data,
      });
      navigation.navigate('App');
    } catch (e) {
      navigation.navigate('Auth');
    }
  }
}