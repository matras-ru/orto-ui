import { selfInstall } from '@/utils';
import { mergeData } from 'vue-functional-data-merge';

import ThemeClass from '@/themes/default/CRow';

const {
    baseClass,
    smallSizeGuttersNormalizeClass,
    mediumGuttersNormalizeClass,
    smallSizeGuttersClass,
    mediumGuttersClass
} = ThemeClass;

const VALID_GUTTERS = ['none', 'md', 'sm'];
const VALID_DIRECTION = ['row', 'column'];
const VALID_ALIGN = ['start', 'center', 'end'];
const VALID_JUSTIFY = ['start', 'center', 'between', 'end'];

const props = {
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
        default: 'row',
        validator: value => VALID_DIRECTION.includes(value)
    },

    gutters: {
        type: String,
        default: 'md',
        validator: value => VALID_GUTTERS.includes(value)
    }
};

const currentClass = ({ gutters }) => {
    const rowClasses = [...baseClass];
    const colClasses = [];

    // negative margin div.-mx-4/8/none + positive padding for children cols
    switch (gutters) {
        case 'none':
            break;
        case 'sm':
            rowClasses.push(...smallSizeGuttersNormalizeClass);
            colClasses.push(...smallSizeGuttersClass);
            break;
        case 'md':
        default:
            rowClasses.push(...mediumGuttersNormalizeClass);
            colClasses.push(...mediumGuttersClass);
            break;
    }

    return {
        rowClasses,
        colClasses
    };
};

export default {
    name: 'CRow',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props, data, children = [] }) {
        const { rowClasses, colClasses } = currentClass(props);

        const componentData = {
            class: rowClasses
        };

        const computedChildren = children.map(item => {
            item.data.staticClass = colClasses.join(' '); // add gutters for Cols
            return item;
        });

        return h('div', mergeData(data, componentData), computedChildren);
    }
};
