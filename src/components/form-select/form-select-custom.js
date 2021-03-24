import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CFormSelectCustom';
import { getComponentConfig } from '@/config';
import { getHashMapValue } from '@/utils';
const validSizes = ['sm', 'md'];
import CDropdown from '../dropdown/dropdown';
import CFormInput from '../form-input/form-input';
import CList from '../list/list';
import CListItem from '../list/list-item';

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

    components: {
        CDropdown,
        CFormInput,
        CList,
        CListItem
    },

    inheritAttrs: false,

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
            default: () => getComponentConfig(NAME, 'optionValue')
        },

        optionLabel: {
            type: String,
            default: () => getComponentConfig(NAME, 'optionLabel')
        },

        error: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: value => validSizes.includes(value)
        },

        useNativeList: {
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
            data: options,
            theme,
            modelValue,
            label,
            placeholder,
            optionLabel,
            optionValue,
            error,
            size,
            useNativeList
        } = this;

        const selectedOption = options.find(item => item[optionValue] === modelValue);
        const { inputBase, inputIconBase, listBase, fakeSelectBase, inputIconClass } = theme;
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

        // for mobile platform
        // TODO: unit
        const fakeNativeSelect = () =>
            h(
                'select',
                {
                    staticClass: fakeSelectBase,
                    directives: [
                        {
                            name: 'model',
                            rawName: 'v-model',
                            value: modelValue,
                            expression: 'modelValue'
                        }
                    ],
                    on: {
                        change: e => {
                            const target = e.target;

                            const selectedVal = Array.from(target.options)
                                .filter(option => option.selected)
                                .map(option => ('_value' in option ? option._value : option.value));

                            this.$emit('change', selectedVal[0]);
                        }
                    }
                },
                options.map(option => {
                    const { value, label } = mapOption({
                        option,
                        optionLabel,
                        optionValue
                    });

                    const computedLabel = this.$scopedSlots.default
                        ? this.$scopedSlots.default(option)[0].text
                        : label;

                    return h('option', {
                        domProps: { value, innerHTML: computedLabel }
                    });
                })
            );

        return h('CDropdown', {
            props: {
                variant: getComponentConfig(NAME, 'dropdownVariant')
            },

            scopedSlots: {
                holder: ({ toggle }) =>
                    h('div', [
                        h('CFormInput', {
                            props: {
                                ...this.$attrs,
                                readonly: true,
                                error,
                                label,
                                placeholder,
                                size,
                                modelValue: selectedOption
                                    ? this.$scopedSlots.selected
                                        ? this.$scopedSlots.selected(selectedOption)[0].text
                                        : selectedOption[optionLabel]
                                    : null
                            },
                            ref: 'holder',
                            staticClass: inputBase,
                            scopedSlots: {
                                append: () => h('i', { class: [iconClass, inputIconClass] })
                            },
                            on: {
                                click: toggle
                            }
                        }),
                        useNativeList ? fakeNativeSelect() : null
                    ]),

                ...(!useNativeList && {
                    dropdown: ({ close, isShow }) => {
                        // First to selected
                        // TODO:
                        this.$nextTick().then(() => {
                            if (isShow && this.$refs.selected) {
                                this.$refs.selected.scrollIntoView({
                                    block: 'nearest',
                                    inline: 'start'
                                });
                            }
                        });

                        return h(
                            'CList',
                            {
                                staticClass: listBase
                            },
                            [
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
                                            ...(isSelected && {
                                                ref: 'selected'
                                            }),
                                            on: {
                                                click: () => {
                                                    this.$emit('change', value);
                                                    close();
                                                }
                                            }
                                        },
                                        this.$scopedSlots.default
                                            ? this.$scopedSlots.default(option)
                                            : label
                                    );
                                })
                            ]
                        );
                    }
                })
            }
        });
    }
};
