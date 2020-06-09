import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/utils/index.js';
import { getComponentConfig } from '@/config';
import { numProp, suffixPropName } from '@/utils';
import DefaultTheme from '@/themes/default/CCol';

const OFFSET_PROP_NAME = 'offset';
const NAME = 'CCol';

const breakpoints = getComponentConfig('common', 'screens');

const generateProps = () => {
    const breakpointCols = breakpoints.reduce((prop, breakpoint) => {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    const breakpointOffsets = breakpoints.reduce((prop, breakpoint) => {
        prop[suffixPropName(breakpoint, OFFSET_PROP_NAME)] = numProp();
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

        ...breakpointCols,

        [OFFSET_PROP_NAME]: {
            type: Number,
            default: null
        },

        ...breakpointOffsets
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
            },
            offset: {
                default: props.offset,
                // TODO: refactoring, dry
                ...breakpoints.reduce((output, item) => {
                    output[item] = props[suffixPropName(item, OFFSET_PROP_NAME)];
                    return output;
                }, Object.create(null))
            }
        };

        return h('div', mergeData(data, componentData), children);
    }
};
