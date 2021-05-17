/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CBadge from './badge';

const baseClass = 'rounded-lg font-bold inline-block border-2 align-middle leading-none';
const variantPrimaryClass = 'bg-primary-100 border-primary-100 text-white';
const variantSecondaryClass = 'border-secondary-200 text-secondary-200';

const sizeMd = 'text-base px-0-6 py-0-3';

describe('Badge', () => {
    it('The badge is rendered', () => {
        const wrapper = mount(CBadge);

        expect(wrapper.element.tagName).toEqual('SPAN');
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${sizeMd} ${variantPrimaryClass}`.split(' ').sort()
        );
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('The badge is rendered', () => {
        const wrapper = mount(CBadge, {
            context: {
                props: {
                    variant: 'secondary'
                }
            }
        });

        expect(wrapper.element.tagName).toEqual('SPAN');
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${sizeMd} ${variantSecondaryClass}`.split(' ').sort()
        );
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });
});
