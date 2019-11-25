/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CRadioGroup from './radio-group';

describe('Radio group', () => {
    it('The radio group is rendered', () => {
        const wrapper = mount(CRadioGroup);

        expect(wrapper.is('div')).toBe(true);
    });
});
