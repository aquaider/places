
export const addPlace = (name) => {
  return {
    type: 'ADD_PLACE',
    payload: {
      name,
    }
  }
};

const deletePlace = id => {
  return {
    type: 'DELETE_PLACE'
  }
}