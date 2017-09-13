export * from './googleMaps';
export * from './locations';
export * from './markers';

export const toggleMapView = view => {
  return {
    type: 'TOGGLE_VIEW',
    view
  };
};
