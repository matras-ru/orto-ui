import { selfInstall } from '@/utils';
import radioCheckboxGroupMixin from '@/mixins/radio-checkbox-group';

export default {
    name: 'CRadioGroup',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxGroupMixin],

    props: {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        }
    },

    data() {
        return {
            type: 'radio-group'
        };
    }
};
