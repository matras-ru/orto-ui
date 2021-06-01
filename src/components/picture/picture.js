import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CPicture';
import { stringProp } from '@/utils';
import { getComponentConfig } from '@/config';

const NAME = 'CPicture';

const generateProps = () => {
    const screens = getComponentConfig('common', 'screens');
    const breakpoints = Object.keys(screens);

    const breakpointSources = breakpoints.reduce((prop, breakpoint) => {
        prop[breakpoint] = stringProp();
        return prop;
    }, Object.create(null));

    return {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        /**
          [
             { type: '', lg: null, md: null, sm: null }
          ]
         */
        formats: {
            type: Array,
            required: false
        },

        src: stringProp(),

        ...breakpointSources
    };
};

const createSources = (h, screens, props) => {
    const { formats } = props;
    if (formats == null || formats.length == null) return [];

    return formats.map(format => {
        const sizes = mapSizesAndScreens(screens, format);
        const type = format.type;

        return h('source', {
            attrs: {
                type: `image/${type}`,
                srcset: getSrcSet(sizes)
            }
        });
    });
};

const mapSizesAndScreens = (screens, sizes) => {
    const breakpoints = Object.keys(screens);

    return breakpoints
        .filter(breakpointKey => sizes[breakpointKey])
        .map(breakpointKey => ({
            breakpoint: breakpointKey,
            breakpointWidth: screens[breakpointKey].replace('px', ''),
            src: sizes[breakpointKey]
        }));
};

/**
 * get srcset attribute
 * @param mappedSizes: { breakpointWidth, src }
 * @returns string
 */
const getSrcSet = mappedSizes => {
    return mappedSizes
        .map(({ breakpointWidth, src }) => {
            return `${src} ${breakpointWidth}w`;
        })
        .join(', ');
};

const currentClass = ({ theme }) => {
    return theme.base;
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
        this.props = generateProps();

        return this.props;
    },

    render(h, { data, props, parent }) {
        const screens = parent.$ortoUIConfig.getConfigValue('common.screens');

        const mappedSizes = mapSizesAndScreens(screens, props);
        const srcset = getSrcSet(mappedSizes) || null;

        const imgData = {
            class: currentClass(props),
            attrs: {
                src: props.src,
                srcset
            }
        };

        const sources = createSources(h, screens, props);

        return h('picture', [...sources, h('img', mergeData(data, imgData))]);
    }
};
