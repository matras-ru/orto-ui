import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/utils/index.js';
import { justifyClaassUtil } from '@/utils';
import { getComponentConfig } from '@/config';
import DefaultTheme from '@/themes/default/CList';

const validDirection = ['vertical', 'horizontal'];

const NAME = 'CList';

const props = {
    theme: {
        type: Object,
        default: () => DefaultTheme
    },

    tag: {
        type: String,
        default: () => getComponentConfig(NAME, 'tag')
    },

    direction: {
        type: String,
        default: () => getComponentConfig(NAME, 'direction'),
        validator: value => validDirection.includes(value)
    },

    justify: {
        type: String,
        default: null,
        validator: value => getComponentConfig('common', 'validJustifyContent').includes(value)
    }
};

const currentClass = ({ direction, justify, theme }) => {
    const { base, directionColumn, directionHorizontal } = theme;

    const classMap = {
        vertical: directionColumn,
        horizontal: directionHorizontal
    };

    const classes = [base];

    // horizontal/vertical
    classes.push(classMap[direction]);

    // horizontal align
    classes.push(justifyClaassUtil(justify));

    return classes;
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props, data, children }) {
        const componentData = {
            class: currentClass(props)
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};
