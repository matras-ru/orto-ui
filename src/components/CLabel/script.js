import { selfInstall } from '@/utils';

import ThemeClass from '@/themes/default/CLabel';

const { baseClass, primaryClass } = ThemeClass;

const validVariants = ['primary'];

const props = {
    variant: {
        type: String,
        default: null,
        validator: value => value === null || validVariants.includes(value)
    },
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
        case 'primary':
            classes.push(primaryClass);
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
