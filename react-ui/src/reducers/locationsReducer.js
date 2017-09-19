import Marker from '../model/Marker';

const locationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEARBY_LOCATIONS':
      return action.data;

    case 'DATABASE_LOCATIONS':
      const newState = [...state].map((place) => {
        const { lat, lng } = place.geometry.location;
        const position = { lat: lat(), lng: lng()}
        let location = {};

        const inTable = !! action.locations.find((databaseLocation) => {
          if (databaseLocation.google_maps_id === place.id) {
            location = databaseLocation;
            return true;
          }
        });

        const marker = new Marker(position, place.id, place.name, inTable, 2)

        return Object.assign({}, place, { marker },{ inTable },{ location })
      })
      return newState;

    default:
      return state;
  }
};

export default locationsReducer;
