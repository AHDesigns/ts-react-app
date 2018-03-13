import * as React from 'react';
import * as enzyme from 'enzyme';
import App from './App';

it('renders the correct text when no enthusiasm level is given', () => {
        const hello = enzyme.shallow(<App name="Daniel" />);
        expect(hello.find('.App-title').text()).toEqual('Daniel');
});
