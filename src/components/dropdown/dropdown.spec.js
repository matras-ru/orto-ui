/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import * as vClickOutside from 'v-click-outside-x';
import CDropdown from './dropdown';

describe('Dropdown basic', () => {
    const localVue = new createLocalVue();
    localVue.use(vClickOutside);

    it('is rendered', () => {
        const wrapper = mount(CDropdown, {
            localVue
        });

        expect(wrapper.element.tagName).toEqual('DIV');
        expect(wrapper.classes('relative')).toBe(true);

        wrapper.destroy();
    });

    it('dropdown isShow', () => {
        const wrapper = mount(CDropdown, {
            localVue,
            data() {
                return {
                    isShow: true
                };
            }
        });

        const dropdown = wrapper.findComponent({ ref: 'dropdown' });

        expect(dropdown.element.tagName).toEqual('DIV');
        expect(dropdown.classes().sort()).toEqual(
            'absolute z-50 top-full min-w-full left-0 mt-0-4 bg-white overflow-hidden shadow-example rounded'
                .split(' ')
                .sort()
        );
    });

    it('placement', () => {
        const wrapper = mount(CDropdown, {
            localVue,

            propsData: {
                placement: 'right'
            },

            data() {
                return {
                    isShow: true
                };
            }
        });

        expect(wrapper.vm.placement).toBe('right');
        const dropdown = wrapper.findComponent({ ref: 'dropdown' });

        expect(dropdown.element.tagName).toEqual('DIV');
        expect(dropdown.classes()).not.toContain('left-0');
        expect(dropdown.classes()).toContain('right-0');
    });
});

describe('Dropdown slots', () => {
    const localVue = new createLocalVue();
    localVue.use(vClickOutside);

    it('holder', () => {
        const wrapper = mount(CDropdown, {
            localVue,
            scopedSlots: {
                holder: function () {
                    return this.$createElement('div', 'Click me');
                }
            }
        });

        const holder = wrapper.find('div div');
        expect(holder.element.tagName).toEqual('DIV');

        wrapper.destroy();
    });

    it('holder - toggle', async () => {
        const wrapper = mount(CDropdown, {
            localVue,
            scopedSlots: {
                holder: function ({ toggle }) {
                    return this.$createElement(
                        'div',
                        {
                            on: {
                                click: () => {
                                    toggle();
                                }
                            }
                        },
                        'Click me'
                    );
                }
            }
        });

        const holder = wrapper.find('div div');
        let dropdown;
        expect(wrapper.vm.isShow).toBe(false);
        dropdown = wrapper.findComponent({ ref: 'dropdown' });
        expect(dropdown.exists()).toBe(false);

        holder.trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.isShow).toBe(true);
        dropdown = wrapper.findComponent({ ref: 'dropdown' });
        expect(dropdown.exists()).toBe(true);
        holder.trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.isShow).toBe(false);
        expect(wrapper.vm.$refs.dropdown).toEqual(undefined);

        wrapper.destroy();
    });

    it('dropdown - toggle', async () => {
        const wrapper = mount(CDropdown, {
            localVue,
            data() {
                return {
                    isShow: true
                };
            },
            scopedSlots: {
                dropdown: function ({ toggle }) {
                    return this.$createElement(
                        'div',
                        {
                            attrs: {
                                id: 'innerContent'
                            },
                            on: {
                                click: () => {
                                    toggle();
                                }
                            }
                        },
                        'Click me'
                    );
                }
            }
        });

        const innerContent = wrapper.find('#innerContent');

        expect(wrapper.vm.isShow).toBe(true);

        innerContent.trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.isShow).toBe(false);

        wrapper.destroy();
    });
});
