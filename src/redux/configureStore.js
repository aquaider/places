import { createStore, combineReducers, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk'
//
import placesReducer from './reducers/places';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  places: placesReducer,
  user: userReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk))
};

export default configureStore;