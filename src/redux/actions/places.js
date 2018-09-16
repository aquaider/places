import * as types from '../actionsTypes';

export const addPlace = (name) => {
  return {
    type: types.ADD_PLACE,
    payload: {
      name,
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