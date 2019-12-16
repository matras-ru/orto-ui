/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CButton from './button';

const baseClass =
    'inline-block align-top rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3 mb-1-4';
const defaultClass = 'bg-white border-primary-100 transition-shadow hover:shadow';
const primaryClass = 'bg-primary-100 border-primary-100 transition-shadow hover:shadow';
const secondaryClass =
    'bg-white border-secondary-200 text-secondary-200 transition-bg transition-color hover:text-white hover:bg-secondary-200';
const tertiaryClass =
    'bg-white border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100';
const quaternaryClass =
    'bg-white border-black-100 transition-bg transition-color hover:text-white hover:bg-black-100';
const disabledClass = 'cursor-not-allowed opacity-75';
const defaultSizeClass = 'text-base px-1-5 py-0-4 leading-snug';
const largeSizeClass = 'text-lg px-1-5 py-0-6 leading-none';
const smallSizeClass = 'text-base px-1-3 py-0-3 leading-snug';

describe('Button', () => {
    it('The button is rendered', () => {
        const wrapper = mount(CButton);

        expect(wrapper.is('button')).toBe(true);
        expect(wrapper.attributes('type')).toBeDefined();
        expect(wrapper.attributes('type')).toBe('button');
        expect(wrapper.attributes('href')).not.toBeDefined();
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${defaultClass} ${defaultSizeClass}`.split(' ').sort()
        );
    });

    it('Applies variant class', () => {
        const wrapper = mount(CButton, {
            context: {
                props: {
                    variant: 'secondary'
                }
            }
        });

        expect(wrapper.is('button')).toBe(true);
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${secondaryClass} ${defaultSizeClass}`.split(' ').sort()
        );
    });

    it('Should emit click event when clicked', () => {
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
        wrapper.trigger('click');
        expect(called).toBe(1);
        expect(evt).toBeInstanceOf(MouseEvent);
    });

    it('The button is disabled', () => {
        const wrapper = mount(CButton, {
            context: {
                props: {
                    disabled: true
                }
            }
        });

        expect(wrapper.attributes('disabled')).toBeDefined();
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${defaultClass} ${defaultSizeClass} ${disabledClass}`.split(' ').sort()
        );
    });

    it('Should not emit click event when clicked and disabled', () => {
        let called = 0;

        const wrapper = mount(CButton, {
            context: {
                props: {
                    disabled: true
                }
            },
            listeners: {
                onClick: () => {
                    called++;
                }
            }
        });

        expect(called).toBe(0);
        wrapper.trigger('click');
        expect(called).toBe(0);
    });

    it('Button as link', () => {
        const wrapper = mount(CButton, {
            context: {
                props: {
                    href: '//google.com',
                    target: '_blank'
                }
            }
        });

        expect(wrapper.is('a')).toBe(true);
        expect(wrapper.attributes('href')).toBeDefined();
        expect(wrapper.attributes('href')).toBe('//google.com');
        expect(wrapper.attributes('target')).toBeDefined();
        expect(wrapper.attributes('target')).toBe('_blank');
        expect(wrapper.attributes('type')).not.toBeDefined();
    });
});
