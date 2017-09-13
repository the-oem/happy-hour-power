import { combineReducers } from 'redux';
import currentLocationReducer from './currentLocationReducer';
import locationsReducer from './locationsReducer';
import toggleMapViewReducer from './ToggleMapViewReducer';

const rootReducer = combineReducers({
  currentLocation: currentLocationReducer,
  locations: locationsReducer,
  toggleMapView: toggleMapViewReducer
});

export default rootReducer;
