/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import { ConfigPlugin } from '@/config';

import CRow from './row';
import CCol from './col';

const smBreakpoint = 'sm';
const mdBreakpoint = 'md';

const baseClass = 'flex flex-wrap';
const lgGuttersNormalizeClass = '-mx-0-8';
const mdGuttersNormalizeClass = '-mx-0-4';
const smGuttersNormalizeClass = '-mx-0-2';

const colBaseClass = 'max-w-full';
const lgGuttersClass = 'px-0-8';
const mdGuttersClass = 'px-0-4';
const smGuttersClass = 'px-0-2';

const fullWidthClass = 'w-full';
const defaultCols = 12;

const plugin = function (Vue, options = {}) {
    const { config = {} } = options;
    ConfigPlugin(config, Vue);
};

describe('CRow', () => {
    it('default', () => {
        const wrapper = mount(CRow);

        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${lgGuttersNormalizeClass}`.split(' ').sort()
        );

        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.text()).toEqual('');

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });
});

describe('gutters', () => {
    const localVue = createLocalVue();

    localVue.use(plugin);

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

        const Row = wrapper.findComponent({ ref: 'row-test' });
        const Col = wrapper.findComponent({ ref: 'col-test' });

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${lgGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(`${colBaseClass} ${lgGuttersClass}`.split(' ').sort());
        expect(Col.classes().length).toBe(2);

        expect(wrapper.html()).toMatchSnapshot();

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
                                guttersSm: 'md'
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

        const Row = wrapper.findComponent({ ref: 'row-test' });
        const Col = wrapper.findComponent({ ref: 'col-test' });

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${smBreakpoint}:${mdGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${smBreakpoint}:${mdGuttersClass}`.split(' ').sort()
        );
        expect(Col.classes().length).toBe(2);

        wrapper.destroy();
    });
});

describe('cols', () => {
    const localVue = createLocalVue();
    localVue.use(plugin);

    it('basic', () => {
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

        const Row = wrapper.findComponent({ ref: 'row-test' });
        const Col = wrapper.findComponent({ ref: 'col-test' });

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${lgGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${lgGuttersClass} ${fullWidthClass} ${mdBreakpoint}:w-1/5`
                .split(' ')
                .sort()
        );
        expect(Col.classes().length).toBe(4);

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('default colsLimit', () => {
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

        const Row = wrapper.findComponent({ ref: 'row-test' });
        const Col = wrapper.findComponent({ ref: 'col-test' });

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${lgGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${lgGuttersClass} w-2/${defaultCols} ${mdBreakpoint}:w-3/${defaultCols}`
                .split(' ')
                .sort()
        );
        expect(Col.classes().length).toBe(4);

        wrapper.destroy();
    });

    it('custom cols', () => {
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

        const Row = wrapper.findComponent({ ref: 'row-test' });
        const Col = wrapper.findComponent({ ref: 'col-test' });

        expect(Row.classes().sort()).toEqual(
            `${baseClass} ${lgGuttersNormalizeClass}`.split(' ').sort()
        );
        expect(Row.classes().length).toBe(3);

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${lgGuttersClass} ${fullWidthClass} ${mdBreakpoint}:w-1/5`
                .split(' ')
                .sort()
        );
        expect(Col.classes().length).toBe(4);

        wrapper.destroy();
    });

    it('same breakpoints CCol props', () => {
        /* CRow(:cols="3" :sm="4" :md="5")
        CCol(:cols="1")
        eq:
        div(class="...") - row
        div(class="... w-1/3 sm:w-1/4 md:w-1/5") - col */
        const App = localVue.extend({
            render(h) {
                return h('div', {}, [
                    h(
                        CRow,
                        {
                            ref: 'row-test',
                            props: {
                                cols: 3,
                                sm: 4,
                                md: 5
                            }
                        },
                        [
                            h(
                                CCol,
                                {
                                    ref: 'col-test',
                                    props: {
                                        cols: 1
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

        const Col = wrapper.findComponent({ ref: 'col-test' });

        expect(Col.classes().sort()).toEqual(
            `${colBaseClass} ${lgGuttersClass} w-1/3 ${smBreakpoint}:w-1/4 ${mdBreakpoint}:w-1/5`
                .split(' ')
                .sort()
        );

        expect(Col.classes().length).toBe(5);

        wrapper.destroy();
    });

    it('responsive cols offset', () => {
        /* CRow
        CCol(:offsetLg="3")
        eq:
        div(class="...") - row
        div(class="... lg:ml-3/12") - col */
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
                                        offsetLg: 3
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

        const Col = wrapper.findComponent({ ref: 'col-test' });

        expect(Col.classes()).toContain('lg:ml-3/12');

        wrapper.destroy();
    });
});
