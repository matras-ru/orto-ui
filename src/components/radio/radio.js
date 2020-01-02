import { install, radioCheckbox } from '@/mixins';

export const NAME = 'CRadio';

export default {
    name: NAME,

    mixins: [install, radioCheckbox],

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
