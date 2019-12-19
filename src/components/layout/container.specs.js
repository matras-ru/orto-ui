/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CContainer from './container';

const baseClass = 'container';
const fluidClass = 'max-w-none';

describe('CContainer', () => {
    it('default empty CContainer is the functional component and rendered', () => {
        const wrapper = mount(CContainer);

        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
        expect(wrapper.classes().length).toBe(1);
        expect(wrapper.text()).toEqual('');
    });

    it('CContainer - fluid', () => {
        const wrapper = mount(CContainer, {
            context: {
                props: {
                    fluid: true
                }
            }
        });

        expect(wrapper.classes().sort()).toEqual(`${baseClass} ${fluidClass}`.split(' ').sort());
        expect(wrapper.classes().length).toBe(2);
    });
});
