import { selfInstall } from '@/utils';
import radioCheckboxMixin from '@/mixins/radio-checkbox';

export default {
    name: 'CRadio',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxMixin],

    props: {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },

        value: {
            type: [String, Number, Boolean],
            default: null
        }
    },

    data() {
        return {
            type: 'radio'
        };
    },

    computed: {
        shouldBeChecked() {
            return this.modelValue === this.value;
        }
    },

    methods: {
        onChange(e) {
            if (e.target.checked) {
                this.$emit('change', this.value);
            }
        }
    }
};
