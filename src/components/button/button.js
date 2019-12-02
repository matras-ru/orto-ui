import { selfInstall, noop } from '@/utils';
import commonAttributes from '@/mixins/commonAttributes.js';
import defaultTheme from '@/themes/default/CButton';

import { getComponentConfig } from '@/config';

const NAME = 'CButton';
const validVariants = ['primary', 'secondary', 'tertiary', 'quaternary'];
const validSizes = ['lg', 'md', 'sm'];
const validTagNames = ['button', 'a'];
const validTypes = ['button', 'submit'];

/**
 * @description
 * @param {obj} theme
 * @returns {obj}
 */
const createThemeMap = ({
    defaultClass,
    primaryClass,
    secondaryClass,
    tertiaryClass,
    quaternaryClass,
    largeSizeClass,
    smallSizeClass,
    defaultSizeClass
}) => {
    return {
        variants: {
            primary: primaryClass,
            secondary: secondaryClass,
            tertiary: tertiaryClass,
            quaternary: quaternaryClass,
            default: defaultClass
        },

        sizes: {
            lg: largeSizeClass,
            md: defaultSizeClass,
            sm: smallSizeClass,
            default: defaultSizeClass
        }
    };
};

const getClass = (themeMap, key) => {
    return themeMap[key] || themeMap.default;
};

const props = {
    ...commonAttributes.props,

    theme: {
        type: Object,
        default: () => defaultTheme
    },

    tag: {
        type: String,
        default: () => getComponentConfig(NAME, 'tag'), // TODO: default value -> global.config
        validator: value => validTagNames.includes(value)
    },

    label: {
        type: String,
        default: null
    },

    type: {
        type: String,
        default: () => getComponentConfig(NAME, 'type'), // TODO: default value -> global.config
        validator: value => validTypes.includes(value)
    },

    href: {
        type: String,
        default: null
    },

    variant: {
        type: String,
        default: () => getComponentConfig(NAME, 'variant'),
        validator: value => validVariants.includes(value)
    },

    size: {
        type: String,
        default: () => getComponentConfig(NAME, 'size'),
        validator: value => validSizes.includes(value)
    },

    activeClass: {
        type: String,
        default: 'router-link-active'
    },

    exactActiveClass: {
        type: String,
        default: 'router-link-exact-active'
    }
};

const currentClass = ({ disabled, size, variant, theme }) => {
    const { baseClass, disabledClass } = theme;

    const classes = [baseClass];

    const { sizes, variants } = createThemeMap(theme);

    classes.push(getClass(sizes, size));
    classes.push(getClass(variants, variant));

    if (disabled) {
        classes.push(disabledClass);
    }

    return classes;
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props, listeners, children }) {
        const onClick = listeners['onClick'] || noop;
        const onFocus = listeners['onFocus'] || noop;
        const onBlur = listeners['onBlur'] || noop;

        const on = {
            click(e) {
                onClick(e);
            },

            focus(e) {
                onFocus(e);
            },

            blur(e) {
                onBlur(e);
            }
        };

        const componentData = {
            class: currentClass(props),
            attrs: {
                id: props.id,
                autofocus: props.autofocus,
                disabled: props.disabled,
                name: props.name,
                href: props.href,
                type: props.type
            },
            on
        };

        return h(props.tag, componentData, props.label ? props.label : children);
    }
};
