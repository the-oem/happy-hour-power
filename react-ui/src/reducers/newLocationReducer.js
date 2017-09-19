const newLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HAPPYHOURS':
      return action.data;
    default:
      return state;
  }
};

export default newLocationReducer;
