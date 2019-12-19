import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { getHashMapValue, upperFirst, suffixPropName } from '@/utils';
import { getComponentConfig } from '@/config';

import defaultTheme from '@/themes/default/CRow';

const NAME = 'CRow';
const VALID_GUTTERS = ['none', 'sm', 'md', 'lg', 'xl'];
const VALID_DIRECTION = ['row', 'column'];
const VALID_ALIGN = ['start', 'center', 'end'];
const VALID_JUSTIFY = ['start', 'center', 'between', 'end'];
const GUTTERS_PROP_NAME = 'gutters';

const stringProp = () => ({
    type: String,
    default: null
});

const createThemeMap = ({
    xlGuttersNormalizeClass,
    xlGuttersClass,
    lgGuttersNormalizeClass,
    lgGuttersClass,
    mdGuttersNormalizeClass,
    mdGuttersClass,
    smGuttersNormalizeClass,
    smGuttersClass,
    noneGuttersNormalizeClass,
    noneGuttersClass
}) => {
    return {
        gutters: {
            xl: {
                row: xlGuttersNormalizeClass,
                col: xlGuttersClass
            },
            lg: {
                row: lgGuttersNormalizeClass,
                col: lgGuttersClass
            },
            md: {
                row: mdGuttersNormalizeClass,
                col: mdGuttersClass
            },
            sm: {
                row: smGuttersNormalizeClass,
                col: smGuttersClass
            },
            none: {
                row: noneGuttersNormalizeClass,
                col: noneGuttersClass
            },
            default: {
                row: mdGuttersNormalizeClass,
                col: mdGuttersClass
            }
        }
    };
};

// Cached copy of the breakpoint prop names
let breakpointPropMap = Object.create(null);

const generateProps = () => {
    const breakpoints = getComponentConfig('common', 'screens');

    const breakpointGutters = breakpoints.reduce((prop, breakpoint) => {
        prop[suffixPropName(breakpoint, GUTTERS_PROP_NAME)] = stringProp();
        return prop;
    }, Object.create(null));

    breakpointPropMap = Object.assign(Object.create(null), {
        gutters: Object.keys(breakpointGutters)
    });

    return {
        theme: {
            type: Object,
            default: () => defaultTheme
        },

        justify: {
            type: String,
            default: null,
            validator: value => VALID_JUSTIFY.includes(value)
        },

        align: {
            type: String,
            default: null,
            validator: value => VALID_ALIGN.includes(value)
        },

        direction: {
            type: String,
            default: () => getComponentConfig(NAME, 'direction'),
            validator: value => VALID_DIRECTION.includes(value)
        },

        [GUTTERS_PROP_NAME]: {
            type: String,
            default: () => getComponentConfig(NAME, 'gutters'),
            validator: value => VALID_GUTTERS.includes(value)
        },

        ...breakpointGutters
    };
};

// Compute a breakpoint class name
const computeBreakpointClass = (map, type, breakpoint, val) => {
    const rowClasses = [];
    const colClasses = [];

    if (!val) {
        return undefined;
    }

    if (breakpoint) {
        const { row: rowGuttersBreakpointClass, col: colGuttersClass } = getHashMapValue(map, val);
        rowClasses.push(`${breakpoint}:${rowGuttersBreakpointClass}`);
        colClasses.push(`${breakpoint}:${colGuttersClass}`);
    }

    return {
        rowClasses,
        colClasses
    };
};

const currentClass = props => {
    const { gutters: gutter, theme } = props;
    const { baseClass } = theme;

    const rowClasses = [baseClass];
    const colClasses = [];

    const { gutters } = createThemeMap(theme);
    const { row: rowGuttersClass, col: colGuttersClass } = getHashMapValue(gutters, gutter);

    if (rowGuttersClass) rowClasses.push(rowGuttersClass);
    if (colGuttersClass) colClasses.push(colGuttersClass);

    //
    for (const type in breakpointPropMap) {
        // gutters
        const keys = breakpointPropMap[type];

        keys.forEach(key => {
            console.log(props[key]);
            if (!props[key]) return;

            const breakpoint = key.replace(`${type}`, '').toLowerCase();

            if (breakpoint) {
                console.log(getHashMapValue(type, props[key]));

                // const { row: rowGuttersBreakpointClass, col: colGuttersClass } = getHashMapValue(
                //     type,
                //     props[key]
                // );
                // rowClasses.push(`${breakpoint}:${rowGuttersBreakpointClass}`);
                // colClasses.push(`${breakpoint}:${colGuttersClass}`);
            }

            // const c = computeBreakpointClass(gutters, type, breakpoint, props[key]);

            // if (c) {
            //     const { rowClasses: rowBreakpointsClass, colClasses: colBreakpointsClass } = c;

            //     rowClasses.push(rowBreakpointsClass);
            //     colClasses.push(colBreakpointsClass);

            // }
        });
    }

    return {
        rowClasses,
        colClasses
    };
};

export default {
    name: NAME,
    functional: true,
    ...install,
    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps());
    },
    render(h, { props, data, children = [] }) {
        const { rowClasses, colClasses } = currentClass(props);
        const componentData = {
            class: rowClasses
        };

        const computedChildren = children.map(item => {
            const { staticClass = null } = item.data;
            const guttersColClass = staticClass
                ? `${staticClass} ${colClasses.join(' ')}`
                : `${colClasses.join(' ')}`;

            item.data = { ...item.data, ...{ staticClass: guttersColClass } };

            return item;
        });

        return h('div', mergeData(data, componentData), computedChildren);
    }
};
