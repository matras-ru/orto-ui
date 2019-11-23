/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CList from './list';

const baaseClass = 'flex flex-wrap';
const defaultCLass = 'flex-col';
const horizontalClass = 'flex-row';
const betweenClass = 'justify-between';

describe('CList', () => {
    it('default empty CList is functional component and rendered. Should have tag ul by default', () => {
        const wrapper = mount(CList);
        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('ul')).toBe(true);
        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.classes().sort()).toEqual(`${baaseClass} ${defaultCLass}`.split(' ').sort());
    });

    it('html tag equal div when prop tag = div', () => {
        const wrapper = mount(CList, {
            context: {
                props: {
                    tag: 'div'
                }
            }
        });

        expect(wrapper.is('div')).toBe(true);
    });

    it('horizontal mode', () => {
        const wrapper = mount(CList, {
            context: {
                props: {
                    direction: 'horizontal'
                }
            }
        });

        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.classes().sort()).toEqual(
            `${baaseClass} ${horizontalClass}`.split(' ').sort()
        );
    });

    it('between horizontal align', () => {
        const wrapper = mount(CList, {
            context: {
                props: {
                    justify: 'between'
                }
            }
        });

        expect(wrapper.classes().length).toBe(4);
        expect(wrapper.classes().sort()).toEqual(
            `${baaseClass} ${defaultCLass} ${betweenClass}`.split(' ').sort()
        );
    });

    it('custom attributes', () => {
        const wrapper = mount(CList, {
            attrs: {
                role: 'tabs'
            }
        });

        expect(wrapper.attributes('role')).toBe('tabs');
    });
});
