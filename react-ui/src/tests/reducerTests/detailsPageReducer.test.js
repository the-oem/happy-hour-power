import detailsPageReducer from '../../reducers/detailsPageReducer';

import stubDBLocations from '../stubData/stubDBLocations';
import stubDBHappyHours from '../stubData/stubDBHappyHours';

describe('detailsPageReducer', () => {
  it('should return a default state', () => {
    expect(detailsPageReducer(undefined, {})).toEqual([]);
  });

  it('should update the state with happy hours and locations', () => {
    const location = [
      [],
      {
        created_at: '2017-09-19T22:18:42.131Z',
        google_maps_id: '602c42e453cf6eb524c5f0dfaaeaeac49f42e5ff',
        id: 6,
        latitude: 39.7478,
        location_type_id: 3,
        longitude: -104.993,
        name: 'Panzano',
        phone_number: '',
        updated_at: '2017-09-19T22:18:42.131Z',
        website_url: ''
      }
    ];

    const action = {
      type: 'UPDATE_DETAIL',
      location: location
    };
    const happyhours = stubDBHappyHours;

    expect(detailsPageReducer(happyhours, action)).toEqual({
      happyhours: undefined,
      location
    });
  });
});
