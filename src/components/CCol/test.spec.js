/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CCol from './';

const DEFAULT_CLASS = ['flex-1', 'max-w-full'];

describe('CCol', () => {
    it('default empty Col is functional component and rendered', () => {
        const wrapper = mount(CCol);
        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.classes()).toEqual([...DEFAULT_CLASS]);
        expect(wrapper.classes().length).toBe(2);
        expect(wrapper.text()).toEqual('');
    });

    it('should apply single breakpoint class', () => {
        const wrapper = mount(CCol, {
            propsData: {
                md: 6
            }
        });

        expect(wrapper.classes()).toEqual([...DEFAULT_CLASS, 'md:w-6/12']);
        expect(wrapper.classes().length).toBe(3);
    });

    it('should apply full width class', () => {
        const wrapper = mount(CCol, {
            propsData: {
                cols: 12
            }
        });

        expect(wrapper.classes()).toEqual(['w-full']);
        expect(wrapper.classes().length).toBe(1);
    });

    it('should apply breakpoint specific ${bp}:w-${col}/12 classes', () => {
        const wrapper = mount(CCol, {
            propsData: {
                sm: 9,
                md: 6,
                lg: 4,
                xl: 3
            }
        });

        expect(wrapper.classes()).toContain('sm:w-9/12');
        expect(wrapper.classes()).toContain('md:w-6/12');
        expect(wrapper.classes()).toContain('lg:w-4/12');
        expect(wrapper.classes()).toContain('xl:w-3/12');

        expect(wrapper.classes().length).toBe(6);
    });

    // it('Col is rendered', () => {
    //     const wrapper = mount(CCol);
    // });
});
