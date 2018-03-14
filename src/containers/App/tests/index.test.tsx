import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import App from '../index';
import HomePage from '../../HomePage';

describe('App', () => {
        let wrapper: ShallowWrapper<undefined, undefined>;
        let props = { name: 'Daniel' };
        beforeAll(() => {
                wrapper = shallow(<App {...props} />);
        });
        test('renders the app', () => {
                expect(wrapper.find('.App')).toBeDefined();
        });
        test('renders the correct name', () => {
                expect(wrapper.find('.App-title').text()).toEqual('Daniel');
        });
        test('renders the HomePage', () => {
                expect(wrapper.find(HomePage)).toBeDefined();
        });
});
