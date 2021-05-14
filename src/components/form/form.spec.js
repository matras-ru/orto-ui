/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CForm from './form';
const baseClass = 'mb-1-4';

describe('Form', () => {
    it('is rendered', async () => {
        const wrapper = mount(CForm);

        expect(wrapper.element.tagName).toEqual('FORM');
        expect(wrapper.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('default slot', async () => {
        const wrapper = mount(CForm, {
            slots: {
                default: 'foobar'
            }
        });

        expect(wrapper.text()).toEqual('foobar');

        wrapper.destroy();
    });
});
