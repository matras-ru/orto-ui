/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CListItem from './';

const DEFAULT_CLASS = ['inline-block'];

describe('CListItem', () => {
    it('default empty CListItem is functional component and rendered', () => {
        const wrapper = mount(CListItem);
        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('li')).toBe(true);
        expect(wrapper.classes()).toEqual([...DEFAULT_CLASS]);
        expect(wrapper.classes().length).toBe(1);
        expect(wrapper.text()).toEqual('');
    });

    it('html tag equal div when prop tag = div', () => {
        const wrapper = mount(CListItem, {
            propsData: {
                tag: 'div'
            }
        });

        expect(wrapper.is('div')).toBe(true);
    });

    it('custom attributes', () => {
        const wrapper = mount(CListItem, {
            attrs: {
                role: 'presentation'
            }
        });

        expect(wrapper.attributes('role')).toBe('presentation');
    });
});
