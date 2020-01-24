import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/';
import { getComponentConfig } from '@/config';
import { numProp } from '@/utils';
import DefaultTheme from '@/themes/default/CCol';

const NAME = 'CCol';

const breakpoints = getComponentConfig('common', 'screens');

const generateProps = () => {
    const breakpointCols = breakpoints.reduce((prop, breakpoint) => {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    return {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        cols: {
            type: Number,
            default: null
        },

        ...breakpointCols
    };
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps());
    },

    render(h, { data, props, children }) {
        const { base } = props.theme;

        const componentData = {
            staticClass: base,
            cols: {
                default: props.cols,
                ...breakpoints.reduce((output, item) => {
                    output[item] = props[item];
                    return output;
                }, Object.create(null))
            }
        };

        return h('div', mergeData(data, componentData), children);
    }
};
