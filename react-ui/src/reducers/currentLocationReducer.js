const currentLocationReducer = (state={}, action) => {
  switch (action.type) {
    case 'CURRENT_LOCATION':
      return action.location;
    default:
      return state;
  }
}

export default currentLocationReducer;
