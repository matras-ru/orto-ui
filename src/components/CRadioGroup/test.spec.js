/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CRadioGroup from './';

describe('Radio group', () => {
    it('The radio group is rendered', async () => {
        const wrapper = mount(CRadioGroup);

        expect(wrapper.is('div')).toBe(true);
    });
});
