import { DEFAULT_LOCATION } from '../utils/constants';

export const updateLocation = location => {
  return {
    type: 'GEOLOCATE',
    location
  };
};

export const geolocate = () => {
  return dispatch => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        dispatch(updateLocation({ latitude, longitude }));
      });
    } else {
      dispatch(updateLocation(DEFAULT_LOCATION.coordinates));
    }
  };
};
