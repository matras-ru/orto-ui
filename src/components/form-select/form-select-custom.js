import { selfInstall } from '@/utils/index.js';
import DefaultTheme from '@/themes/default/CFormSelectCustom';
import { getComponentConfig } from '@/config';
import { getHashMapValue } from '@/utils';
const validSizes = ['sm', 'md'];
import CDropdown from '../dropdown/dropdown';
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
        CList,
        CListItem
    },

    inheritAttrs: false,

    props: {
        modelValue: {
            type: [String, Number]
        },

        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        label: {
            type: String
        },

        name: {
            type: String
        },

        labelBgColor: {
            type: String
        },

        placeholder: {
            type: String
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
        const {
            inputBase,
            inputIconBase,
            listBase,
            fakeSelectBase,
            inputIconClass,
            optionBase,
            optionStateDefault,
            optionStateActive
        } = theme;
        const sizes = createSizeMap(theme);

        const iconClass = [inputIconBase];

        const { icon } = getHashMapValue(sizes, size);

        iconClass.push(icon);

        const computeOptionClasses = isSelected => {
            const classesBasedOnState = isSelected ? optionStateActive : optionStateDefault;
            return [optionBase, classesBasedOnState];
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
                    attrs: this.$attrs,
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
                holder: ({ toggle }) => {
                    return h('div', [
                        h(
                            'CFormField',
                            {
                                props: {
                                    name: this.name,
                                    labelBgColor: this.labelBgColor,
                                    error,
                                    label,
                                    size,
                                    modelValue: selectedOption && selectedOption[this.optionValue]
                                },
                                staticClass: inputBase,
                                ref: 'holder',
                                scopedSlots: {
                                    append: () => h('i', { class: [iconClass, inputIconClass] })
                                },
                                attrs: this.$attrs,
                                on: {
                                    click: () => {
                                        this.$emit('beforeOpen');
                                        this.$nextTick().then(toggle);
                                    }
                                }
                            },
                            selectedOption
                                ? this.$scopedSlots.selected
                                    ? this.$scopedSlots.selected(selectedOption)
                                    : selectedOption[this.optionLabel]
                                : placeholder || label
                        ),
                        useNativeList ? fakeNativeSelect() : null
                    ]);
                },

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
                                            class: computeOptionClasses(isSelected),
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
