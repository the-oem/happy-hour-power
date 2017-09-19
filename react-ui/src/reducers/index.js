import { combineReducers } from 'redux';
import currentLocationReducer from './currentLocationReducer';
import locationsReducer from './locationsReducer';
import activeLocationReducer from './activeLocationReducer';
import mapCenterReducer from './mapCenterReducer';
import detailsPageReducer from './detailsPageReducer';

const rootReducer = combineReducers({
  currentLocation: currentLocationReducer,
  locations: locationsReducer,
  activeLocation: activeLocationReducer,
  center: mapCenterReducer,
  details: detailsPageReducer
});

export default rootReducer;
