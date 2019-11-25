/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CIcon from './icon';

describe('Icon', () => {
    it('The icon is rendered', async () => {
        const wrapper = mount(CIcon, {
            propsData: {
                name: 'cart'
            }
        });

        expect(wrapper.is('svg')).toBe(true);
    });
});
