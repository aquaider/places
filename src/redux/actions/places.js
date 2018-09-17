import * as types from '../actionsTypes';

export const addPlace = (name, location) => {
  return {
    type: types.ADD_PLACE,
    payload: {
      name,
      location
    }
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