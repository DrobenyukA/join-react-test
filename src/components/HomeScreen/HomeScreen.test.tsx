import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

import HomeScreen from './HomeScreen';

describe('<HomeScreen />', () => {
    let wrapper: ShallowWrapper;

    beforeAll(() => {
        wrapper = shallow(<HomeScreen />);
    });

    it('Should have correct layout', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
