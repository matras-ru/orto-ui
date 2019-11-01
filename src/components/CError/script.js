import { selfInstall } from '@/utils';

import ThemeClass from '@/themes/default/CError';

const { baseClass, defaultClass } = ThemeClass;

const currentClass = props => {
    let classes = [baseClass];

    switch (props.variant) {
        default:
            classes.push(defaultClass);
            break;
    }

    return classes;
};

export default {
    name: 'Error',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    render(h, { props, children }) {
        const componentData = {
            class: currentClass(props)
        };

        return h('div', componentData, children);
    }
};
