/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CButton from './';

describe('Button', () => {
    it('The button is rendered', () => {
        const wrapper = mount(CButton);

        expect(wrapper.is('button')).toBe(true);
    });

    it('The button is disabled', () => {
        const wrapper = mount(CButton, {
            propsData: { disabled: true }
        });

        expect(wrapper.attributes('disabled')).toBeDefined();
    });
});
