import { selfInstall } from '@/';
import DefaultTheme from '@/themes/default/CFormSelectCustom';
import { getComponentConfig } from '@/config';

const NAME = 'CFormSelectCustom';

const mapOption = ({ option, optionLabel, optionValue }) =>
    Object.keys(option).reduce((output, item) => {
        if (item === optionLabel) {
            output['label'] = option[item];
        } else if (item === optionValue) {
            output['value'] = option[item];
        } else {
            output[item] = option[item];
        }

        return output;
    }, {});

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    inheritAttrs: false,

    functional: true,

    props: {
        modelValue: {
            type: [String, Number],
            default: null
        },

        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        label: {
            type: String,
            default: null
        },

        data: {
            type: Array,
            default: () => []
        },

        optionValue: {
            type: String,
            default: getComponentConfig(NAME, 'optionValue')
        },

        optionLabel: {
            type: String,
            default: getComponentConfig(NAME, 'optionLabel')
        },

        error: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render(h, { listeners, props }) {
        const { data: options, theme, modelValue, label, optionLabel, optionValue, error } = props;

        const selectedOption = options.find(item => item[optionValue] === modelValue);

        const { inputBase, inputIcon } = theme;

        const cumputeOptionClasses = isSelected => {
            const { optionBase, optionStateDefault, optionStateActive } = theme;
            const classes = [optionBase];

            if (isSelected) {
                classes.push(optionStateActive);
            } else {
                classes.push(optionStateDefault);
            }

            return classes;
        };

        return h('CDropdown', {
            props: {
                variant: getComponentConfig(NAME, 'dropdownVariant')
            },

            scopedSlots: {
                holder: ({ toggle }) =>
                    h('CFormInput', {
                        props: {
                            readonly: true,
                            error,
                            label,
                            modelValue: selectedOption ? selectedOption[optionLabel] : null
                        },
                        ref: 'holder',
                        staticClass: inputBase,
                        scopedSlots: {
                            append: () => h('i', { staticClass: inputIcon })
                        },
                        on: {
                            click: toggle
                        }
                    }),

                dropdown: ({ close }) => {
                    return h('CList', [
                        options.map(option => {
                            const { value, label } = mapOption({
                                option,
                                optionLabel,
                                optionValue
                            });

                            const isSelected = value === modelValue;

                            return h(
                                'CListItem',
                                {
                                    class: cumputeOptionClasses(isSelected),
                                    on: {
                                        click: () => {
                                            listeners['change'](value);
                                            close();
                                        }
                                    }
                                },
                                label
                            );
                        })
                    ]);
                }
            }
        });
    }
};
