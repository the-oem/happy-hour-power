import Marker from '../model/Marker';

const locationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEARBY_LOCATIONS':
      return action.data;

    case 'DATABASE_LOCATIONS':
      const newState = [...state].map((place) => {
        const { geometry: { location }, id } = place;
        const position = {
          lat: location.lat(),
          lng: location.lng(),
        }
        const inTable = !! action.locations.find((loc) => {
          return loc.google_maps_id === id;
        })

        return Object.assign({}, place, {
          marker: new Marker(position, id, place.name, inTable, 2)
        }, { inTable })
      })


      return newState;

    default:
      return state;
  }
};

export default locationsReducer;
