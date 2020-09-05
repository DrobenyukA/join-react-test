import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('<App />', () => {
    let wrapper: ShallowWrapper;

    beforeAll(() => {
        wrapper = shallow(<App />);
    });

    it('Should have correct layout', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
