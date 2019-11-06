import { selfInstall } from '@/utils';

import ThemeClass from '@/themes/default/CFormGroup';

const { baseClass } = ThemeClass;

const props = {};

export default {
    name: 'FormGroup',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { children }) {
        const componentData = {
            class: baseClass
        };

        return h('div', componentData, children);
    }
};
