/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CTab from './';

// TODO: more tests

describe('CTab', () => {
    it('default empty CTab rendered', () => {
        const wrapper = mount(CTab);
        expect(wrapper.is('li')).toBe(true);
        expect(wrapper.text()).toEqual('');
    });
});
