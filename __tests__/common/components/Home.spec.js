import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../../src/js/common/components/Home/Home';

describe('ExampleView', () => {
    it('should render a blank div without data', () => {
        const el = shallow(<Home />);

        expect(el.length)
            .toEqual(1);
    });
});
