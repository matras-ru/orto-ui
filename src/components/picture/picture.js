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

        lazy: {
            type: Boolean,
            default: false
        },

        ...breakpointSources
    };
};

const createSources = (h, screens, props) => {
    const { formats } = props;
    if (formats == null) return [];

    const formatsWithSizes = formats.map(format => {
        const sizes = mapSizesAndScreens(screens, format);

        return { type: format.type, sizes };
    });

    return formatsWithSizes.reduce((acc, format) => {
        const { type, sizes } = format;

        acc.push(
            h('source', {
                attrs: {
                    type: `image/${type}`,
                    srcset: getSrcSet(screens, sizes)
                }
            })
        );

        return acc;
    }, []);
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

const getSrcSet = (screens, mappedSizes) => {
    return mappedSizes.reduce((acc, { breakpointWidth, src }, index) => {
        const delimiter = index !== mappedSizes.length - 1 ? ', ' : '';

        acc += `${src} ${breakpointWidth}w${delimiter}`;

        return acc;
    }, '');
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
        const srcset = getSrcSet(screens, mappedSizes) || null;

        const imgData = {
            class: currentClass(props),
            attrs: {
                src: props.src,
                srcset,
                loading: props.lazy ? 'lazy' : null
            }
        };

        const sources = createSources(h, screens, props);

        return h('picture', [...sources, h('img', mergeData(data, imgData))]);
    }
};
