/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CFormGroup from './';

describe('Form group', () => {
    it('The form group is rendered', async () => {
        const wrapper = mount(CFormGroup);

        expect(wrapper.is('div')).toBe(true);
    });
    it('Renders default slot content', async () => {
        const wrapper = mount(CFormGroup, {
            slots: {
                default: 'foobar'
            }
        });

        expect(wrapper.text()).toEqual('foobar');
    });
});
