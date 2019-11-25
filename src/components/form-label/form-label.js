import { selfInstall } from '@/utils';

import { baseClass, primaryClass } from '@/themes/default/CFormLabel';

const validVariants = ['primary'];

const props = {
    variant: {
        type: String,
        default: 'primary',
        validator: value => validVariants.includes(value)
    },

    for: {
        type: String,
        default: null
    }
};

const currentClass = ({ variant }) => {
    const classes = [baseClass];

    switch (variant) {
        case 'primary':
            classes.push(primaryClass);
            break;
    }

    return classes;
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
            attrs: {
                for: props.for
            }
        };

        return h('label', componentData, children);
    }
};
