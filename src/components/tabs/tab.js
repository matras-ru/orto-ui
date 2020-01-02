import { install } from '@/mixins';

const NAME = 'CTab';

export default {
    name: NAME,

    inheritAttrs: false,

    ...install,

    props: {
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
        const { activeClass, baseClass, defaultClass } = this.theme;

        return h('CListItem', { attrs: { role: 'presentation' } }, [
            h(
                'CLink',
                {
                    props: {
                        href: `#${this.name}`
                    },
                    attrs: {
                        role: 'tab',
                        'aria-selected': this.isActive ? 'true' : 'false',
                        tabindex: this.isActive ? null : '-1',
                        id: `tab-${this.name}`
                    },
                    on: {
                        click: () => this.$emit('onClick', this.name)
                    },
                    staticClass: baseClass,
                    class: [defaultClass, this.isActive ? activeClass : null]
                },
                this.label ? this.label : this.$slots.default
            )
        ]);
    }
};
