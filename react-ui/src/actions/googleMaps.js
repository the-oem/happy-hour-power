import { DEFAULT_LOCATION } from '../utils/constants';

export const currentLocation = (location) => {
  return {
    type: 'CURRENT_LOCATION',
    location,
  }
}

export const nearbyLocations = (data) => {
  return {
    type: 'NEARBY_LOCATIONS',
    data,
  }
}

export const geolocate = () => {
  return (dispatch) => {

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        const coordinates = {
          lat: coords.latitude,
          lng: coords.longitude,
        }

        dispatch(currentLocation(coordinates));
      });
    } else {

      dispatch(currentLocation(DEFAULT_LOCATION.coordinates));
    }
  }
}
