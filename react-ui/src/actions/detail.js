export const detailError = error => {
  return {
    type: 'DETAIL_ERROR',
    error
  };
};

export const detailLoading = bool => {
  return {
    type: 'DETAIL_LOADING',
    bool
  };
};

export const updateDetail = (location, happyhours = null) => {
  return {
    type: 'UPDATE_DETAIL',
    location,
    happyhours
  };
};

export const fetchDetail = id => {
  return dispatch => {
    dispatch(detailLoading(true));

    const happyHours = fetch(`/api/v1/locations/${id}/happyhours`)
      .then(res => {
        dispatch(detailLoading(false));
        return res.json();
      })
      .then(({ data }) => data)
      .catch(error => dispatch(detailError(error)));

    const location = fetch(`/api/v1/locations/${id}`)
      .then(res => res.json())
      .then(({ data }) => data);

    Promise.all([happyHours, location]).then(data => {
      dispatch(updateDetail(data));
    });
  };
};
