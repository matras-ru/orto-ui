/* eslint-env jest */
import { mount } from '@vue/test-utils';

import CTabPanels from './tab-panels';
import CTabPanel from './tab-panel';

describe('CTabPanels', () => {
    it('default', () => {
        const wrapper = mount(CTabPanels);

        expect(wrapper.element.tagName).toEqual('DIV');
    });

    it('with panels', () => {
        const wrapper = mount(CTabPanels, {
            slots: { default: [CTabPanel, CTabPanel] }
        });

        expect(wrapper).toBeDefined();
        expect(wrapper.findAll('section[role="tabpanel"]').length).toBe(2);
    });

    it('panel', () => {
        const wrapper = mount(CTabPanels, {
            slots: { default: [CTabPanel] }
        });

        const panel = wrapper.findAll('section[role="tabpanel"]').at(0);
        expect(wrapper).toBeDefined();

        expect(panel.attributes('role')).toBeDefined;
        expect(panel.attributes('role')).toBe('tabpanel');

        expect(panel.attributes('id')).toBeDefined;
        expect(panel.attributes('aria-labelledby')).toBeDefined;
    });
});
