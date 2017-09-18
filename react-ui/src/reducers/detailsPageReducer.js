const detailsPageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DETAIL':
      return action.happyhours;
    default:
      return state;
  }
};

export default detailsPageReducer;
