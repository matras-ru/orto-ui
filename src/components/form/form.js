import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CForm';

const NAME = 'CForm';

const props = {
    theme: {
        type: Object,
        default: () => DefaultTheme
    }
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props, data, children }) {
        const { base } = props.theme;

        const componentData = {
            staticClass: base
        };

        return h('form', mergeData(data, componentData), children);
    }
};
