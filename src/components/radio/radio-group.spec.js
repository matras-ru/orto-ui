/* eslint-env jest */
import { mount, config, createLocalVue } from '@vue/test-utils';

import CRadioGroup from './radio-group';
import CRadio from './radio';

config.stubs['CRadio'] = CRadio;

describe('Radio group', () => {
    it('is rendered & not empty', () => {
        const wrapper = mount(CRadioGroup, {
            context: {
                props: {
                    modelValue: null,
                    data: [
                        {
                            id: 'radio1',
                            label: 'radio1',
                            name: 'radio1',
                            value: 'radio1'
                        },
                        {
                            id: 'radio2',
                            label: 'radio2',
                            name: 'radio2',
                            value: 'radio2'
                        }
                    ]
                }
            }
        });

        expect(wrapper.findAll('input[type="radio"]').length).toBe(2);
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
                return h(CRadioGroup, {
                    props: {
                        data: [
                            {
                                id: 'radio1',
                                label: 'radio1',
                                name: 'radio1',
                                value: 'radio1'
                            },
                            {
                                id: 'radio2',
                                label: 'radio2',
                                name: 'radio2',
                                value: 'radio2'
                            }
                        ],
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

        const input = wrapper.find('input[type="radio"]');

        expect(wrapper.vm.model).toEqual(null);

        input.element.selected = true;
        input.trigger('click');

        expect(wrapper.vm.model).toEqual('radio1');

        wrapper.destroy();
    });
});
