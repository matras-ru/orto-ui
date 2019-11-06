import { selfInstall } from '@/utils';

import ThemeClass from '@/themes/default/CError';

const { baseClass, defaultClass } = ThemeClass;

const props = {};

export default {
    name: 'Error',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { children }) {
        const componentData = {
            class: [baseClass, defaultClass]
        };

        return h('div', componentData, children);
    }
};
