/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CLink from './link';

const baseClass = 'inline-block';
const disabledClass = 'pointer-events-none';

describe('Link', () => {
    it('default', () => {
        const wrapper = mount(CLink);

        expect(wrapper.is('a')).toBe(true);
        expect(wrapper.attributes('target')).toBeDefined();
        expect(wrapper.attributes('target')).toBe('_self');
        expect(wrapper.attributes('href')).not.toBeDefined();

        expect(wrapper.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
    });

    it('custom attrs: href & target', () => {
        const wrapper = mount(CLink, {
            context: {
                props: {
                    href: '//google.com',
                    target: '_blank'
                }
            }
        });

        expect(wrapper.attributes('target')).toBeDefined();
        expect(wrapper.attributes('target')).toBe('_blank');
        expect(wrapper.attributes('href')).toBeDefined();
        expect(wrapper.attributes('href')).toBe('//google.com');
    });

    it('default slot', () => {
        const wrapper = mount(CLink, {
            slots: {
                default: 'Example link'
            }
        });

        expect(wrapper.text()).toBe('Example link');
    });

    it('prop label > default slot', () => {
        const wrapper = mount(CLink, {
            context: {
                props: {
                    label: 'Test Link'
                }
            },
            slots: {
                default: 'Example link'
            }
        });

        expect(wrapper.text()).toBe('Test Link');
    });

    it('disabled', () => {
        const wrapper = mount(CLink, {
            context: {
                props: {
                    disabled: true
                }
            }
        });

        expect(wrapper.attributes('aria-disabled')).toBeDefined();
        expect(wrapper.attributes('aria-disabled')).toBe('true');

        expect(wrapper.classes().sort()).toEqual(`${baseClass} ${disabledClass}`.split(' ').sort());
    });
});
