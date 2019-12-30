import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { justifyClaassUtil } from '@/utils';
import { getComponentConfig } from '@/config';
import defaultTheme from '@/themes/default/CList';

const NAME = 'CList';

console.log();

const props = {
    theme: {
        type: Object,
        default: () => defaultTheme
    },

    tag: {
        type: String,
        default: () => getComponentConfig(NAME, 'tag')
    },

    horizontal: {
        type: Boolean,
        default: () => getComponentConfig(NAME, 'horizontal')
    },

    justify: {
        type: String,
        default: null,
        validator: value => getComponentConfig('common', 'validJustifyContent').includes(value)
    }
};

const currentClass = ({ horizontal, justify, theme }) => {
    const { baseClass, defaultClass, horizontalClass } = theme;

    const classes = [baseClass];

    // horizontal/vertical
    classes.push(horizontal ? horizontalClass : defaultClass);

    // horizontal align
    classes.push(justifyClaassUtil(justify));

    return classes;
};

export default {
    name: NAME,
    functional: true,
    ...install,
    props,
    render(h, { props, data, children }) {
        const componentData = {
            class: currentClass(props)
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};
