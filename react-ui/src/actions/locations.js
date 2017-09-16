export const databaseLocations = (locations) => {
  return {
    type: 'DATABASE_LOCATIONS',
    locations,
  }
}

export const locationsError = (error) => {
  return {
    type: 'LOCATIONS_ERROR',
    error,
  }
}

export const getLocations = () => {
  return (dispatch) => {
    fetch('/api/v1/locations')
      .then(res => res.json())
      .then(({data}) => {
        dispatch(databaseLocations(data));
      })
      .catch(error => {
        dispatch(locationsError(error))
      })
  }
}
