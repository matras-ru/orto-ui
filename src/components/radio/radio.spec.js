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

        expect(input.attributes('id')).toBeDefined();
        expect(input.attributes('id')).toBe('radio1');
        expect(input.attributes('type')).toBeDefined();
        expect(input.attributes('type')).toBe('radio');
        expect(input.attributes('name')).toBeDefined();
        expect(input.attributes('name')).toBe('radio1');

        expect(input.attributes('name')).toBe('radio1');

        expect(label.attributes('for')).toBe('radio1');
        expect(wrapper.text()).toBe('default');

        expect(wrapper.classes().sort()).toEqual('flex flex-wrap mb-0-4'.split(' ').sort());
        expect(input.classes().sort()).toEqual(
            'form-radio absolute top-0-2 left-0 w-0-8 h-0-8'.split(' ').sort()
        );
        expect(label.classes().sort()).toEqual('relative pl-1-4 cursor-pointer'.split(' ').sort());

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
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

        expect(input.attributes('disabled')).toBeDefined();
        expect(input.attributes('disabled')).toBe('disabled');
        expect(label.classes()).toContain('cursor-not-allowed');
        expect(label.classes()).toContain('opacity-50');

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
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

        const input = wrapper.find('input');
        expect(input.classes()).toContain('form-radio-is-error');
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
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
