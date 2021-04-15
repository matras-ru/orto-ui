import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CFormPanel';
import FormPanel from '@/mixins/form-panel';

const NAME = 'CFormPanel';

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [FormPanel],

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
