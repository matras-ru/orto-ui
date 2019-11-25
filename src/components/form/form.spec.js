/* eslint-env jest */

import { mount } from '@vue/test-utils';
import CForm from './form';

describe('Form', () => {
    it('The form is rendered', async () => {
        const wrapper = mount(CForm);

        expect(wrapper.is('form')).toBe(true);
    });

    it('Renders default slot content', async () => {
        const wrapper = mount(CForm, {
            slots: {
                default: 'foobar'
            }
        });

        expect(wrapper.text()).toEqual('foobar');
    });
});
