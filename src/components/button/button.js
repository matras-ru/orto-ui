import { mergeData } from 'vue-functional-data-merge';
import { noop, getHashMapValue } from '@/utils';
import { selfInstall } from '@/';

import { getComponentConfig } from '@/config';
import { createProps as createLinkProps } from '@/components/link/link.js';
import { CLink } from '@/components/link';
import DefaultTheme from '@/themes/default/CButton';

const NAME = 'CButton';
const validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
const validSizes = ['lg', 'md', 'sm'];
const validTagNames = ['button', 'a'];
const validTypes = ['submit', 'reset'];

// Button as Link helpers
const pluckProps = (keysToPluck, objToPluck) => {
    return Object.keys(keysToPluck).reduce((output, prop) => {
        output[prop] = objToPluck[prop];
        return output;
    }, {});
};

const linkProps = createLinkProps();
const isLink = props => Boolean(props.href || props.to || props.tag === 'a');
const computeLinkProps = props =>
    isLink(props) ? { ...pluckProps(linkProps, props), button: true } : {};

const createThemeMap = ({
    variantPrimary,
    variantSecondary,
    variantTertiary,
    variantQuaternary,
    variantQuinary,
    sizeLg,
    sizeSm,
    sizeMd
}) => {
    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            quinary: variantQuinary
        },

        sizes: {
            lg: sizeLg,
            md: sizeMd,
            sm: sizeSm
        }
    };
};

const props = {
    ...linkProps,

    theme: {
        type: Object,
        default: () => DefaultTheme
    },

    disabled: {
        type: Boolean,
        default: false
    },

    tag: {
        type: String,
        default: () => getComponentConfig(NAME, 'tag'),
        validator: value => validTagNames.includes(value)
    },

    label: {
        type: String,
        default: null
    },

    type: {
        type: String,
        default: null,
        validator: value => validTypes.includes(value)
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

    block: {
        type: Boolean,
        default: false
    }
};

const currentClass = ({ disabled, size, variant, block, theme }) => {
    const { base, stateDisable, displayBlock } = theme;
    const { sizes, variants } = createThemeMap(theme);
    const classes = [base];

    classes.push(getHashMapValue(sizes, size));
    classes.push(getHashMapValue(variants, variant));

    if (disabled) {
        classes.push(stateDisable);
    }

    if (block) {
        classes.push(displayBlock);
    }

    return classes;
};

const computeAttrs = props => {
    const link = isLink(props);

    return {
        type: !link ? props.type : null,
        disabled: props.disabled
    };
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { data, props, listeners, children }) {
        const link = isLink(props);

        const onClick = listeners['onClick'] || noop;

        const on = {
            click(e) {
                if (props.disabled) {
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                onClick(e);
            }
        };

        const componentData = {
            class: currentClass(props),
            props: computeLinkProps(props),
            attrs: computeAttrs(props),
            on
        };

        return h(
            link ? CLink : props.tag,
            mergeData(data, componentData),
            props.label ? props.label : children
        );
    }
};
