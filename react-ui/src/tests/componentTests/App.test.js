import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '../../components/App';

describe('App', () => {

  it('should render', () => {
    const mockedStore = configureMockStore({})
    const wrapper = shallow(<Provider store={mockedStore}><App /></Provider>)
  })

  it('should render a header', () => {
      const wrapper = shallow(<App />)

      expect(wrapper.find('header')).toHaveLength(1)
    })

  it('should render page title that says "Happy Hour Power"', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').text()).toEqual('Happy Hour Power')
  });
})
