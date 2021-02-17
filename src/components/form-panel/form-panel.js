import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CFormPanel';

const NAME = 'CFormPanel';

export default {
    name: NAME,

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

        collapsible: {
            type: Boolean,
            default: false
        },

        collapsed: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            open: true
        };
    },

    created() {
        this.open = !this.collapsed;
    },

    methods: {
        toggle() {
            this.open = !this.open;
        }
    },

    render(h) {
        const { headerBase, wrapperBase } = this.theme;

        return h(
            'div',
            {
                staticClass: wrapperBase
            },
            [
                this.label
                    ? h(
                          'header',
                          {
                              staticClass: headerBase
                          },
                          [h('div', this.label)]
                      )
                    : null,

                this.open ? h('div', [this.$slots.default]) : null
            ]
        );
    }
};
