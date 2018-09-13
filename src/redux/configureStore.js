import { createStore, combineReducers } from 'redux';
//
import placesReducer from './reducers/places';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  places: placesReducer,
  user: userReducer,
});

const configureStore = () => {
  return createStore(rootReducer)
};

export default configureStore;