export default {
    inheritAttrs: false,

    props: {
        label: {
            type: String,
            default: null
        },

        name: {
            type: String,
            default: null
        },

        id: {
            type: String,
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render(h) {
        const {
            labelBase,
            labelDefault,
            labelDisable,

            iconBaseCheckbox,
            iconBaseRadio,
            iconDefault,
            iconChecked,
            iconDisable,

            inputDefault,

            wrapperDefault
        } = this.theme;

        const inputData = {
            staticClass: inputDefault,
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

        const computeClasses = () => {
            const labelClasses = [labelBase];
            const iconClasses = [this.type === 'checkbox' ? iconBaseCheckbox : iconBaseRadio];

            if (this.disabled) {
                labelClasses.push(labelDisable);
                iconClasses.push(iconDisable);
            } else {
                labelClasses.push(labelDefault);
            }

            if (this.shouldBeChecked) {
                iconClasses.push(iconChecked);
            } else {
                iconClasses.push(iconDefault);
            }

            return {
                labelClasses,
                iconClasses
            };
        };

        const { labelClasses, iconClasses } = computeClasses();

        return h(
            'div',
            {
                class: wrapperDefault
            },
            [
                h('label', { class: labelClasses, attrs: { for: this.id } }, [
                    h('input', inputData),
                    h('span', { class: iconClasses }),
                    h('span', this.label)
                ])
            ]
        );
    }
};
