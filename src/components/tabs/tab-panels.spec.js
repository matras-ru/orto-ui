/* eslint-env jest */
import { mount } from '@vue/test-utils';

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
    });
});
