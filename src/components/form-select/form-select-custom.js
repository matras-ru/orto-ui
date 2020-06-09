import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CFormSelectCustom';
import { getComponentConfig } from '@/config';
import { getHashMapValue } from '@/utils';
const validSizes = ['sm', 'md'];

const NAME = 'CFormSelectCustom';

const createSizeMap = ({ inputIconSizeMd, inputIconSizeSm }) => {
    return {
        md: {
            icon: inputIconSizeMd
        },
        sm: {
            icon: inputIconSizeSm
        }
    };
};

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

        placeholder: {
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
        },

        size: {
            type: String,
            default: 'md',
            validator: value => validSizes.includes(value)
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render(h, { listeners, props, scopedSlots }) {
        const {
            data: options,
            theme,
            modelValue,
            label,
            placeholder,
            optionLabel,
            optionValue,
            error,
            size
        } = props;

        const selectedOption = options.find(item => item[optionValue] === modelValue);
        const { inputBase, inputIconBase } = theme;
        const sizes = createSizeMap(theme);

        const iconClass = [inputIconBase];

        const { icon } = getHashMapValue(sizes, size);

        iconClass.push(icon);

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
                            placeholder,
                            size,
                            modelValue: selectedOption
                                ? scopedSlots.selected
                                    ? scopedSlots.selected(selectedOption)[0].text
                                    : selectedOption[optionLabel]
                                : null
                        },
                        ref: 'holder',
                        staticClass: inputBase,
                        scopedSlots: {
                            append: () => h('i', { class: iconClass })
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
                                scopedSlots.default ? scopedSlots.default(option) : label
                            );
                        })
                    ]);
                }
            }
        });
    }
};
