export * from './googleMaps';

export const toggleMapView = view => {
  return {
    type: 'TOGGLE_VIEW',
    view
  };
};
