/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CBadge from './badge';

const baseClass =
    'rounded-lg font-bold px-0-6 py-0-3 inline-block border-2 align-middle leading-none';
const variantPrimaryClass = 'bg-primary-100 border-primary-100 text-white';
const variantSecondaryClass = 'border-secondary-200 text-secondary-200';

describe('Badge', () => {
    it('The button is rendered', () => {
        const wrapper = mount(CBadge);

        expect(wrapper.element.tagName).toEqual('SPAN');
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${variantPrimaryClass}`.split(' ').sort()
        );
    });

    it('The button is rendered', () => {
        const wrapper = mount(CBadge, {
            context: {
                props: {
                    variant: 'secondary'
                }
            }
        });

        expect(wrapper.element.tagName).toEqual('SPAN');
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${variantSecondaryClass}`.split(' ').sort()
        );
    });
});
