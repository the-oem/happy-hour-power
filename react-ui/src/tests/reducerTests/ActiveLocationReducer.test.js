import activeLocationReducer from '../../reducers/activeLocationReducer';

describe('activeLocationReducer', () => {
  it('should return a default state', () => {
    expect(activeLocationReducer(undefined, {})).toEqual({});
  });
});
