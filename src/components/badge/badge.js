import { mergeData } from 'vue-functional-data-merge';
import { getHashMapValue, selfInstall } from '@/utils';

import { getComponentConfig } from '@/config';
import DefaultTheme from '@/themes/default/CBadge';

const NAME = 'CBadge';
const validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
const validSizes = ['lg', 'md', 'sm'];

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
    theme: {
        type: Object,
        default: () => DefaultTheme
    },

    label: {
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
    }
};

const currentClass = ({ size, variant, theme }) => {
    const { base } = theme;
    const { variants, sizes } = createThemeMap(theme);
    const classes = [base];

    classes.push(getHashMapValue(variants, variant));

    // TODO: Unit
    classes.push(getHashMapValue(sizes, size));

    return classes;
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { data, props, children }) {
        const componentData = {
            class: currentClass(props)
        };

        return h('span', mergeData(data, componentData), props.label ? props.label : children);
    }
};
