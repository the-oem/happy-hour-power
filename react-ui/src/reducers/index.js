import { combineReducers } from 'redux';
import currentLocationReducer from './currentLocationReducer';
import locationsReducer from './locationsReducer';
import activeLocationReducer from './activeLocationReducer';
import mapCenterReducer from './mapCenterReducer';
import detailsPageReducer from './detailsPageReducer';
import newLocationReducer from './newLocationReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  token: authReducer,
  currentLocation: currentLocationReducer,
  locations: locationsReducer,
  activeLocation: activeLocationReducer,
  center: mapCenterReducer,
  details: detailsPageReducer,
  newLocation: newLocationReducer
});

export default rootReducer;
