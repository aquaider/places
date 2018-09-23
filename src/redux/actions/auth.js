import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { AUTH_LOADING, AUTH_SUCCESS } from "../actionsTypes";
//
import NavigationService from '../../Navigator/NavigationService';
const API_KEY = 'AIzaSyAqmX1ZfBZ2_3Jwxgc6SLHzlTgVLX9m3fg';
const SIGNUP_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`
const SIGNIN_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`
const REFRESH_TOKEN = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;

const expiryDate = () => {
  const currentDate = new Date();
  return currentDate.getTime() + 1000 * 3600;
};

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
      const expDate = expiryDate();
      res.data.expiryDate = expDate.toString();
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
      const expDate = expiryDate();
      res.data.expiryDate = expDate.toString();
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

export const checkAuth = (launch=false, navigation=null) => {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      // console.log('navigation ', navigation)
      const nav = navigation !== null ? navigation : NavigationService;
      try {
        let data = await AsyncStorage.getItem('@p:auth');
        if(!data) throw new Error('');
        data = JSON.parse(data);
        const expDate = new Date(parseInt(data.expiryDate));
        const now = new Date();
        if(now < expDate) {
          if(launch) {
            nav.navigate('App')
            // navigation.navigate('App');
          }
          dispatch({
            type: AUTH_SUCCESS,
            payload: data,
          });
          resolve();
        } else {
          const refreshToken = data.refreshToken;
          const res = await axios.post(REFRESH_TOKEN,
            `grant_type=refresh_token&refresh_token=${refreshToken}`, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            });
          const newData = {
            refreshToken: res.data.refresh_token,
            idToken: res.data.id_token,
            userId: res.data.user_id,
            expiryDate: expiryDate(),
          };
          await AsyncStorage.setItem('@p:auth', JSON.stringify(newData));
          if(launch) {
            nav.navigate('App')
            // navigation.navigate('App');
          }
          dispatch({
            type: AUTH_SUCCESS,
            payload: data,
          });
          resolve();
        }
      } catch (e) {
        // alert(JSON.stringify(e.response.data));
        // await AsyncStorage.clear();
        // alert(JSON.stringify(e.response.data))
        nav.navigate('Auth');
        reject()
      }
    })
  }
};

