import { ADD_PLACE, DELETE_PLACE, FETCH_PLACES } from '../actionsTypes';

const initialState = {
  data: [],
  loading: true,
}
const placesReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        data: [...state.data, {
          name: action.payload.name,
          location: action.payload.location,
          key: action.payload.key,
          // image: 'https://multco.us/sites/default/files/styles/small/public/APFY_tem_webbanner.png',
        }]
      };
    case DELETE_PLACE:
      return {
        ...state,
        data: state.places.filter(place => place.id !== action.payload.id)
      }
    case FETCH_PLACES:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state
  }
};

export default placesReducer;