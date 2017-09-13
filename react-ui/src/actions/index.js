export * from './googleMaps';
export * from './locations';

export const toggleMapView = view => {
  return {
    type: 'TOGGLE_VIEW',
    view
  };
};
