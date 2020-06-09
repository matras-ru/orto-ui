import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CRadioCheckbox';

const computeIsChecked = ({ type, modelValue, value, trueValue }) => {
    if (type === 'checkbox') {
        if (modelValue instanceof Array) {
            return modelValue.includes(value);
        }

        return modelValue === trueValue;
    }

    return modelValue === value;
};

const computeClasses = (type, { disabled, error, theme }) => {
    const {
        labelBase,
        labelStateDefault,
        labelStateDisabled,
        labelStateError,
        wrapperBase,
        inputBase,
        inputCheckboxBase,
        inputCheckboxStateError,
        inputRadioBase,
        inputRadioStateError
    } = theme;

    const labelClasses = [labelBase];
    const inputClass = [inputBase];

    inputClass.push(type === 'checkbox' ? inputCheckboxBase : inputRadioBase);

    if (disabled) {
        labelClasses.push(labelStateDisabled);
    } else if (error) {
        labelClasses.push(labelStateError);
        inputClass.push(type === 'checkbox' ? inputCheckboxStateError : inputRadioStateError);
    } else {
        labelClasses.push(labelStateDefault);
    }

    return {
        labelClasses,
        wrapperBase,
        inputClass
    };
};

export default function (type) {
    //
    return {
        install(Vue, theme) {
            selfInstall(Vue, theme, this);
        },

        inheritAttrs: false,

        functional: true,

        model: {
            prop: 'modelValue',
            event: 'change'
        },

        props: {
            theme: {
                type: Object,
                default: () => DefaultTheme
            },

            label: {
                type: String,
                default: null
            },

            name: {
                type: String,
                default: null
            },

            value: {
                type: [String, Number],
                default: null
            },

            id: {
                type: String,
                default: null // TODO: random uuid?
            },

            error: {
                type: Boolean,
                default: false
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        render(h, { props, listeners }) {
            const {
                name,
                label,
                id,
                disabled,
                theme,
                error,
                value,
                modelValue,
                trueValue,
                falseValue
            } = props;

            const isChecked = computeIsChecked({ type, modelValue, value, trueValue });

            const { labelClasses, inputClass, wrapperBase } = computeClasses(type, {
                theme,
                error,
                disabled,
                isChecked
            });

            const inputData = {
                class: inputClass,
                attrs: {
                    id,
                    name,
                    type,
                    disabled
                },
                domProps: {
                    checked: isChecked,
                    value
                },
                on: {
                    change: e => {
                        const checked = e.target.checked;

                        if (type === 'checkbox') {
                            if (modelValue instanceof Array) {
                                const newValue = [...modelValue];

                                if (checked) {
                                    newValue.push(value);
                                } else {
                                    newValue.splice(newValue.indexOf(value), 1);
                                }

                                listeners['change'](newValue);

                                return;
                            }

                            listeners['change'](checked ? trueValue : falseValue);

                            return;
                        }

                        if (checked) {
                            listeners['change'](value);
                        }
                    }
                }
            };

            return h(
                'div',
                {
                    class: wrapperBase
                },
                [
                    h('label', { class: labelClasses, attrs: { for: id } }, [
                        h('input', inputData),
                        label
                    ])
                ]
            );
        }
    };
}
