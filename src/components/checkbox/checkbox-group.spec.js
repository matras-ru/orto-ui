/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CCheckboxGroup from './checkbox-group';
import CCheckbox from './checkbox';

describe('Checkbox group', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CCheckboxGroup, {
            stub: {
                CCheckbox
            }
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('The checkbox group is empty renrered', () => {
        expect(wrapper.is('div')).toBe(true);
    });

    it('The checkbox group not empty', () => {
        wrapper.setProps({
            modelValue: [],
            data: [
                {
                    id: 'checkbox3',
                    label: 'Checkbox3',
                    name: 'checkbox3',
                    value: 'checkbox3'
                },
                {
                    id: 'checkbox4',
                    label: 'Checkbox2',
                    name: 'checkbox4',
                    value: 'checkbox4'
                }
            ]
        });

        expect(wrapper.contains('CCheckbox')).toBe(true);
        expect(wrapper.findAll('CCheckbox').length).toBe(2);
    });
});
