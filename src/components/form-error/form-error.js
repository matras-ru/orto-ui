import { selfInstall } from '@/utils';

import { baseClass, defaultClass } from '@/themes/default/CFormError';

export default {
    name: 'Error',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    render(h, { children }) {
        const componentData = {
            staticClass: [baseClass, defaultClass]
        };

        return h('div', componentData, children);
    }
};
