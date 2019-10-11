/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CIcon from './';

describe('Icon', () => {
    it('The icon is rendered', () => {
        const wrapper = mount(CIcon);

        expect(wrapper.is('svg')).toBe(true);
    });
});
