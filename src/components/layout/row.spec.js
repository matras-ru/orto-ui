/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';

import CRow from './row';
import CCol from './col';

const baseClass = 'flex flex-wrap';
const mdGuttersNormalizeClass = '-mx-0-8';
const smGuttersNormalizeClass = '-mx-0-4';

const colBaseClass = 'flex-1 max-w-full';
const mdGuttersClass = 'px-0-8';

describe('CRow', () => {
    it('default empty CRow is the functional component and rendered', () => {
        const wrapper = mount(CRow);
        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${mdGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.text()).toEqual('');
    });

    it('gutters - sm', () => {
        const wrapper = mount(CRow, {
            context: {
                props: {
                    gutters: 'sm'
                }
            }
        });

        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${smGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(wrapper.classes().length).toBe(3);
    });

    it('gutters - none', () => {
        const wrapper = mount(CRow, {
            context: {
                props: {
                    gutters: 'none'
                }
            }
        });
        ``;
        expect(wrapper.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
        expect(wrapper.classes().length).toBe(2);
    });
});

describe('CRow - test', () => {
    const localVue = new createLocalVue();

    it('add CCol gutter class', () => {
        const App = localVue.extend({
            render(h) {
                return h('div', {}, [
                    h(CRow, { staticClass: 'row-test' }, [
                        h(CCol, { staticClass: 'col-test' }, 'Col')
                    ])
                ]);
            }
        });

        const wrapper = mount(App, {
            localVue
        });

        const Row = wrapper.find('.row-test');
        const Col = Row.find('.col-test');

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${mdGuttersNormalizeClass} row-test`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(4);

        console.log(wrapper.html());

        // expect(Col.classes().sort()).toEqual(
        //     `${colBaseClass} ${mdGuttersClass} col-test`.split(' ').sort()
        // );
        // expect(Col.classes().length).toBe(4);

        wrapper.destroy();
    });
});
