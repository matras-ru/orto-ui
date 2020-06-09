/* eslint-env jest */
import { mount, config, createLocalVue } from '@vue/test-utils';

import CCheckboxGroup from './checkbox-group';
import CCheckbox from './checkbox';

config.stubs['CCheckbox'] = CCheckbox;

describe('Checkbox group', () => {
    it('is rendered & not empty', () => {
        const wrapper = mount(CCheckboxGroup, {
            context: {
                props: {
                    modelValue: [],
                    data: [
                        {
                            id: 'chkb1',
                            label: 'chkb1',
                            name: 'chkb1',
                            value: 'chkb1'
                        },
                        {
                            id: 'chkb2',
                            label: 'chkb2',
                            name: 'chkb2',
                            value: 'chkb2'
                        }
                    ]
                }
            }
        });

        expect(wrapper.findAll('input[type="checkbox"]').length).toBe(2);
    });

    it('v-model', () => {
        const localVue = new createLocalVue();

        const App = localVue.extend({
            data() {
                return {
                    model: []
                };
            },

            render(h) {
                return h(CCheckboxGroup, {
                    props: {
                        data: [
                            {
                                id: 'chkb1',
                                label: 'chkb1',
                                name: 'chkb1',
                                value: 'chkb1'
                            },
                            {
                                id: 'chkb2',
                                label: 'chkb2',
                                name: 'chkb2',
                                value: 'chkb2'
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

        const input = wrapper.find('input[type="checkbox"]');

        expect(wrapper.vm.model).toEqual([]);
        input.setChecked();
        expect(wrapper.vm.model).toEqual(['chkb1']);

        wrapper.destroy();
    });
});
