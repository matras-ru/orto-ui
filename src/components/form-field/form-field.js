import { selfInstall } from '@/';
import CFormField from '@/mixins/form-field';
import DefaultTheme from '@/themes/default/CFormField';

export default {
    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [CFormField],

    props: {
        theme: {
            type: Object,
            default: () => DefaultTheme
        }
    },

    methods: {
        getControl(h) {
            return h('div', [this.$slots.default]);
        }
    }
};
