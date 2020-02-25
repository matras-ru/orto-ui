import { mergeData } from 'vue-functional-data-merge';
import { getHashMapValue } from '@/utils';
import { selfInstall } from '@/';

import { getComponentConfig } from '@/config';
import DefaultTheme from '@/themes/default/CBadge';

const NAME = 'CBadge';
const validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

const createThemeMap = ({
    variantPrimary,
    variantSecondary,
    variantTertiary,
    variantQuaternary,
    variantQuinary
}) => {
    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            quinary: variantQuinary
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
    }
};

const currentClass = ({ disabled, size, variant, block, theme }) => {
    const { base } = theme;
    const { variants } = createThemeMap(theme);
    const classes = [base];

    classes.push(getHashMapValue(variants, variant));

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

        return h('div', mergeData(data, componentData), props.label ? props.label : children);
    }
};
