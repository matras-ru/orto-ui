import { selfInstall } from '@/utils';
import { mergeData } from 'vue-functional-data-merge';

import ThemeClass from '@/themes/default/CContainer';

const { baseClass, fluidClass } = ThemeClass;

const props = {
    tag: {
        type: String,
        default: 'div'
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

const currentClass = props => {
    let classes = [baseClass];

    if (props.fluid) classes.push(fluidClass);

    return classes;
};

export default {
    name: 'CContainer',

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
