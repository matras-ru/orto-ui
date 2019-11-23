/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import CRadio from './radio';

describe('Radio', () => {
    it('is rendered', () => {
        const wrapper = mount(CRadio, {
            context: {
                props: {
                    id: 'radio1',
                    name: 'radio1',
                    value: 'radio1',
                    label: 'default'
                }
            }
        });

        const input = wrapper.find('input');
        const label = wrapper.find('label');
        const icon = wrapper.find('span');

        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('radio1');
        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('radio');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('radio1');

        expect(input.attributes('name')).toBe('radio1');

        expect(label.attributes('for')).toBe('radio1');
        expect(wrapper.text()).toBe('default');

        expect(wrapper.classes().sort()).toEqual('flex flex-wrap mb-0-7'.split(' ').sort());
        expect(input.classes().sort()).toEqual('absolute opacity-0 invisible'.split(' ').sort());
        expect(label.classes().sort()).toEqual('inline-flex cursor-pointer'.split(' ').sort());
        expect(icon.classes().sort()).toEqual(
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-full border-black-200 bg-white'
                .split(' ')
                .sort()
        );
    });

    it('is disabled', () => {
        const wrapper = mount(CRadio, {
            context: {
                props: {
                    id: 'radio1',
                    name: 'radio1',
                    value: 'radio1',
                    disabled: true
                }
            }
        });

        const input = wrapper.find('input');
        const label = wrapper.find('label');
        const icon = wrapper.find('span');

        expect(input.attributes('disabled')).toBeDefined();
        expect(input.attributes('disabled')).toBe('disabled');

        expect(label.classes().sort()).toEqual('inline-flex cursor-not-allowed'.split(' ').sort());
        expect(icon.classes().sort()).toEqual(
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-full border-tertiary-200 bg-white'
                .split(' ')
                .sort()
        );
    });

    it('is error', () => {
        const wrapper = mount(CRadio, {
            context: {
                props: {
                    id: 'radio1',
                    name: 'radio1',
                    value: 'radio1',
                    error: true
                }
            }
        });

        const icon = wrapper.find('span');

        expect(icon.classes().sort()).toEqual(
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-full border-danger bg-white'
                .split(' ')
                .sort()
        );
    });

    it('is checked', () => {
        const wrapper = mount(CRadio, {
            context: {
                props: {
                    id: 'radio1',
                    name: 'radio1',
                    value: 'radio1',
                    modelValue: 'radio1'
                }
            }
        });

        const label = wrapper.find('label');
        const icon = wrapper.find('span');
        expect(label.classes().sort()).toEqual('inline-flex cursor-pointer'.split(' ').sort());
        expect(icon.classes().sort()).toEqual(
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-full border-black-200 bg-secondary-200 shadow-inner'
                .split(' ')
                .sort()
        );
    });

    it('v-model', () => {
        const localVue = new createLocalVue();

        const App = localVue.extend({
            data() {
                return {
                    model: null
                };
            },

            render(h) {
                return h(CRadio, {
                    props: {
                        id: 'radio1',
                        name: 'radio1',
                        value: 'radio1',
                        modelValue: this.model
                    },
                    on: {
                        change: val => {
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

        expect(wrapper.vm.model).toEqual(null);

        input.element.selected = true;
        input.trigger('click');

        expect(wrapper.vm.model).toEqual('radio1');

        wrapper.destroy();
    });
});
