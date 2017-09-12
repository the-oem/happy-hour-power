const locationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEARBY_LOCATIONS':
      return action.data.map(place => {
        const { geometry: { location } } = place;

        return {
          position: {
            lat: location.lat(),
            lng: location.lng(),
          },
          defaultAnimation: 2,
        }
      });

    default:
      return state;
  }
};

export default locationsReducer;
