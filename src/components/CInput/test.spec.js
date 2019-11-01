/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CInput from './';

describe('Input', () => {
    it('The input is rendered', async () => {
        const wrapper = mount(CInput, {
            propsData: {
                type: 'text',
                id: 'foo',
                name: 'foo'
            }
        });
        const input = wrapper.find('input');

        expect(wrapper.is('div')).toBe(true);
        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('text');
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('foo');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('foo');
    });

    it('The textarea is rendered', async () => {
        const wrapper = mount(CInput, {
            propsData: {
                id: 'foo',
                name: 'foo'
            }
        });
        const textarea = wrapper.find('textarea');

        expect(wrapper.is('div')).toBe(true);
        expect(textarea.attributes('type')).not.toBeDefined();
        expect(textarea.attributes('id')).toBeDefined();
        expect(textarea.attributes('id')).toBe('foo');
        expect(textarea.attributes('name')).toBeDefined();
        expect(textarea.attributes('name')).toBe('foo');
    });

    it('Emits an input event', async () => {
        const wrapper = mount(CInput, {
            propsData: {
                type: 'text',
                id: 'foo',
                name: 'foo'
            }
        });
        const input = wrapper.find('input');

        input.element.value = 'test';
        input.trigger('input');

        expect(wrapper.emitted('input')).toBeDefined();
        expect(wrapper.emitted().input.length).toEqual(1);
        expect(wrapper.emitted().input[0][0]).toEqual('test');

        wrapper.destroy();
    });

    it('Emits a native focus event', async () => {
        const spy = jest.fn();
        const wrapper = mount(CInput, {
            propsData: {
                type: 'text',
                id: 'foo',
                name: 'foo'
            },
            listeners: {
                focus: spy
            }
        });
        const input = wrapper.find('input');
        input.trigger('focus');

        expect(wrapper.emitted()).toMatchObject({});
        expect(spy).toHaveBeenCalled();

        wrapper.destroy();
    });
});
