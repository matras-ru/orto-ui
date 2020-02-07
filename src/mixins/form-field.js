const NAME = 'CFormField';

export default {
    name: NAME,

    inheritAttrs: false,

    props: {
        modelValue: {
            type: [String, Number],
            default: null
        },

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

        placeholder: {
            type: String,
            default: null
        },

        hint: {
            type: String,
            default: null
        },

        error: {
            type: Boolean,
            default: false
        },

        errorMessage: {
            type: String,
            default: null
        }
    },

    data() {
        return {
            focused: false
        };
    },

    render(h) {
        const {
            outerWrapClasses,
            innerWrapClasses,
            controlWrapClasses,
            labelClasses,
            prependWrapClasses,
            appendWrapClasses
        } = (() => {
            const {
                outerWrapBase,
                innerWrapBase,
                innerWrapStateDefault,
                innerWrapStateFocused,
                innerWrapStateError,
                controlWrapBase,
                labelBase,
                labelStateDefault,
                labelStateError,
                labelPositionFloat,
                prependBase,
                appendBase
            } = this.theme;

            const outerWrapClasses = [outerWrapBase];
            const innerWrapClasses = [innerWrapBase];
            const controlWrapClasses = [controlWrapBase];
            const labelClasses = [labelBase];
            const prependWrapClasses = [prependBase];
            const appendWrapClasses = [appendBase];

            const isError = () => {
                innerWrapClasses.push(innerWrapStateError);
                labelClasses.push(labelStateError);
            };

            const isErrorAndNotEmptyOrFocused = () => {
                labelClasses.push(labelPositionFloat);
            };

            const isFocused = () => {
                innerWrapClasses.push(innerWrapStateFocused);
                labelClasses.push(labelPositionFloat);
                labelClasses.push(labelStateDefault);
            };

            const isNotEmpty = () => {
                labelClasses.push(labelPositionFloat);
                labelClasses.push(labelStateDefault);
                innerWrapClasses.push(innerWrapStateDefault);
            };

            const isDefault = () => {
                innerWrapClasses.push(innerWrapStateDefault);
                labelClasses.push(labelStateDefault);
            };

            level1: if (this.error) {
                isError();

                if (this.modelValue || this.focused) {
                    isErrorAndNotEmptyOrFocused();
                    break level1;
                }
            } else {
                if (this.focused) {
                    isFocused();
                    break level1;
                }

                if (this.modelValue) {
                    isNotEmpty();
                    break level1;
                }

                isDefault();
            }

            return {
                outerWrapClasses,
                innerWrapClasses,
                controlWrapClasses,
                labelClasses,
                prependWrapClasses,
                appendWrapClasses
            };
        })();

        return h(
            'label', // outer wrap
            {
                class: outerWrapClasses
            },
            [
                h(
                    'div', // inner wrap
                    {
                        class: innerWrapClasses
                    },
                    [
                        this.$scopedSlots.prepend
                            ? h('div', { class: prependWrapClasses }, this.$scopedSlots.prepend())
                            : null, // append
                        h(
                            'div', // control wrap
                            {
                                class: controlWrapClasses
                            },
                            [
                                this.getControl !== void 0 // control slot
                                    ? this.getControl(h)
                                    : this.$slots.default,
                                h(
                                    'div', // label
                                    {
                                        class: labelClasses
                                    },
                                    this.label
                                )
                            ]
                        ),
                        this.$scopedSlots.append
                            ? h('div', { class: appendWrapClasses }, this.$scopedSlots.append())
                            : null // prepend
                    ]
                )
            ]
        );
    }
};
