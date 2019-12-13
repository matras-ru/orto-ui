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

export default {
    name: NAME,

    inheritAttrs: false,

    ...install,

    props: {
        ...commonAttributes.props,

        theme: {
            type: Object,
            default: () => defaultTheme
        },

        variant: {
            type: String,
            default: () => getComponentConfig(NAME, 'variant'),
            validator: value => validVariants.includes(value)
        },

        label: {
            type: String,
            default: null
        },

        href: {
            type: String,
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        },

        target: {
            type: String,
            default: () => getComponentConfig(NAME, 'target')
        },

        rel: {
            type: String,
            default: null
        },

        // router specific props
        to: {
            type: [String, Object],
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
                tabindex: this.disabled
                    ? '-1'
                    : Boolean(this.$attrs.tabindex)
                    ? null
                    : this.$attrs.tabindex,
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
