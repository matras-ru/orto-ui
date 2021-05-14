/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CListItem from './list-item';

const defaultClass = 'inline-block';

describe('CListItem', () => {
    it('default empty CListItem is functional component and rendered', () => {
        const wrapper = mount(CListItem);
        expect(wrapper.isFunctionalComponent).toBe(true);

        expect(wrapper.element.tagName).toEqual('LI');
        expect(wrapper.classes().sort()).toEqual(`${defaultClass}`.split(' ').sort());
        expect(wrapper.classes().length).toBe(1);
        expect(wrapper.text()).toEqual('');

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('html tag equal div when prop tag = div', () => {
        const wrapper = mount(CListItem, {
            context: {
                props: {
                    tag: 'div'
                }
            }
        });

        expect(wrapper.element.tagName).toEqual('DIV');
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
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
