const geolocationReducer = (state={}, action) => {
  switch (action.type) {
    case 'GEOLOCATE':
      return action.location;
    default:
      return state;
  }
}

export default geolocationReducer;
