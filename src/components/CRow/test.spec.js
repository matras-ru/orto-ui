/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CRow from './';

const BASE_CLASS = ['flex', 'flex-wrap'];

describe('CRow', () => {
    it('default empty Row is the functional component and rendered', () => {
        const wrapper = mount(CRow);
        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.classes()).toEqual([...BASE_CLASS, '-mx-8']);
        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.text()).toEqual('');
    });

    it('...', () => {
        const wrapper = mount(CRow, {
            propsData: {
                gutters: 'none'
            }
        });

        expect(wrapper.classes()).toEqual([...BASE_CLASS]);
        expect(wrapper.classes().length).toBe(2);
    });
});
