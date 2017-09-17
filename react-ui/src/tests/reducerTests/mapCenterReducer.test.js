import mapCenterReducer from '../../reducers/mapCenterReducer';

describe('mapCenterReducer', () => {
  it('should return a default state', () => {
    expect(mapCenterReducer(undefined, {})).toEqual({});
  });
});
