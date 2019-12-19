/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';

import CRow from './row';
import CCol from './col';

const smBreakpoint = 'sm';

const baseClass = 'flex flex-wrap';
const mdGuttersNormalizeClass = '-mx-0-8';
const smGuttersNormalizeClass = '-mx-0-4';

const colBaseClass = 'flex-1 max-w-full';
const mdGuttersClass = 'px-0-8';
const smGuttersClass = 'px-0-4';

// const mdGuttersClass = 'px-0-8';

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
});

describe('CRow - gutters', () => {
    const localVue = new createLocalVue();

    it('add CCol gutter class', () => {
        const App = localVue.extend({
            render(h) {
                return h('section', {}, [
                    h(CRow, { ref: 'row-test' }, [h(CCol, { ref: 'col-test' }, 'Col')])
                ]);
            }
        });

        const wrapper = mount(App, {
            localVue
        });

        const Row = wrapper.find({ ref: 'row-test' });
        const Col = wrapper.find({ ref: 'col-test' });

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${mdGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(`${colBaseClass} ${mdGuttersClass}`.split(' ').sort());
        expect(Col.classes().length).toBe(3);

        wrapper.destroy();
    });

    it('responsive gutters', () => {
        const App = localVue.extend({
            render(h) {
                return h('div', {}, [
                    h(
                        CRow,
                        {
                            ref: 'row-test',
                            props: {
                                gutters: 'none',
                                guttersSm: 'sm'
                            }
                        },
                        [h(CCol, { ref: 'col-test' }, 'Col')]
                    )
                ]);
            }
        });

        const wrapper = mount(App, {
            localVue
        });

        const Row = wrapper.find({ ref: 'row-test' });
        const Col = wrapper.find({ ref: 'col-test' });

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${smBreakpoint}:${smGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${smBreakpoint}:${smGuttersClass}`.split(' ').sort()
        );
        expect(Col.classes().length).toBe(3);

        wrapper.destroy();
    });
});
