import React from 'react';
import { shallow } from 'enzyme';

import MyMessage from '../../../components/MyMessage';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);

    expect(renderedComponent.find(MyMessage)).toBeDefined();
  });

  it('should pass a message prop MyMessage', () => {
    const renderedComponent = shallow(<HomePage />);

    expect(renderedComponent.find(MyMessage).props().message).toBeDefined();
  });

  it('should pass an object with expected keys', () => {
    const renderedComponent = shallow(<HomePage />);
    const expectedKeys = ['name'];

    const variables = renderedComponent.find(MyMessage).props().variables;
    expect(Object.keys(variables)).toEqual(expect.arrayContaining(expectedKeys));
  });
});
