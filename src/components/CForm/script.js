import { selfInstall } from '@/utils';

import ThemeClass from '@/themes/default/CForm';

const { baseClass } = ThemeClass;

export default {
    name: 'Form',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        action: {
            type: String,
            default: null
        },
        method: {
            type: String,
            default: null
        }
    },

    methods: {
        onSubmit() {
            this.$emit('submit');
        }
    },

    render(h) {
        const attrs = {
            action: this.action,
            method: this.method
        };

        const on = {
            submit: this.onSubmit
        };

        const componentData = {
            class: baseClass,
            attrs: attrs,
            on
        };

        return h('form', componentData, this.$slots.default);
    }
};
