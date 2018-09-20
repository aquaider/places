import { AUTH_LOADING, AUTH_SUCCESS } from '../actionsTypes';

const initialState = {
  loading: false,
  localId: '',
  expiresIn: '',
  refreshToken: '',
  email: '',
  idToken: ''
};
const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
};

export default authReducer;