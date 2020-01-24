import { selfInstall } from '@/';
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

const computeClasses = (type, { disabled, theme, isChecked }) => {
    const {
        labelBase,
        labelStateDefault,
        labelStateDisabled,
        iconRadioBase,
        iconCheckboxBase,
        iconStateDefault,
        iconStateChecked,
        iconStateDisabled,
        wrapperBase,
        inputBase
    } = theme;

    const labelClasses = [labelBase];
    const iconClasses = [type === 'checkbox' ? iconCheckboxBase : iconRadioBase];

    if (disabled) {
        labelClasses.push(labelStateDisabled);
        iconClasses.push(iconStateDisabled);
    } else {
        labelClasses.push(labelStateDefault);

        if (isChecked) {
            iconClasses.push(iconStateChecked);
        } else {
            iconClasses.push(iconStateDefault);
        }
    }

    return {
        labelClasses,
        iconClasses,
        wrapperBase,
        inputBase
    };
};

export default function(type) {
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
                value,
                modelValue,
                trueValue,
                falseValue
            } = props;

            const isChecked = computeIsChecked({ type, modelValue, value, trueValue });

            const { labelClasses, iconClasses, inputBase, wrapperBase } = computeClasses(type, {
                theme,
                disabled,
                isChecked
            });

            const inputData = {
                staticClass: inputBase,
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
                        h('span', { class: iconClasses }),
                        label
                    ])
                ]
            );
        }
    };
}
