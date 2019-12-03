/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CRadio from './radio';

describe('Radio', () => {
    let wrapper;
    let input;

    beforeEach(() => {
        wrapper = mount(CRadio);
        input = wrapper.find('input');
    });

    afterEach(() => {
        input = null;
        wrapper.destroy();
    });

    it('The radio is rendered', () => {
        wrapper.setProps({
            id: 'radio1',
            name: 'radio1'
        });
        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('radio1');
        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('radio');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('radio1');
    });

    it('The radio is disabled', () => {
        wrapper.setProps({
            disabled: true
        });

        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('disabled')).toBeDefined();
        expect(input.attributes('disabled')).toBe('disabled');
    });

    it('The radio is checked (string)', () => {
        wrapper.setProps({
            modelValue: 'radio1',
            value: 'radio1'
        });

        expect(wrapper.vm.shouldBeChecked).toBe(true);
    });

    it('The radio $emit @change (string)', () => {
        wrapper.setProps({
            modelValue: 'radio1',
            value: 'radio1'
        });

        input.setChecked(true);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change[0][0]).toEqual('radio1');
    });

    it('The radio $emit @change (number)', () => {
        wrapper.setProps({
            modelValue: 123,
            value: 123
        });

        input.setChecked(true);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change[0][0]).toEqual(123);
    });

    it('The radio $emit @change (boolean)', () => {
        wrapper.setProps({
            modelValue: true,
            value: true
        });

        input.setChecked(true);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change[0][0]).toEqual(true);
    });
});
