import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CContainer';

const props = {
    theme: {
        type: Object,
        default: () => DefaultTheme
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

const currentClass = ({ fluid, theme }) => {
    const { base, modeFluid } = theme;
    const classes = [base];

    if (fluid) classes.push(modeFluid);

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

        return h('div', mergeData(data, componentData), children);
    }
};
