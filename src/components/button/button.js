import { mergeData } from 'vue-functional-data-merge';
import { noop, getHashMapValue } from '@/utils';
import { commonAttributes, install } from '@/mixins';
import { getComponentConfig } from '@/config';
import defaultTheme from '@/themes/default/CButton';
import { default as CLink, createProps as creatLinkProps } from '@/components/link/link';

const NAME = 'CButton';
const validVariants = ['primary', 'secondary', 'tertiary', 'quaternary'];
const validSizes = ['lg', 'md', 'sm'];
const validTagNames = ['button', 'a'];
const validTypes = ['button', 'submit'];

// Button as Link helpers start
const pluckProps = (keysToPluck, objToPluck) => {
    return Object.keys(keysToPluck).reduce((output, prop) => {
        output[prop] = objToPluck[prop];
        return output;
    }, {});
};

const linkProps = creatLinkProps();
const isLink = props => Boolean(props.href || props.to || props.tag === 'a');
const computeLinkProps = props => (isLink(props) ? pluckProps(linkProps, props) : null);
// end

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

const props = {
    ...commonAttributes.props,

    ...linkProps,

    theme: {
        type: Object,
        default: () => defaultTheme
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
        default: () => getComponentConfig(NAME, 'type'),
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
    }
};

const currentClass = ({ disabled, size, variant, theme }) => {
    const { baseClass, disabledClass } = theme;
    const { sizes, variants } = createThemeMap(theme);
    const classes = [baseClass];

    classes.push(getHashMapValue(sizes, size));
    classes.push(getHashMapValue(variants, variant));

    if (disabled) {
        classes.push(disabledClass);
    }

    return classes;
};

const computeAttrs = (props, data) => {
    const link = isLink(props);
    const role = data?.attrs?.role;

    return {
        type: !link ? props.type : null,
        disabled: props.disabled,
        role: role
    };
};

export default {
    name: NAME,

    functional: true,

    ...install,

    props,

    render(h, { data, props, listeners, children }) {
        const link = isLink(props);

        const onClick = listeners['onClick'] || noop;

        const on = {
            click(e) {
                if (props.disabled) {
                    evt.stopPropagation();
                    evt.preventDefault();
                } else {
                    onClick(e);
                }
            }
        };

        const componentData = {
            class: currentClass(props),
            props: computeLinkProps(props),
            attrs: computeAttrs(props, data),
            on
        };

        return h(
            link ? CLink : props.tag,
            mergeData(data, componentData),
            props.label ? props.label : children
        );
    }
};
