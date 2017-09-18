import locationsReducer from '../../reducers/locationsReducer';
import stubDBLocations from '../stubData/stubDBLocations';

describe('locationsReducer', () => {
  it('should return a default state', () => {
    expect(locationsReducer(undefined, {})).toEqual([]);
  });

  it('should update the state with database locations', () => {
    const databaseLocations = stubDBLocations;

    expect(locationsReducer(databaseLocations, 'DATABASE_LOCATIONS')).toEqual(
      databaseLocations
    );
  });
});
