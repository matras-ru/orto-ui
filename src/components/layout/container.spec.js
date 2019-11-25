/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CContainer from './container';

const BASE_CLASS = ['container', 'px-8'];

describe('CContainer', () => {
    it('default empty CContainer is the functional component and rendered', () => {
        const wrapper = mount(CContainer);
        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.classes()).toEqual([...BASE_CLASS]);
        expect(wrapper.classes().length).toBe(2);
        expect(wrapper.text()).toEqual('');
    });
});
