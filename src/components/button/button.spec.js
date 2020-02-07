/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CButton from './button';

const baseClass =
    'inline-block align-top rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3';
const defaultClass = 'bg-white border-primary-100 transition-shadow hover:shadow';
const secondaryClass = 'bg-primary-100 border-primary-100 transition-shadow hover:shadow';
const disabledClass = 'cursor-not-allowed opacity-75';
const defaultSizeClass = 'text-base px-1-5 py-0-4 leading-snug';

const baseLinkClass = 'inline-block no-underline';
const variantPrimaryLink = 'text-secondary-200 hover:text-black-200 border-b-2';

describe('Button', () => {
    it('The button is rendered', () => {
        const wrapper = mount(CButton);

        expect(wrapper.is('button')).toBe(true);
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
        let evt = null;

        const wrapper = mount(CButton, {
            context: {
                props: {
                    disabled: true
                },
                listeners: {
                    onClick: e => {
                        evt = e;
                        called++;
                    }
                }
            }
        });

        expect(called).toBe(0);
        expect(evt).toEqual(null);
        expect(wrapper.attributes('disabled')).toBeDefined();
        wrapper.trigger('click');
        expect(evt).toEqual(null);
        expect(called).toBe(0);
    });

    it('Button as link - missing link classes', () => {
        const wrapper = mount(CButton, {
            context: {
                props: {
                    href: '//google.com',
                    target: '_blank'
                }
            }
        });

        expect(wrapper.is('a')).toBe(true);
        expect(wrapper.classes('no-underline')).toBe(false);
        expect(wrapper.classes('text-secondary-200')).toBe(false);
        expect(wrapper.classes('hover:text-black-200')).toBe(false);
        expect(wrapper.classes('border-b-2')).toBe(false);
    });
});
