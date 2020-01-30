/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import CCheckbox from './checkbox';

describe('Checkbox', () => {
    it('is rendered', () => {
        const wrapper = mount(CCheckbox, {
            context: {
                props: {
                    id: 'checkbox1',
                    name: 'checkbox1',
                    value: 'checkbox1',
                    label: 'default'
                }
            }
        });

        const input = wrapper.find('input');
        const label = wrapper.find('label');
        const icon = wrapper.find('span');

        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('checkbox1');
        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('checkbox');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('checkbox1');

        expect(input.attributes('name')).toBe('checkbox1');

        expect(label.attributes('for')).toBe('checkbox1');
        expect(wrapper.text()).toBe('default');

        expect(wrapper.classes().sort()).toEqual('flex flex-wrap mb-0-7'.split(' ').sort());
        expect(input.classes().sort()).toEqual('absolute opacity-0 invisible'.split(' ').sort());
        expect(label.classes().sort()).toEqual('inline-flex cursor-pointer'.split(' ').sort());
        expect(icon.classes().sort()).toEqual(
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm border-black-200 bg-white'
                .split(' ')
                .sort()
        );
    });

    it('is disabled', () => {
        const wrapper = mount(CCheckbox, {
            context: {
                props: {
                    id: 'checkbox1',
                    name: 'checkbox1',
                    value: 'checkbox1',
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
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm border-tertiary-200 bg-white'
                .split(' ')
                .sort()
        );
    });

    it('is error', () => {
        const wrapper = mount(CCheckbox, {
            context: {
                props: {
                    id: 'checkbox1',
                    name: 'checkbox1',
                    value: 'checkbox1',
                    error: true
                }
            }
        });

        const icon = wrapper.find('span');

        expect(icon.classes().sort()).toEqual(
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm border-danger bg-white'.split(' ').sort()
        );
    });

    it('is checked', () => {
        const wrapper = mount(CCheckbox, {
            context: {
                props: {
                    id: 'checkbox1',
                    name: 'checkbox1',
                    value: 'checkbox1',
                    modelValue: true
                }
            }
        });

        const label = wrapper.find('label');
        const icon = wrapper.find('span');
        expect(label.classes().sort()).toEqual('inline-flex cursor-pointer'.split(' ').sort());
        expect(icon.classes().sort()).toEqual(
            'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm border-black-200 bg-secondary-200 shadow-inner'
                .split(' ')
                .sort()
        );
    });

    it('v-model - single value - true/false', () => {
        const localVue = new createLocalVue();

        const App = localVue.extend({
            data() {
                return {
                    model: false
                };
            },

            render(h) {
                return h(CCheckbox, {
                    props: {
                        id: 'checkbox1',
                        name: 'checkbox1',
                        value: 'checkbox1',
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

        expect(wrapper.vm.model).toBe(false);

        input.setChecked();
        expect(wrapper.vm.model).toBe(true);

        wrapper.destroy();
    });

    it('v-model - multiply values - array', () => {
        const localVue = new createLocalVue();

        const App = localVue.extend({
            data() {
                return {
                    model: []
                };
            },

            render(h) {
                return h(CCheckbox, {
                    props: {
                        id: 'checkbox1',
                        name: 'checkbox1',
                        value: 'checkbox1',
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

        expect(wrapper.vm.model).toEqual([]);

        input.setChecked();
        expect(wrapper.vm.model).toEqual(['checkbox1']);

        wrapper.destroy();
    });
});
