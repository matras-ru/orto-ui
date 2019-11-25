import { selfInstall } from '@/utils';
import radioCheckboxGroupMixin from '@/mixins/radio-checkbox-group';

export default {
    name: 'CCheckboxGroup',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxGroupMixin],

    props: {
        modelValue: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            type: 'checkbox-group'
        };
    }
};
