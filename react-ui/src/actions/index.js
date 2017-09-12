export * from './googleMaps';

export const renderMap = map => {
  return {
    type: 'RENDER_MAP',
    map
  };
};
