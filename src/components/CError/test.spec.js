/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CError from './';

describe('Error', () => {
    it('The error message is rendered', async () => {
        const wrapper = mount(CError);

        expect(wrapper.is('div')).toBe(true);
    });
});
