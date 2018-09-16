
const initialState = [
  {
    image: 'https://multco.us/sites/default/files/styles/small/public/APFY_tem_webbanner.png',
    name: 'place 1',
    id: 0,
  },
  {
    image: 'https://multco.us/sites/default/files/styles/small/public/APFY_tem_webbanner.png',
    name: 'place 2',
    id: 1
  },
];

const placesReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return [...state, {
        name: action.payload.name,
        id: Math.random(),
        image: 'https://multco.us/sites/default/files/styles/small/public/APFY_tem_webbanner.png',
      }];
    default:
      return state
  }
};

export default placesReducer;