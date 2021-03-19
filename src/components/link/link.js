import { getComponentConfig } from '@/config';
import { selfInstall } from '@/utils/index.js';
import { getHashMapValue } from '@/utils';
import DefaultTheme from '@/themes/default/CLink';

const NAME = 'CLink';
const LINK_TAG = 'a';
const SPAN_TAG = 'span';
const validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

const concat = (...args) => Array.prototype.concat.apply([], args);
const isRouterLink = tag => ![LINK_TAG, SPAN_TAG].includes(tag.toString().toLowerCase());

const computeTag = ({ to, disabled, href }, instance) => {
    return instance.$router && to && !disabled
        ? instance.$nuxt
            ? 'nuxt-link'
            : 'router-link'
        : href
        ? LINK_TAG
        : SPAN_TAG;
};

const computeRel = ({ target, rel } = {}) => {
    if (target === '_blank' && isNull(rel)) {
        return 'noopener';
    }
    return rel || null;
};

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

export function createProps() {
    return {
        href: {
            type: String,
            default: null
        },

        target: {
            type: String,
            default: () => getComponentConfig(NAME, 'target')
        },

        rel: {
            type: String,
            default: null
        },

        // router specific props ref: https://router.vuejs.org/api/#router-link
        to: {
            type: [String, Object],
            default: null
        },

        append: {
            type: Boolean,
            default: false
        },

        event: {
            type: [String, Array],
            default: 'click'
        },

        replace: {
            type: Boolean,
            default: false
        },

        activeClass: {
            type: String,
            default: 'router-link-active'
        },

        routerTag: {
            type: String,
            default: 'a'
        },

        exact: {
            type: Boolean,
            default: false
        },

        exactActiveClass: {
            type: String,
            default: 'router-link-exact-active'
        },

        // nuxt-link specific prop(s)
        noPrefetch: {
            type: Boolean,
            default: false
        }
    };
}

export default {
    name: NAME,

    inheritAttrs: false,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        ...createProps(),

        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        button: {
            type: Boolean,
            default: false
        },

        variant: {
            type: String,
            default: () => getComponentConfig(NAME, 'variant'),
            validator: value => validVariants.includes(value)
        },

        inline: {
            type: Boolean,
            default: false
        },

        label: {
            type: String,
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        computedTag() {
            return computeTag({ to: this.to, disabled: this.disabled, href: this.href }, this);
        },

        isRouterLink() {
            return isRouterLink(this.computedTag);
        },

        computedProps() {
            return this.isRouterLink ? { ...this.$props, tag: this.routerTag } : {};
        }
    },

    methods: {
        onClick(e) {
            const isEvent = e instanceof Event;
            const suppliedHandler = this.$listeners.click;

            if (isEvent && this.disabled) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            } else {
                if (this.isRouterLink && e.currentTarget.__vue__) {
                    e.currentTarget.__vue__.$emit('click', e);
                }

                // Call the suppliedHandler(s), if any provided
                concat(suppliedHandler)
                    .filter(h => h instanceof Function)
                    .forEach(handler => {
                        handler(...arguments);
                    });

                // Emit the global $root click event
                this.$root.$emit('clicked::link', e);
            }

            // Stop scroll-to-top behavior or navigation on
            // regular links when href is just '#'
            if (isEvent && (this.disabled || (!this.isRouterLink && this.href === '#'))) {
                e.preventDefault();
            }
        }
    },

    render(h) {
        const computedClass = () => {
            if (this.button) return;

            const { base, stateDisable, inlineType, inlineBlockType } = this.theme;
            const classes = [base];

            classes.push(this.inline ? inlineType : inlineBlockType);

            if (this.disabled) {
                classes.push(stateDisable);
            }

            const { variants } = createThemeMap(this.theme);
            classes.push(getHashMapValue(variants, this.variant));

            return classes;
        };

        const componentData = {
            class: computedClass(),
            props: this.computedProps,
            attrs: {
                ...this.$attrs,
                tabindex: this.disabled ? '-1' : this.$attrs.tabindex ? this.$attrs.tabindex : null,
                'aria-disabled': this.disabled ? 'true' : null
            },

            [this.isRouterLink ? 'nativeOn' : 'on']: {
                ...this.$listeners,
                click: this.onClick
            }
        };

        if (this.href) {
            componentData.attrs.href = this.href;
            componentData.attrs.target = this.target;
            componentData.attrs.rel = this.computeRel;
        } else {
            delete componentData.attrs.href;
            delete componentData.attrs.target;
            delete componentData.attrs.rel;
        }

        return h(this.computedTag, componentData, this.label ? this.label : this.$slots.default);
    }
};
