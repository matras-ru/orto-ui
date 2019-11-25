import { selfInstall } from '@/utils';
import { mergeData } from 'vue-functional-data-merge';

import ThemeClass from '@/themes/default/CList';

const { baseClass, defaultClass, horizontalClass, startClass, endClass, betweenClass } = ThemeClass; // TODO: flex-class вынести

const props = {
    tag: {
        type: String,
        default: 'ul'
    },

    horizontal: {
        type: Boolean,
        default: false
    },

    justify: {
        type: String,
        default: null
    }
};

const currentClass = props => {
    let classes = [...baseClass];

    // horizontal/vertical
    classes.push(props.horizontal ? [...horizontalClass] : [...defaultClass]);

    // horizontal align
    switch (props.justify) {
        case 'end':
            classes.push(...endClass);
            break;
        case 'between':
            classes.push(...betweenClass);
            break;
        case 'start':
            classes.push(...startClass);
            break;
        default:
            break;
    }

    return classes;
};

export default {
    name: 'List',

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
