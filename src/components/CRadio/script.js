import { selfInstall } from '@/utils';
import commonAttributes from '@/mixins/commonAttributes.js';

import ThemeClass from '@/themes/default/CRadio';

const {
    disabledClass,
    baseIconClass,
    defaultIconClass,
    checkedIconClass,
    disabledIconClass,
    labelClass,
    inputClass,
    wrapperClass
} = ThemeClass;

export default {
    name: 'Radio',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        ...commonAttributes.props,
        label: {
            type: String,
            default: null
        },
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },
        value: {
            type: [String, Number, Boolean],
            default: null
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
            let classes = [labelClass];

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
            return this.modelValue === this.value;
        }
    },

    methods: {
        onChange(e) {
            this.$emit('change', e.target.checked ? this.value : null);
        }
    },

    render(h) {
        const attrs = {
            id: this.id,
            autofocus: this.autofocus,
            name: this.name,
            type: 'radio',
            disabled: this.disabled
        };

        const domProps = {
            checked: this.shouldBeChecked,
            value: this.value
        };

        const on = {
            change: this.onChange
        };

        const componentData = {
            class: inputClass,
            attrs,
            domProps,
            on
        };

        return h('label', { class: this.currentClass, attrs: { for: this.id } }, [
            h('input', componentData),
            h('div', { class: wrapperClass }, [
                h('span', { class: this.currentIconClass }),
                h('span', this.label)
            ])
        ]);
    }
};
