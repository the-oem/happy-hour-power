import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import { shallow, mount } from 'enzyme';
import createHistory from 'history/createBrowserHistory';
import configureMockStore from 'redux-mock-store';

import Controls from '../../components/Controls';

const history = createHistory()
const mockStore = configureMockStore()({
  center: {
    lat: 40,
    lng: 40,
  },
  currentLocation: {
    name: '', vicinity: 'Address', inTable: false
  },
});

describe('Controls', () => {
  it.skip('should have a button to toggle display', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <ConnectedRouter history={history}>
          <Route to='/' component={Controls}/>
        </ConnectedRouter>
      </Provider>
    );
    console.log(wrapper.debug());

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').hasClass('toggle-btn')).toBe(true);
  });

  it.skip('should have a map/list display area', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('.map-list-view')).toHaveLength(1);
  });
});
