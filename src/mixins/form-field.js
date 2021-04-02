import { getHashMapValue } from '@/utils';

const NAME = 'CFormField';
const validSizes = ['sm', 'md'];

const createSizeMap = ({
    labelSizeSm,
    labelSizeMd,
    innerWrapsizeSm,
    innerWrapsizeMd,
    controlWrapSizeMd,
    controlWrapSizeSm,
    appendSizeSm,
    appendSizeMd,
    prependSizeSm,
    prependSizeMd
}) => {
    return {
        md: {
            label: labelSizeMd,
            innerWrap: innerWrapsizeMd,
            append: appendSizeMd,
            prepend: prependSizeMd,
            controlWrap: controlWrapSizeMd
        },
        sm: {
            label: labelSizeSm,
            innerWrap: innerWrapsizeSm,
            append: appendSizeSm,
            prepend: prependSizeSm,
            controlWrap: controlWrapSizeSm
        }
    };
};

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

        inline: {
            type: Boolean,
            default: false
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
        },

        labelBgColor: {
            type: String,
            default: null
        },

        labelStick: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: value => validSizes.includes(value)
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
            appendWrapClasses,
            hintClasses,
            errorClasses,
            bottomPlaceholderClasses
        } = (() => {
            const {
                outerWrapBase,
                outerWrapSpace,
                innerWrapBase,
                innerWrapStateDefault,
                innerWrapStateFocused,
                innerWrapStateError,
                controlWrapBase,
                labelBase,
                labelStateDefault,
                labelStateError,
                labelPositionFloat,
                labelBgPrimary,
                hintBase,
                errorBase,
                bottomPlaceholderBase
            } = this.theme;

            const outerWrapClasses = [outerWrapBase];
            const innerWrapClasses = [innerWrapBase];
            const controlWrapClasses = [controlWrapBase];
            const labelClasses = [labelBase];
            const hintClasses = [hintBase];
            const errorClasses = [errorBase];
            const bottomPlaceholderClasses = [bottomPlaceholderBase];

            const sizes = createSizeMap(this.theme);

            if (!this.inline) {
                outerWrapClasses.push(outerWrapSpace);
            }

            if (!this.labelBgColor) {
                labelClasses.push(labelBgPrimary);
            } else {
                labelClasses.push(this.labelBgColor);
            }

            // status
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

                if (this.modelValue || this.labelStick) {
                    isNotEmpty();
                    break level1;
                }

                isDefault();
            }

            const { label, innerWrap, prepend, append, controlWrap } = getHashMapValue(
                sizes,
                this.size
            );

            labelClasses.push(label);
            innerWrapClasses.push(innerWrap);
            controlWrapClasses.push(controlWrap);
            const appendWrapClasses = [append];
            const prependWrapClasses = [prepend];

            return {
                outerWrapClasses,
                innerWrapClasses,
                controlWrapClasses,
                labelClasses,
                prependWrapClasses,
                appendWrapClasses,
                hintClasses,
                errorClasses,
                bottomPlaceholderClasses
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

                                this.$slots.label || this.label
                                    ? h(
                                          'div', // label
                                          {
                                              class: labelClasses,
                                              ref: 'label'
                                          },
                                          this.$slots.label ? this.$slots.label : this.label
                                      )
                                    : null
                            ]
                        ),
                        this.$scopedSlots.append
                            ? h('div', { class: appendWrapClasses }, this.$scopedSlots.append())
                            : null // prepend
                    ]
                ),
                (this.error && this.errorMessage) || this.hint
                    ? h('div', { class: bottomPlaceholderClasses }, [
                          this.error && this.errorMessage
                              ? h('div', { class: errorClasses }, this.errorMessage)
                              : h('div', { class: hintClasses }, this.hint)
                      ])
                    : null
            ]
        );
    }
};
