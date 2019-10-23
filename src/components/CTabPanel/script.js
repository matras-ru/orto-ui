import { selfInstall } from '@/utils';

export default {
    name: 'CTabPanel',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
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
        return h(
            'section',
            {
                staticClass: 'outline-none select-none',
                attrs: {
                    role: 'tabpanel',
                    id: this.name,
                    'aria-labelledby': `tab-${this.name}`,
                    tabindex: '-1',
                    hidden: !this.isActive
                }
            },
            [this.$slots.default]
        );
    }
};
