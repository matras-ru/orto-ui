/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';

import CRow from './row';
import CCol from './col';

const smBreakpoint = 'sm';
const mdBreakpoint = 'md';

const baseClass = 'flex flex-wrap';
const mdGuttersNormalizeClass = '-mx-0-8';
const smGuttersNormalizeClass = '-mx-0-4';

const colDefaultClass = 'flex-1';
const colBaseClass = 'max-w-full';
const mdGuttersClass = 'px-0-8';
const smGuttersClass = 'px-0-4';

const fullWidthClass = 'w-full';
const defaultCols = 12;

describe('CRow', () => {
    it('default', () => {
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

describe('gutters', () => {
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
        expect(Col.classes().length).toBe(2);

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
        expect(Col.classes().length).toBe(2);

        wrapper.destroy();
    });

    it('responsive cols - basic', () => {
        const App = localVue.extend({
            render(h) {
                return h('div', {}, [
                    h(
                        CRow,
                        {
                            ref: 'row-test',
                            props: {
                                cols: 2,
                                md: 5
                            }
                        },
                        [
                            h(
                                CCol,
                                {
                                    ref: 'col-test',
                                    props: {
                                        cols: 2,
                                        md: 1
                                    }
                                },
                                'Col'
                            )
                        ]
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
            `${baseClass} ${mdGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${mdGuttersClass} ${fullWidthClass} ${mdBreakpoint}:w-1/5`
                .split(' ')
                .sort()
        );
        expect(Col.classes().length).toBe(4);

        wrapper.destroy();
    });

    it('responsive cols - default colsLimit', () => {
        const App = localVue.extend({
            render(h) {
                return h('div', {}, [
                    h(
                        CRow,
                        {
                            ref: 'row-test'
                        },
                        [
                            h(
                                CCol,
                                {
                                    ref: 'col-test',
                                    props: {
                                        cols: 2,
                                        md: 3
                                    }
                                },
                                'Col'
                            )
                        ]
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
            `${baseClass} ${mdGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${mdGuttersClass} w-2/${defaultCols} ${mdBreakpoint}:w-3/${defaultCols}`
                .split(' ')
                .sort()
        );
        expect(Col.classes().length).toBe(4);

        wrapper.destroy();
    });

    it('responsive cols - custom cols', () => {
        const App = localVue.extend({
            render(h) {
                return h('div', {}, [
                    h(
                        CRow,
                        {
                            ref: 'row-test',
                            props: {
                                cols: 5
                            }
                        },
                        [
                            h(
                                CCol,
                                {
                                    ref: 'col-test',
                                    props: {
                                        cols: 5,
                                        md: 1
                                    }
                                },
                                'Col'
                            )
                        ]
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
            `${baseClass} ${mdGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${mdGuttersClass} ${fullWidthClass} ${mdBreakpoint}:w-1/5`
                .split(' ')
                .sort()
        );
        expect(Col.classes().length).toBe(4);

        wrapper.destroy();
    });
});
