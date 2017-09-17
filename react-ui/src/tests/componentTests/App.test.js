import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../../components/App';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('App', () => {
  it('should render', () => {
    const mockedStore = mockStore({});
    const wrapper = shallow(
      <Provider store={mockedStore}>
        <App />
      </Provider>
    );
  });

  it('should render App with className "app"', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('should render a header', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('should render page title that says "Happy Hour Power"', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1').text()).toEqual('Happy Hour Power');
  });

  it('should render main element that includes ControlsContainer', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.main-content')).toHaveLength(1);
    expect(wrapper.find('.controls')).toHaveLength(1);
  });

  it('should render a footer', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('footer')).toHaveLength(1);
  });
});
