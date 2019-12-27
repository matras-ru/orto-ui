import { getComponentConfig } from '@/config';
import { commonAttributes, install } from '@/mixins';
import { getHashMapValue } from '@/utils';

import defaultTheme from '@/themes/default/CLink';

const NAME = 'CLink';
const ANCHOR_TAG = 'a';
const validVariants = ['primary'];

const concat = (...args) => Array.prototype.concat.apply([], args);
const isRouterLink = tag => tag.toString().toLowerCase() !== ANCHOR_TAG;

const computeTag = ({ to, disabled } = {}, instance) => {
    return instance.$router && to && !disabled
        ? instance.$nuxt
            ? 'nuxt-link'
            : 'router-link'
        : ANCHOR_TAG;
};

const computeRel = ({ target, rel } = {}) => {
    if (target === '_blank' && isNull(rel)) {
        return 'noopener';
    }
    return rel || null;
};

const createThemeMap = ({ defaultClass, primaryClass }) => {
    return {
        variants: {
            primary: primaryClass,
            default: defaultClass
        }
    };
};

export const createProps = () => {
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
};

export default {
    name: NAME,
    inheritAttrs: false,
    ...install,
    props: {
        ...commonAttributes.props,
        ...createProps(),

        theme: {
            type: Object,
            default: () => defaultTheme
        },

        variant: {
            type: String,
            default: () => getComponentConfig(NAME, 'variant'),
            validator: value => validVariants.includes(value)
        },

        border: {
            type: Boolean,
            default: false
        },

        label: {
            type: String,
            default: null
        }
    },

    computed: {
        computedTag() {
            return computeTag({ to: this.to, disabled: this.disabled }, this);
        },

        isRouterLink() {
            return isRouterLink(this.computedTag);
        },

        computedRel() {
            return computeRel({ target: this.target, rel: this.rel });
        },

        computedProps() {
            return this.isRouterLink ? { ...this.$props, tag: this.routerTag } : {};
        },

        computedClass() {
            const { baseClass, disabledClass } = this.theme;
            const classes = [baseClass];

            if (this.disabled) {
                classes.push(disabledClass);
            }

            const { variants } = createThemeMap(this.theme);
            classes.push(getHashMapValue(variants, this.variant));

            return classes;
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
        const componentData = {
            class: this.computedClass,
            props: this.computedProps,
            attrs: {
                ...this.$attrs,
                rel: this.computeRel,
                target: this.target,
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
        } else {
            delete componentData.props.href;
        }

        return h(this.computedTag, componentData, this.label ? this.label : this.$slots.default);
    }
};
