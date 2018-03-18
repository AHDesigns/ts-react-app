import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { Icolumn } from '../../../containers/App';
import { Iticket } from '../../../containers/App';

import Column from '../index';
import Ticket from '../index';

let wrapper: ShallowWrapper<undefined, undefined>;

function commonTests() {
  test('renders a column', () => {
    expect(wrapper.find(Column)).toBeDefined();
  });

  test('renders details', () => {
    expect(wrapper.find('.qa-details').text()).toBe('dave');
  });
}

describe('Column', () => {
  let tickets: Iticket[];

  let defaultProps: Icolumn = {
    details: { name: 'dave' },
    tickets
  };

  describe('when there are no tickets', () => {
    beforeAll(() => {
      const props = {
        ...defaultProps,
        tickets: []
      };
      wrapper = shallow(<Column {...props} />);
    });

    commonTests();

    test('it renders no tickets', () => {
      expect(wrapper.find('.qa-tickets').children()).toHaveLength(0);
    });
  });

  describe('when there are tickets', () => {
    beforeAll(() => {
      const props = {
        ...defaultProps,
        tickets: [
          { name: 'dave', body: 'dave' },
          { name: 'dave', body: 'dave' }
        ]
      };
      wrapper = shallow(<Column {...props} />);
    });

    commonTests();

    test('it renders the tickets', () => {
      expect(wrapper.find('.qa-tickets').children()).toHaveLength(2);
    });
  });
});