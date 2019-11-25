import { selfInstall } from '@/utils';
import radioCheckboxMixin from '@/mixins/radio-checkbox';

export default {
    name: 'CCheckbox',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxMixin],

    props: {
        modelValue: {
            type: [Array, Boolean],
            default: null
        },

        value: {
            type: [String, Number],
            default: null
        },

        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },

        falseValue: {
            type: [String, Number, Boolean],
            default: false
        }
    },

    data() {
        return {
            type: 'checkbox'
        };
    },

    computed: {
        shouldBeChecked() {
            if (this.modelValue instanceof Array) {
                return this.modelValue.includes(this.value);
            }

            return this.modelValue === this.trueValue;
        }
    },

    methods: {
        onChange(e) {
            if (this.modelValue instanceof Array) {
                let newValue = [...this.modelValue];

                if (e.target.checked) {
                    newValue.push(this.value);
                } else {
                    newValue.splice(newValue.indexOf(this.value), 1);
                }

                this.$emit('change', newValue);
            } else {
                this.$emit('change', e.target.checked ? this.trueValue : this.falseValue);
            }
        }
    }
};
