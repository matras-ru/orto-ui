/* eslint-env jest */
import Vue from 'vue';
import { mount, config } from '@vue/test-utils';

import CTabPanels from './tab-panels';
import CTabPanel from './tab-panel';

describe('CTabPanels', () => {
    it('default', () => {
        const wrapper = mount(CTabPanels);

        expect(wrapper.is('div')).toBe(true);
    });

    it('with panels', () => {
        const wrapper = mount(CTabPanels, {
            slots: { default: [CTabPanel, CTabPanel] }
        });

        expect(wrapper).toBeDefined();
        expect(wrapper.findAll(CTabPanel).length).toBe(2);
    });

    it('panel', () => {
        const wrapper = mount(CTabPanels, {
            slots: { default: [CTabPanel] }
        });

        const panel = wrapper.find(CTabPanel);
        expect(wrapper).toBeDefined();

        expect(panel.attributes('role')).toBeDefined;
        expect(panel.attributes('role')).toBe('tabpanel');

        expect(panel.attributes('id')).toBeDefined;
        expect(panel.attributes('aria-labelledby')).toBeDefined;

        expect(panel.attributes('tabindex')).toBeDefined;
        expect(panel.attributes('tabindex')).toBe('-1');
    });

    // it('active tab panel', () => {
    //     const App = Vue.extend({
    //         data() {
    //             return {
    //                 tabsModel: 'tab-1'
    //             };
    //         },
    //         render(h) {
    //             return h(
    //                 CTabPanels,
    //                 {
    //                     props: {
    //                         modelValue: this.tabsModel
    //                     }
    //                 },
    //                 [
    //                     h(
    //                         CTabPanel,
    //                         { props: { name: 'tab-1' }, ref: 'tab-panel-1' },
    //                         'tab panel 1'
    //                     ),
    //                     h(
    //                         CTabPanel,
    //                         { props: { name: 'tab-2' }, ref: 'tab-panel-2' },
    //                         'tab panel 2'
    //                     )
    //                 ]
    //             );
    //         }
    //     });

    //     const wrapper = mount(App);

    //     const tabPanel1 = wrapper.find({ ref: 'tab-panel-1' }); // default tab panel
    //     const tabPanel2 = wrapper.find({ ref: 'tab-panel-2' }); // active tab panel

    //     wrapper.destroy();
    // });
});
