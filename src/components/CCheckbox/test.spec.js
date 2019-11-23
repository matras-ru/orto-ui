/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CCheckbox from './';

describe('Checkbox', () => {
    it('The checkbox is rendered', async () => {
        const wrapper = mount(CCheckbox, {
            propsData: {
                id: 'checkbox1',
                label: 'Checkbox1',
                name: 'checkbox1'
            }
        });
        const input = wrapper.find('input');

        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('checkbox1');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('checkbox1');
        expect(input.attributes('label')).toBeDefined();
        expect(input.attributes('label')).toBe('Checkbox1');
    });

    it('The checkbox is disabled', async () => {
        const wrapper = mount(CCheckbox, {
            propsData: {
                id: 'checkbox1',
                label: 'Checkbox1',
                name: 'checkbox1',
                disabled: 'disabled'
            }
        });
        const input = wrapper.find('input');

        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('checkbox1');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('checkbox1');
        expect(input.attributes('label')).toBeDefined();
        expect(input.attributes('label')).toBe('Checkbox1');
        expect(input.attributes('disabled')).toBeDefined();
        expect(input.attributes('disabled')).toBe('disabled');
    });
});
