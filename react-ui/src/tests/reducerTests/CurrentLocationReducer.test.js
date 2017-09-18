import currentLocationReducer from '../../reducers/currentLocationReducer';

describe('currentLocationReducer', () => {
  it('should return a default state', () => {
    expect(currentLocationReducer(undefined, {})).toEqual({});
  });
});
