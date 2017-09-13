import { combineReducers } from 'redux';
import currentLocationReducer from './currentLocationReducer';
import locationsReducer from './locationsReducer';
import activeLocationReducer from './activeLocationReducer';

const rootReducer = combineReducers({
  currentLocation: currentLocationReducer,
  locations: locationsReducer,
  activeLocation: activeLocationReducer,
});

export default rootReducer;
