/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CList from './list';

const BASE_CLASS = ['flex', 'flex-wrap'];
const DEFAULT_CLASS = ['flex-col'];
const HORIZONTAL_CLASS = ['flex-row'];

describe('CList', () => {
    it('default empty CList is functional component and rendered. Should have  tag ul by default', () => {
        const wrapper = mount(CList);
        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('ul')).toBe(true);
        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.classes()).toEqual([...BASE_CLASS, ...DEFAULT_CLASS]);
    });

    it('html tag equal div when prop tag = div', () => {
        const wrapper = mount(CList, {
            propsData: {
                tag: 'div'
            }
        });

        expect(wrapper.is('div')).toBe(true);
    });

    it('horizontal mode when prop horizontal = true', () => {
        const wrapper = mount(CList, {
            propsData: {
                horizontal: true
            }
        });

        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.classes()).toEqual([...BASE_CLASS, ...HORIZONTAL_CLASS]);
    });

    it('custom attributes', () => {
        const wrapper = mount(CList, {
            attrs: {
                role: 'tabs'
            }
        });

        expect(wrapper.attributes('role')).toBe('tabs');
    });
});
