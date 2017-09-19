export const databaseLocations = (locations, googleMapsLocations) => {
  return {
    type: 'DATABASE_LOCATIONS',
    locations,
    googleMapsLocations,
  }
}

export const locationsError = error => {
  return {
    type: 'LOCATIONS_ERROR',
    error
  };
};

export const addHappyHours = data => {
  return {
    type: 'ADD_HAPPYHOURS',
    data
  };
};

export const getLocations = (googleMapsLocations) => {
  return (dispatch) => {
    fetch('/api/v1/locations')
      .then(res => res.json())
      .then(({data}) => {
        dispatch(databaseLocations(data, googleMapsLocations));
      })
      .catch(error => {
        dispatch(locationsError(error));
      });
  };
};
