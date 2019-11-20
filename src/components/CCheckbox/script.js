import { selfInstall } from '@/utils';
import commonAttributes from '@/mixins/commonAttributes.js';

import ThemeClass from '@/themes/default/CCheckbox';

const {
    disabledClass,
    baseIconClass,
    defaultIconClass,
    checkedIconClass,
    disabledIconClass
} = ThemeClass;

export default {
    name: 'Checkbox',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        ...commonAttributes.props,
        label: {
            type: String,
            default: null
        },
        hint: {
            type: String,
            default: null
        },
        modelValue: {
            type: [Array, Boolean],
            default: null
        },
        value: {
            type: [String, Number],
            default: null
        },
        trueValue: {
            type: Boolean,
            default: true
        },
        falseValue: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    data() {
        return {
            isChecked: false
        };
    },

    computed: {
        currentClass() {
            let classes = ['flex mb-1-4'];

            if (this.disabled) {
                classes.push(disabledClass);
            }

            return classes;
        },
        currentIconClass() {
            let classes = [baseIconClass];

            if (this.disabled) {
                classes.push(disabledIconClass);
            } else if (this.isChecked || this.shouldBeChecked) {
                classes.push(checkedIconClass);
            } else {
                classes.push(defaultIconClass);
            }

            return classes;
        },
        shouldBeChecked() {
            if (this.modelValue instanceof Array) {
                return this.modelValue.includes(this.value);
            }

            return this.modelValue === this.trueValue;
        }
    },

    methods: {
        onChange(e) {
            this.isChecked = e.target.checked;

            if (this.modelValue instanceof Array) {
                let newValue = [...this.modelValue];

                if (this.isChecked) {
                    newValue.push(this.value);
                } else {
                    newValue.splice(newValue.indexOf(this.value), 1);
                }

                this.$emit('change', newValue);
            } else {
                this.$emit('change', this.isChecked ? this.trueValue : this.falseValue);
            }
        }
    },

    render(h) {
        const attrs = {
            id: this.id,
            autofocus: this.autofocus,
            name: this.name,
            type: 'checkbox',
            label: this.label,
            value: this.value,
            disabled: this.disabled
        };

        const on = {
            change: this.onChange
        };

        const componentData = {
            class: 'absolute opacity-0 pointer-events-none',
            attrs: attrs,
            on
        };

        return h('label', { class: this.currentClass }, [
            h('input', componentData),
            h('div', { class: 'flex' }, [
                h('span', { class: this.currentIconClass }),
                h('span', this.label)
            ])
        ]);
    }
};
