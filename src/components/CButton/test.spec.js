/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CButton from './';

describe('Button', () => {
    it('it renders the button (Кнопка срендерилась)', () => {
        const wrapper = mount(CButton);

        expect(wrapper.is('button')).toBe(true);
    });

    it('disables the button (Кнопка не активна)', () => {
        const wrapper = mount(CButton, {
            propsData: { disabled: true }
        });

        expect(wrapper.attributes('disabled')).toBeDefined();
    });
});
