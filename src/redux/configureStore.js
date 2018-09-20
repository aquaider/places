import { createStore, combineReducers, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk'
//
import placesReducer from './reducers/places';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  places: placesReducer,
  auth: authReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk))
};

export default configureStore;