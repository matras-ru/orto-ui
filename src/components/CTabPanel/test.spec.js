/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CTabPanel from './';

// TODO: more tests

describe('CTabPanel', () => {
    it('default empty CTabPanel rendered', () => {
        const wrapper = mount(CTabPanel);
        expect(wrapper.is('section')).toBe(true);
        expect(wrapper.text()).toEqual('');
    });
});
