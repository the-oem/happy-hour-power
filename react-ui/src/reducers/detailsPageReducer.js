const detailsPageReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DETAIL':
      return {
        location: action.location,
        happyhours: action.happyhours
      };
    default:
      return state;
  }
};

export default detailsPageReducer;
