/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CCheckboxGroup from './';

describe('Checkbox group', () => {
    it('The checkbox group is rendered', async () => {
        const wrapper = mount(CCheckboxGroup);

        expect(wrapper.is('div')).toBe(true);
    });
});
