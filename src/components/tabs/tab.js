import { selfInstall } from '@/';
import DefaultTheme from '@/themes/default/CTab';

const NAME = 'CTab';

export default {
    name: NAME,

    inheritAttrs: false,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        label: {
            type: String,
            default: null
        },

        name: {
            type: String,
            default: null
        },

        isActive: {
            type: Boolean,
            default: false
        }
    },

    render(h) {
        const { base, stateDefault, stateActive } = this.theme;

        return h('CListItem', { attrs: { role: 'presentation' } }, [
            h(
                'CLink',
                {
                    props: {
                        href: `#${this.name}`,
                        variant: 'secondary'
                    },
                    attrs: {
                        role: 'tab',
                        'aria-selected': this.isActive ? 'true' : 'false',
                        tabindex: this.isActive ? null : '-1',
                        id: `tab-${this.name}`
                    },
                    on: {
                        click: e => {
                            e.preventDefault();
                            return this.$emit('onClick', this.name);
                        }
                    },
                    staticClass: base,
                    class: [stateDefault, this.isActive ? stateActive : null]
                },
                this.label ? this.label : this.$slots.default
            )
        ]);
    }
};
