/* eslint-env jest */
import { mount, config } from '@vue/test-utils';

import CTab from './tab';
import { CListItem } from '@/components/list';

config.stubs['CListItem'] = CListItem;

describe('CTab', () => {
    it('default empty CTab rendered', () => {
        const wrapper = mount(CTab);

        expect(wrapper.is('li')).toBe(true);
        expect(wrapper.text()).toEqual('');
    });
});
