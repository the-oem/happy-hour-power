import detailsPageReducer from '../../reducers/detailsPageReducer';

import stubDBLocations from '../stubData/stubDBLocations';
import stubDBHappyHours from '../stubData/stubDBHappyHours';

describe('detailsPageReducer', () => {
  it('should return a default state', () => {
    expect(detailsPageReducer(undefined, {})).toEqual({});
  });

  it.only('should update the state with happy hours and locations', () => {
    const locations = stubDBLocations;
    const happyhours = stubDBHappyHours;

    expect(
      detailsPageReducer(Object.assign(locations, happyhours), 'UPDATE_DETAIL')
    );
  });
});
