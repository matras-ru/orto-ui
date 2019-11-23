/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CRadio from './';
import CCheckbox from '../CCheckbox/index';

describe('Radio', () => {
    it('The radio is rendered', async () => {
        const wrapper = mount(CRadio, {
            propsData: {
                id: 'radio1',
                label: 'Radio1',
                name: 'radio1'
            }
        });
        const input = wrapper.find('input');

        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('radio1');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('radio1');
        expect(input.attributes('label')).toBeDefined();
        expect(input.attributes('label')).toBe('Radio1');
    });

    it('The radio is disabled', async () => {
        const wrapper = mount(CCheckbox, {
            propsData: {
                id: 'radio1',
                label: 'Radio1',
                name: 'radio1',
                disabled: 'disabled'
            }
        });
        const input = wrapper.find('input');

        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('radio1');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('radio1');
        expect(input.attributes('label')).toBeDefined();
        expect(input.attributes('label')).toBe('Radio1');
        expect(input.attributes('disabled')).toBeDefined();
        expect(input.attributes('disabled')).toBe('disabled');
    });
});
