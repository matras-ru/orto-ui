/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CContainer from './container';

const baseClass = 'container';
const fluidClass = 'max-w-none';

describe('CContainer', () => {
    it('default', () => {
        const wrapper = mount(CContainer);

        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.element.tagName).toEqual('DIV');
        expect(wrapper.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
        expect(wrapper.classes().length).toBe(1);
        expect(wrapper.text()).toEqual('');

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('fluid', () => {
        const wrapper = mount(CContainer, {
            context: {
                props: {
                    fluid: true
                }
            }
        });

        expect(wrapper.classes().sort()).toEqual(`${baseClass} ${fluidClass}`.split(' ').sort());
        expect(wrapper.classes().length).toBe(2);

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });
});
