import { selfInstall } from '@/utils';
import { baseClass } from '@/themes/default/CForm';

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
        const componentData = {
            staticClass: baseClass,
            attrs: {
                action: this.action,
                method: this.method
            },
            on: {
                submit: this.onSubmit
            }
        };

        return h('form', componentData, this.$slots.default);
    }
};
