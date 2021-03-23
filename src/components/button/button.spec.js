/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CButton from './button';

const baseClass =
    'inline-flex items-center justify-center rounded-lg uppercase font-semibold text-black-100 duration-250 ease-in-out border-3 focus:outline-none';
const defaultClass = 'border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
const secondaryClass =
    'bg-primary-100 border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
const disabledClass = 'cursor-not-allowed opacity-75';
const defaultSizeClass = 'text-base px-1-5 py-0-4 leading-snug';

describe('Button', () => {
    it('The button is rendered', () => {
        const wrapper = mount(CButton);

        expect(wrapper.element.tagName).toEqual('BUTTON');
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

        expect(wrapper.element.tagName).toEqual('BUTTON');
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

        expect(wrapper.element.tagName).toEqual('BUTTON');
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

        expect(wrapper.element.tagName).toEqual('A');
        expect(wrapper.classes('no-underline')).toBe(false);
        expect(wrapper.classes('text-secondary-200')).toBe(false);
        expect(wrapper.classes('hover:text-black-200')).toBe(false);
        expect(wrapper.classes('border-b-2')).toBe(false);
    });
});
