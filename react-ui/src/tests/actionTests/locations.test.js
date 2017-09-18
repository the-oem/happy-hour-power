import * as actions from '../../actions';
import stubDBLocations from '../stubData/stubDBLocations';
import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

describe('locations actions', () => {
  it('should create an action to find database locations', () => {
    const locations = stubDBLocations;
    const expectedAction = {
      type: 'DATABASE_LOCATIONS',
      locations
    };
    expect(actions.databaseLocations(locations)).toEqual(expectedAction);
  });
});
