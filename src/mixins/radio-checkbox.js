import commonAttributes from '@/mixins/commonAttributes.js';

import {
    inputClass,
    wrapperClass,
    disabledClass,
    defaultIconClass,
    baseIconCheckboxClass,
    baseIconRadioClass,
    checkedIconClass,
    disabledIconClass,
    labelClass
} from '@/themes/default/CRadioCheckbox';

export default {
    props: {
        ...commonAttributes.props,

        label: {
            type: String,
            default: null
        },

        hint: {
            type: String,
            default: null
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    computed: {
        currentClass() {
            const classes = [labelClass];

            if (this.disabled) {
                classes.push(disabledClass);
            }

            return classes;
        },

        currentIconClass() {
            const classes = [this.type === 'checkbox' ? baseIconCheckboxClass : baseIconRadioClass];

            if (this.disabled) {
                classes.push(disabledIconClass);
            } else if (this.shouldBeChecked) {
                classes.push(checkedIconClass);
            } else {
                classes.push(defaultIconClass);
            }

            return classes;
        }
    },

    render(h) {
        const inputData = {
            staticClass: inputClass,
            attrs: {
                id: this.id,
                autofocus: this.autofocus,
                name: this.name,
                type: this.type,
                disabled: this.disabled
            },
            domProps: {
                checked: this.shouldBeChecked,
                value: this.value
            },
            on: {
                change: this.onChange
            }
        };

        return h('label', { class: this.currentClass, attrs: { for: this.id } }, [
            h('input', inputData),
            h('div', { class: wrapperClass }, [
                h('span', { class: this.currentIconClass }),
                h('span', this.label)
            ])
        ]);
    }
};
