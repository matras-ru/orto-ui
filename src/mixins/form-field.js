const NAME = 'CFormField';

export default {
    name: NAME,

    inheritAttrs: false,

    props: {
        modelValue: {
            type: String,
            default: null
        },

        label: {
            type: String,
            default: null
        },

        placeholder: {
            type: String,
            default: null
        },

        error: {
            type: Boolean,
            default: false
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
                labelPositionDefault,
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

            // попробовать сделать коллекцию:

            // error
            // - empty
            // - not-empty
            // - focused

            // default
            // - empty
            // - not-empty
            // - focused

            if (this.error) {
                innerWrapClasses.push(innerWrapStateError);
                labelClasses.push(labelStateError);

                if (this.modelValue || this.focused) {
                    labelClasses.push(labelPositionFloat);
                } else {
                    labelClasses.push(labelPositionDefault);
                }
            }

            if (this.focused) {
                innerWrapClasses.push(innerWrapStateFocused);
                labelClasses.push(labelPositionFloat);
            } else if (this.modelValue) {
                labelClasses.push(labelPositionFloat);
            } else {
                innerWrapClasses.push(innerWrapStateDefault);
                labelClasses.push(labelStateDefault);
                labelClasses.push(labelPositionDefault);
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
                staticClass: outerWrapClasses,
                on: {
                    // ...this.$listeners
                    // click: e => this.$emit('onClick')
                }
            },
            [
                h(
                    'div', // inner wrap
                    {
                        class: innerWrapClasses
                    },
                    [
                        this.$scopedSlots.prepend
                            ? h(
                                  'div',
                                  { staticClass: prependWrapClasses },
                                  this.$scopedSlots.prepend()
                              )
                            : null, // aappend
                        h(
                            'div', // control wrap
                            {
                                staticClass: controlWrapClasses
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
                            ? h(
                                  'div',
                                  { staticClass: appendWrapClasses },
                                  this.$scopedSlots.append()
                              )
                            : null // prepend
                    ]
                )
            ]
        );
    }
};
