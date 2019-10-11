import { selfInstall, noop } from '@/utils';
import commonAttributes from '@/mixins/commonAttributes.js';

import ThemeClass from '@/themes/default/CButton';

const {
    baseClass,
    defaultClass,
    primaryClass,
    secondaryClass,
    tertiaryClass,
    quaternaryClass,
    disabledClass,
    defaultSizeClass,
    largeSizeClass,
    smallSizeClass
} = ThemeClass;

const validTagNames = ['button', 'a'];

const validVariants = ['primary', 'secondary', 'tertiary', 'quaternary'];

const validSizes = ['lg', 'sm'];

const props = {
    ...commonAttributes.props,
    tagName: {
        type: String,
        default: 'button',
        validator: value => validTagNames.indexOf(value) !== -1
    },
    label: {
        type: String,
        default: null
    },
    value: {
        type: [String, Number],
        default: null
    },
    type: {
        type: String,
        default: null
    },
    href: {
        type: String,
        default: null
    },
    variant: {
        type: String,
        default: null,
        validator: value => value === null || validVariants.indexOf(value) !== -1
    },
    size: {
        type: String,
        default: null,
        validator: value => value === null || validSizes.indexOf(value) !== -1
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
/**
 * @description
 *
 * @return {Array}
 */
const currentClass = props => {
    let classes = [baseClass];

    if (props.disabled) {
        classes.push(disabledClass);
    }

    switch (props.size) {
        case 'sm':
            classes.push(smallSizeClass);
            break;
        case 'lg':
            classes.push(largeSizeClass);
            break;
        default:
            classes.push(defaultSizeClass);
            break;
    }

    switch (props.variant) {
        case 'primary':
            classes.push(primaryClass);
            break;
        case 'secondary':
            classes.push(secondaryClass);
            break;
        case 'tertiary':
            classes.push(tertiaryClass);
            break;
        case 'quaternary':
            classes.push(quaternaryClass);
            break;
        default:
            classes.push(defaultClass);
            break;
    }

    return classes;
};

const componentToRender = props => {
    // if (this.isARouterLink) {
    //     return (
    //         this.$options.components.NuxtLink ||
    //         this.$options.components.RouterLink
    //     );
    // }

    if (props.href) {
        return 'a';
    }

    return props.tagName;
};

/**
 *
 * @return {Object}
 */

const getAttributes = props => {
    // if (props.isARouterLink) {
    //     return {
    //         to: props.to,
    //         replace: props.replace,
    //         append: props.append,
    //         tag: props.tagName,
    //         activeClass: props.activeClass,
    //         exact: props.exact,
    //         event: ['click', 'focus', 'blur'],
    //         exactActiveClass: props.exactActiveClass,
    //         id: props.id,
    //         value: props.value,
    //         autofocus: props.autofocus,
    //         disabled: props.disabled,
    //         name: props.name,
    //         type: props.type
    //     };
    // }

    return {
        id: props.id,
        value: props.value,
        autofocus: props.autofocus,
        disabled: props.disabled,
        name: props.name,
        href: props.href,
        type: props.type
    };
};

export default {
    name: 'Button',

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
            attrs: getAttributes(props),
            on
        };

        return h(componentToRender(props), componentData, props.label ? props.label : children);
    }
};
