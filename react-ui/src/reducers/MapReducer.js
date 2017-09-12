const MapReducer = (state = [], action) => {
  switch (action.type) {
    case 'RENDER_MAP':
      return action.map;

    default:
      return state;
  }
};

export default MapReducer;
