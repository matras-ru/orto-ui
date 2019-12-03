import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';

import ThemeClass from '@/themes/default/CList';
import { getComponentConfig } from '@/config';

const { baseClass, defaultClass, horizontalClass, startClass, endClass, betweenClass } = ThemeClass; // TODO: flex-class вынести

const NAME = 'CList';

const props = {
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
        default: null
    }
};

const currentClass = ({ horizontal, justify }) => {
    const classes = [baseClass];

    // horizontal/vertical
    classes.push(horizontal ? [horizontalClass] : [defaultClass]);

    // horizontal align
    switch (justify) {
        case 'end':
            classes.push(endClass);
            break;
        case 'between':
            classes.push(betweenClass);
            break;
        case 'start':
            classes.push(startClass);
            break;
        default:
            break;
    }

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
