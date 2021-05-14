/* eslint-env jest */
import Vue from 'vue';
import { mount, config } from '@vue/test-utils';

import CTabs from './tabs';
import CTab from './tab';

import { CList, CListItem } from '@/components/list';
import { CLink } from '@/components/link';

config.stubs['CList'] = CList;
config.stubs['CListItem'] = CListItem;
config.stubs['CLink'] = CLink;

const baseTabLinkClasses =
    'outline-none select-none inline-block no-underline cursor-pointer font-semibold text-lg uppercase px-1-5 py-0-7';
const activeTabLinkClasses = 'text-secondary-200 border-b-4 border-secondary-200';

describe('CTabs', () => {
    it('default', () => {
        const wrapper = mount(CTabs);

        expect(wrapper.element.tagName).toEqual('UL');
        expect(wrapper.attributes('role')).toBeDefined();
        expect(wrapper.attributes('role')).toBe('tablist');

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('custom props', () => {
        const wrapper = mount(CTabs, {
            context: {
                props: {
                    vertical: true,
                    justify: 'center'
                }
            }
        });

        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.classes()).toContain('flex-col');
        expect(wrapper.classes()).toContain('justify-center');

        wrapper.destroy();
    });

    it('with tabs', () => {
        const wrapper = mount(CTabs, {
            slots: { default: [CTab, CTab, CTab] }
        });

        expect(wrapper).toBeDefined();
        expect(wrapper.findAll('li[role="presentation"]').length).toBe(3);

        wrapper.destroy();
    });

    it('tab link style: default, active', () => {
        const App = Vue.extend({
            data() {
                return {
                    tabsModel: 'tab-2'
                };
            },
            render(h) {
                return h(
                    CTabs,
                    {
                        props: {
                            modelValue: this.tabsModel
                        }
                    },
                    [
                        h(CTab, { props: { name: 'tab-1' }, ref: 'tab-1' }, 'tab 1'),
                        h(CTab, { props: { name: 'tab-2' }, ref: 'tab-2' }, 'tab 2')
                    ]
                );
            }
        });

        const wrapper = mount(App);

        const tab1 = wrapper.findComponent({ ref: 'tab-1' }); // default tab
        const tab2 = wrapper.findComponent({ ref: 'tab-2' }); // active tab

        expect(wrapper).toBeDefined();
        expect(wrapper.findAllComponents(CTab).length).toBe(2);

        expect(tab1.find('a').classes().sort()).toEqual(`${baseTabLinkClasses}`.split(' ').sort());

        expect(tab2.find('a').classes().sort()).toEqual(
            `${baseTabLinkClasses} ${activeTabLinkClasses}`.split(' ').sort()
        );

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('change tab', () => {
        const App = Vue.extend({
            data() {
                return {
                    tabsModel: 'tab-1'
                };
            },

            render(h) {
                return h(
                    CTabs,
                    {
                        props: {
                            modelValue: this.tabsModel // v-model
                        },
                        on: {
                            onChange: val => (this.tabsModel = val) // v-model
                        }
                    },
                    [
                        h(CTab, { props: { name: 'tab-1' }, ref: 'tab-1' }, 'tab 1'),
                        h(CTab, { props: { name: 'tab-2' }, ref: 'tab-2' }, 'tab 2')
                    ]
                );
            }
        });

        const wrapper = mount(App);
        const tab2 = wrapper.findComponent({ ref: 'tab-2' }); // active tab

        expect(wrapper).toBeDefined();

        expect(wrapper.vm.tabsModel).toBe('tab-1');
        tab2.find('a').trigger('click');
        expect(wrapper.vm.tabsModel).toBe('tab-2');

        wrapper.destroy();
    });
});
