import { selfInstall } from '@/utils';

import ThemeClass from '@/themes/default/CLabel';

const { baseClass, defaultClass } = ThemeClass;

const props = {
    for: {
        type: String,
        default: null
    }
};
/**
 * @description
 *
 * @return {Array}
 */
const currentClass = props => {
    let classes = [baseClass];

    switch (props.variant) {
        default:
            classes.push(defaultClass);
            break;
    }

    return classes;
};

/**
 *
 * @return {Object}
 */

const getAttributes = props => {
    return {
        for: props.for
    };
};

export default {
    name: 'Label',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props, children }) {
        const componentData = {
            class: currentClass(props),
            attrs: getAttributes(props)
        };

        return h('label', componentData, children);
    }
};
