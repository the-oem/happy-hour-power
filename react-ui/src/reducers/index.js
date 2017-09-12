import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import geolocationReducer from './geolocationReducer';
import locationsReducer from './locationsReducer';

const rootReducer = combineReducers({
  MapReducer,
  geolocation: geolocationReducer,
  locations: locationsReducer
});

export default rootReducer;
