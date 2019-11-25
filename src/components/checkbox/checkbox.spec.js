/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CCheckbox from './checkbox';

describe('Checkbox', () => {
    let wrapper;
    let input;

    beforeEach(() => {
        wrapper = mount(CCheckbox);
        input = wrapper.find('input');
    });

    afterEach(() => {
        input = null;
        wrapper.destroy();
    });

    it('The checkbox is rendered', () => {
        wrapper.setProps({
            id: 'checkbox1',
            name: 'checkbox1'
        });

        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('checkbox1');
        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('checkbox');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('checkbox1');
    });

    it('The checkbox is disabled', () => {
        wrapper.setProps({
            disabled: true
        });

        expect(wrapper.is('label')).toBe(true);
        expect(input.attributes('disabled')).toBeDefined();
        expect(input.attributes('disabled')).toBe('disabled');
    });

    it('The checkbox is checked - single value - default trueValue', () => {
        wrapper.setProps({
            modelValue: true,
            value: 'checkbox1'
        });

        expect(wrapper.vm.shouldBeChecked).toBe(true);
    });

    it('The checkbox is checked - single value - custom trueValue', () => {
        wrapper.setProps({
            modelValue: 'yes',
            trueValue: 'yes',
            falseValue: 'no',
            value: 'yes'
        });

        expect(wrapper.vm.shouldBeChecked).toBe(true);
    });

    it('The checkbox is checked - multiply values', () => {
        wrapper.setProps({
            modelValue: ['checkbox1', 'checkbox2', 'checkbox3'],
            value: 'checkbox2'
        });

        expect(wrapper.vm.shouldBeChecked).toBe(true);
    });

    it('The checkbox $emit @change (true / false)', () => {
        wrapper.setProps({
            modelValue: false,
            value: 'checkbox1'
        });

        input.setChecked(true);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(
            wrapper.emitted().change[0][0] // change [[true]]
        ).toBe(true);
    });

    it('The checkbox $emit @change (empty array)', () => {
        wrapper.setProps({
            modelValue: [],
            value: 'checkbox1'
        });

        input.setChecked(true);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(
            wrapper.emitted().change[0][0] // change [[]]
        ).toEqual(['checkbox1']);
    });

    it('The checkbox $emit @change (not empty array)', () => {
        wrapper.setProps({
            modelValue: ['checkbox2', 'checkbox3'],
            value: 'checkbox1'
        });

        input.setChecked(true);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change[0][0]).toEqual(['checkbox2', 'checkbox3', 'checkbox1']);
    });
});
