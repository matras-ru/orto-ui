/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CLabel from './form-label';

describe('Label', () => {
    it('The label is rendered', async () => {
        const wrapper = mount(CLabel);

        expect(wrapper.is('label')).toBe(true);
    });
});
