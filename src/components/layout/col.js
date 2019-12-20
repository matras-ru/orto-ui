import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { getComponentConfig } from '@/config';
import defaultTheme from '@/themes/default/CCol';

const NAME = 'CCol';

const NumProp = () => ({
    type: Number,
    default: null
});

const breakpoints = getComponentConfig('common', 'screens');

const generateProps = () => {
    const breakpointCols = breakpoints.reduce((prop, breakpoint) => {
        prop[breakpoint] = NumProp();
        return prop;
    }, Object.create(null));

    return {
        theme: {
            type: Object,
            default: () => defaultTheme
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
    ...install,
    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps());
    },

    render(h, { data, props, children }) {
        const { baseClass } = props.theme;

        const componentData = {
            staticClass: baseClass,
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
