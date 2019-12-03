import { install, radioCheckbox } from '@/mixins';
import { getComponentConfig } from '@/config';

export const NAME = 'CCheckbox';

export default {
    name: NAME,

    mixins: [install, radioCheckbox],

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
            default: () => getComponentConfig(NAME, 'trueValue')
        },

        falseValue: {
            type: [String, Number, Boolean],
            default: () => getComponentConfig(NAME, 'falseValue')
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
            const checked = e.target.checked;

            if (this.modelValue instanceof Array) {
                const newValue = [...this.modelValue];

                if (checked) {
                    newValue.push(this.value);
                } else {
                    newValue.splice(newValue.indexOf(this.value), 1);
                }

                this.$emit('change', newValue);
            } else {
                this.$emit('change', checked ? this.trueValue : this.falseValue);
            }
        }
    }
};
