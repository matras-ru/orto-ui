import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CPicture';
import { stringProp } from '@/utils';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@root/tailwind.config.js';

/* TODO: MVP

- type
- size
...

*/

const NAME = 'CPicture';

const {
    theme: { screens }
} = resolveConfig(tailwindConfig);

const breakpoints = Object.keys(screens);

const generateProps = () => {
    const breakpointSources = breakpoints.reduce((prop, breakpoint) => {
        prop[breakpoint] = stringProp();
        return prop;
    }, Object.create(null));

    return {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        // TODO: more types
        type: {
            type: String,
            default: 'jpg'
        },

        lazy: {
            type: Boolean,
            default: false
        },

        src: stringProp(),

        ...breakpointSources
    };
};

const createSources = (h, breakpoints, props) =>
    breakpoints.map(br => {
        if (props[br]) {
            return h('source', {
                attrs: {
                    type: `image/${props.type}`,
                    srcset: props[br],
                    media: `(min-width: ${screens[br]})`
                }
            });
        }
    });

const currentClass = ({ theme }) => {
    const { base } = theme;
    const classes = [base];

    return classes;
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

    render(h, { data, props }) {
        const imgData = {
            class: currentClass(props),
            attrs: {
                src: props.src,
                loading: props.lazy ? 'lazy' : null
            }
        };

        const sources = createSources(h, breakpoints, props);

        return h('picture', [...sources, h('img', mergeData(data, imgData))]);
    }
};
