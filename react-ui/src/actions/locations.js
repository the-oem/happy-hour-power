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

export const detailLocation = (data) => {
  return {
    type: 'DETAIL_LOCATION',
    data,
  }
}

export const detailError = (error) => {
  return {
    type: 'DETAIL_ERROR',
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
      .catch((error) => {
        dispatch(locationsError(error))
      })
  }
}


export const getDetail = (id) => {
  return (dispatch) => {
    fetch(`/api/v1/locations/${id}/happyhours`)
      .then(res => res.json())
      .then(({data}) => {
        dispatch(detailLocation(data))
      })
      .catch((error) => {
        dispatch(detailError(error))
      })
  }
}
