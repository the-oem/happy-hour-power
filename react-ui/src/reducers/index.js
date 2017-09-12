import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import currentLocationReducer from './currentLocationReducer';
import locationsReducer from './locationsReducer';

const rootReducer = combineReducers({
  MapReducer,
  currentLocation: currentLocationReducer,
  locations: locationsReducer,
})

export default rootReducer;
