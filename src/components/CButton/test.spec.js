/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CButton from './';

let classes =
    'inline-block align-top rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3 mb-1-4 text-base px-1-5 py-0-4 leading-snug bg-white border-secondary-200 text-secondary-200 transition-bg transition-color hover:text-white hover:bg-secondary-200';

describe('Button', () => {
    it('The button is rendered', async () => {
        const wrapper = mount(CButton, {
            propsData: { type: 'button' }
        });

        expect(wrapper.is('button')).toBe(true);
        expect(wrapper.attributes('type')).toBeDefined();
        expect(wrapper.attributes('type')).toBe('button');
        expect(wrapper.attributes('href')).not.toBeDefined();
    });

    it('The link is rendered', async () => {
        const wrapper = mount(CButton, {
            propsData: { href: '/foo/bar' }
        });

        expect(wrapper.is('a')).toBe(true);
        expect(wrapper.attributes('href')).toBeDefined();
        expect(wrapper.attributes('href')).toBe('/foo/bar');
        expect(wrapper.attributes('type')).not.toBeDefined();
    });

    it('Applies variant class', async () => {
        const wrapper = mount(CButton, {
            propsData: { variant: 'secondary' }
        });

        expect(wrapper.is('button')).toBe(true);
        expect(wrapper.classes().join(' ')).toContain(classes);
    });

    it('Should emit click event when clicked', async () => {
        let called = 0;
        let evt = null;
        const wrapper = mount(CButton, {
            listeners: {
                onClick: e => {
                    evt = e;
                    called++;
                }
            }
        });

        expect(wrapper.is('button')).toBe(true);
        expect(called).toBe(0);
        expect(evt).toEqual(null);
        wrapper.find('button').trigger('click');
        expect(called).toBe(1);
        expect(evt).toBeInstanceOf(MouseEvent);
    });

    it('The button is disabled', async () => {
        const wrapper = mount(CButton, {
            propsData: { disabled: true }
        });

        expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('Should not emit click event when clicked and disabled', async () => {
        let called = 0;
        const wrapper = mount(CButton, {
            propsData: { disabled: true },
            listeners: {
                click: () => {
                    called++;
                }
            }
        });

        expect(wrapper.is('button')).toBe(true);
        expect(called).toBe(0);
        wrapper.find('button').trigger('click');
        expect(called).toBe(0);
    });
});
