/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CFormGroup from './form-panel';

describe('Form panel', () => {
    it('is rendered', () => {
        const wrapper = mount(CFormGroup);

        expect(wrapper.is('section')).toBe(true);
    });

    it('default slot', () => {
        const wrapper = mount(CFormGroup, {
            slots: {
                default: 'foobar'
            }
        });

        expect(wrapper.text()).toEqual('foobar');
    });
});
