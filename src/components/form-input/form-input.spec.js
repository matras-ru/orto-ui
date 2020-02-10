/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import CFormInput from './form-input';

describe('Input basic', () => {
    it('is rendered', () => {
        const wrapper = mount(CFormInput, {
            propsData: {
                type: 'text',
                id: 'foo',
                name: 'foo'
            }
        });

        const input = wrapper.find('input');

        expect(wrapper.is('label')).toBe(true);
        expect(input.is('input')).toBe(true);
        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('text');
        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('foo');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('foo');

        wrapper.destroy();
    });
});

describe('Input types', () => {
    it('textarea', () => {
        const wrapper = mount(CFormInput, {
            propsData: {
                type: 'textarea',
                id: 'foo',
                name: 'foo'
            }
        });
        const textarea = wrapper.find('textarea');

        expect(wrapper.is('label')).toBe(true);
        expect(textarea.is('textarea')).toBe(true);
        expect(textarea.attributes('type')).not.toBeDefined();
        expect(textarea.attributes('id')).toBeDefined();
        expect(textarea.attributes('id')).toBe('foo');
        expect(textarea.attributes('name')).toBeDefined();
        expect(textarea.attributes('name')).toBe('foo');

        wrapper.destroy();
    });

    it('number', () => {
        const wrapper = mount(CFormInput, {
            propsData: {
                type: 'number',
                id: 'foo',
                name: 'foo'
            }
        });

        const input = wrapper.find('input');

        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('number');

        wrapper.destroy();
    });

    it('number min/max', () => {
        const wrapper = mount(CFormInput, {
            propsData: {
                type: 'number',
                id: 'foo',
                name: 'foo',
                min: 0,
                max: 100
            }
        });

        const input = wrapper.find('input');

        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('number');
        expect(input.attributes('min')).toBeDefined();
        expect(input.attributes('min')).toBe('0');
        expect(input.attributes('max')).toBeDefined();
        expect(input.attributes('max')).toBe('100');

        wrapper.destroy();
    });
});

describe('Input states', () => {
    let wrapper;
    let innerWrapper;
    let input;
    let label;

    beforeEach(() => {
        wrapper = mount(CFormInput);
        input = wrapper.find('input');
        innerWrapper = wrapper.find('div');
        label = innerWrapper.find('div div div');
    });

    afterEach(() => {
        input = null;
        innerWrapper = null;
        label = null;
        wrapper.destroy();
    });

    it('empty', () => {
        expect(innerWrapper.classes('border-black-200')).toBe(true);
        expect(label.classes()).not.toContain('transform');
        expect(label.classes()).not.toContain('-translate-y-full');
        expect(label.classes()).not.toContain('scale-75');
    });

    it('not empty', async () => {
        wrapper.setProps({ modelValue: 'foo' });
        await wrapper.vm.$nextTick();

        expect(innerWrapper.classes('border-black-200')).toBe(true);
        expect(label.classes()).toContain('transform');
        expect(label.classes()).toContain('-translate-y-full');
        expect(label.classes()).toContain('scale-75');
    });

    it('error', async () => {
        wrapper.setProps({ error: true });
        await wrapper.vm.$nextTick();

        expect(innerWrapper.classes('border-danger')).toBe(true);
        expect(label.classes('text-danger')).toBe(true);
    });

    it('focus', async () => {
        input.trigger('focus');

        await wrapper.vm.$nextTick();

        expect(innerWrapper.classes('border-primary-100')).toBe(true);
        expect(label.classes()).toContain('transform');
        expect(label.classes()).toContain('-translate-y-full');
        expect(label.classes()).toContain('scale-75');
    });
});

describe('Input events', () => {
    it('emits an input event', () => {
        const wrapper = mount(CFormInput, {
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

    //

    it('v-model', () => {
        const localVue = new createLocalVue();

        const App = localVue.extend({
            data() {
                return {
                    model: ''
                };
            },

            render(h) {
                return h(CFormInput, {
                    props: {
                        type: 'text',
                        id: 'foo',
                        name: 'foo',
                        modelValue: this.model
                    },
                    on: {
                        input: val => {
                            this.model = val;
                        }
                    }
                });
            }
        });

        const wrapper = mount(App, {
            localVue: localVue
        });

        const input = wrapper.find('input');

        expect(wrapper.vm.model).toEqual('');
        input.setValue('test');
        expect(wrapper.vm.model).toEqual('test');

        wrapper.destroy();
    });
});
