const locationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEARBY_LOCATIONS':
      return action.data.map(place => {
        const { geometry: { location }, place_id } = place;

        return Object.assign({}, place, {
          marker: {
            position: {
              lat: location.lat(),
              lng: location.lng(),
            },
            defaultAnimation: 2,
            key: place_id,
          }
        })
      });

    default:
      return state;
  }
};

export default locationsReducer;
