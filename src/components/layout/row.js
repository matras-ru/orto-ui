import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { getHashMapValue } from '@/utils';
import { getComponentConfig } from '@/config';

import defaultTheme from '@/themes/default/CRow';

const NAME = 'CRow';
const VALID_GUTTERS = ['none', 'xs', 'sm', 'md', 'lg'];
const VALID_DIRECTION = ['row', 'column'];
const VALID_ALIGN = ['start', 'center', 'end'];
const VALID_JUSTIFY = ['start', 'center', 'between', 'end'];

const createThemeMap = ({
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
            }
        }
    };
};

const props = {
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

    gutters: {
        type: String,
        default: () => getComponentConfig(NAME, 'gutters'),
        validator: value => VALID_GUTTERS.includes(value)
    }
};

const currentClass = ({ gutters: gutter, theme }) => {
    const { baseClass } = theme;

    const rowClasses = [baseClass];
    const colClasses = [];

    const { gutters } = createThemeMap(theme);
    const { row: rowGuttersClass, col: colGuttersClass } = getHashMapValue(gutters, gutter);

    rowClasses.push(rowGuttersClass);
    colClasses.push(colGuttersClass);

    return {
        rowClasses,
        colClasses
    };
};

export default {
    name: NAME,
    functional: true,
    ...install,
    props,
    render(h, { props, data, children = [] }) {
        const { rowClasses, colClasses } = currentClass(props);

        const componentData = {
            class: rowClasses
        };

        const computedChildren = children.map(item => {
            item.data.staticClass = `${item.data.staticClass} ${colClasses.join(' ')}`; // add gutters for Cols
            return item;
        });

        return h('div', mergeData(data, componentData), computedChildren);
    }
};
