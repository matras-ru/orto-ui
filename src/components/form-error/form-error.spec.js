/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CFormError from './form-error';

describe('CFormError', () => {
    it('The error message is rendered', async () => {
        const wrapper = mount(CFormError);

        expect(wrapper.is('div')).toBe(true);
    });
});
