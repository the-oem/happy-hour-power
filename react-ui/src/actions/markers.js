

// return {
//   type: 'HANDLE_MARKER_CLICK',
//   marker,
// };
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

export const detailLoading = (bool) => {
  return {
    type: 'DETAIL_LOADING',
    bool,
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

export const updateDetail = (location, happyhours=null) => {
  return {
    type: 'UPDATE_DETAIL',
    location,
    happyhours
  }
}


export const handleMarkerClick = (location) => {
  return (dispatch) => {
    const { location: { id }, inTable } = location;

    if (!inTable) return dispatch(updateDetail(location));
    dispatch(detailLoading(true))

    fetch(`/api/v1/locations/${id}/happyhours`)
      .then((res) => {
        dispatch(detailLoading(false));
        return res.json();
      })
      .then(({data}) => {
        dispatch(updateDetail(location, data));
      })
      .catch((error) => dispatch(detailError(error)))
  }
};
