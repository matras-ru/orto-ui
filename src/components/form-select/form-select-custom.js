import { selfInstall, getHashMapValue } from '@/utils';
import DefaultTheme from '@/themes/default/CFormSelectCustom';
import { getComponentConfig } from '@/config';
import CDropdown from '../dropdown/dropdown';
import CList from '../list/list';
import CListItem from '../list/list-item';

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
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    data() {
        return {
            shownList: false,
            focusIndex: -1
        };
    },

    computed: {
        selectedOption() {
            return this.data.find((item, idx) => item[this.optionValue] === this.modelValue);
        },

        selectedOption2() {
            return this.data.find((item, idx) => idx === this.focusIndex);
        },

        selectIndex() {
            return this.data.findIndex(option => option[this.optionValue] === this.modelValue);
        }
    },

    created() {
        if (this.modelValue) {
            this.setFocusIndex(
                this.data.findIndex(option => option[this.optionValue] === this.modelValue)
            );
        }
    },

    methods: {
        close() {
            this.shownList = false;

            this.$refs.button.$el.focus();
        },

        open() {
            this.shownList = true;

            setTimeout(() => {
                console.log(this.$refs.list);
                this.$refs.list.focus();
            }, 100);
        },

        setFocusIndex(idx) {
            this.focusIndex = idx;
        },

        scrollToSelected() {
            if (!this.$refs.list || !this.$refs.selected) return;
            const { list, selected } = this.$refs;
            const { offsetTop, clientHeight } = selected;

            const currentVisibleArea = list.scrollTop + list.clientHeight;

            if (offsetTop < list.scrollTop) {
                list.scrollTop = offsetTop;
            } else if (offsetTop + clientHeight > currentVisibleArea) {
                list.scrollTop = offsetTop - list.clientHeight + clientHeight;
            }
        }
    },

    watch: {
        // shownList: {
        //     immediate: true,
        //     handler() {
        //         this.$nextTick().then(() => {
        //             this.shownList &&
        //                 this.$refs.selected &&
        //                 this.$refs.selected.scrollIntoView({
        //                     block: 'nearest',
        //                     inline: 'start'
        //                 });
        //         });
        //     }
        // }
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
            size
        } = this;

        const {
            inputBase,
            inputIconBase,
            listBase,
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

        return h('CDropdown', {
            props: {
                theme: getComponentConfig(NAME, 'dropdownTheme')
            },

            attrs: {
                shown: this.shownList,
                triggers: ['']
            },

            on: {
                'auto-hide': this.close
            },

            scopedSlots: {
                popper: () => {
                    return h(
                        'CList',
                        {
                            staticClass: listBase,

                            ref: 'list',

                            attrs: {
                                tabindex: '-1',
                                role: 'listbox'
                            },

                            on: {
                                keydown: event => {
                                    console.log(event);
                                    if ([32, 37, 38, 39, 40, 9].includes(event.keyCode)) {
                                        event.preventDefault();
                                    }

                                    // TODO: пропускать при навигации стрелками `dropdown-list-item`

                                    switch (event.keyCode) {
                                        case 38:
                                            console.log('UP');
                                            // up
                                            if (this.focusIndex === 0) return;
                                            this.setFocusIndex(this.focusIndex - 1);
                                            break;

                                        case 40:
                                            // down
                                            console.log('DOWN');

                                            if (this.focusIndex === this.data.length - 1) {
                                                // скроллл в низ списка
                                                this.$refs.list.scrollTop =
                                                    this.$refs.list.scrollHeight;
                                                return;
                                            }

                                            this.setFocusIndex(this.focusIndex + 1);
                                            break;

                                        case 36:
                                            console.log('HOME');

                                            // home
                                            this.setFocusIndex(0);
                                            break;

                                        case 35:
                                            console.log('END');

                                            // end
                                            this.setFocusIndex(this.data.length - 1);
                                            break;

                                        case 13:
                                            console.log('ENTER');

                                            // enter

                                            const { value } = mapOption({
                                                option: this.selectedOption2,
                                                optionLabel,
                                                optionValue
                                            });

                                            this.$nextTick().then(() => {
                                                this.$emit('change', value);
                                                this.close();
                                            });

                                            break;

                                        case 9:
                                            // tab
                                            console.log('TAB');

                                            this.close();
                                            break;
                                    }

                                    this.$nextTick().then(() => {
                                        this.scrollToSelected();
                                    });
                                }
                            }
                        },
                        [
                            options.map((option, idx) => {
                                const { value, label } = mapOption({
                                    option,
                                    optionLabel,
                                    optionValue
                                });

                                // const isSelected = value === modelValue;
                                const isSelected = idx === this.focusIndex;

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
                                                this.close();
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
                },

                default: () => {
                    return h(
                        'div',
                        {
                            on: {
                                click: () => {
                                    this.$emit('beforeOpen');
                                    this.$nextTick().then(this.open);
                                }
                            }
                        },
                        [
                            h(
                                'CFormField',
                                {
                                    props: {
                                        name: this.name,
                                        labelBgColor: this.labelBgColor,
                                        error,
                                        label,
                                        size,
                                        modelValue:
                                            this.selectedOption &&
                                            this.selectedOption[this.optionValue]
                                    },
                                    staticClass: inputBase,
                                    ref: 'button',
                                    scopedSlots: {
                                        append: () => h('i', { class: [iconClass, inputIconClass] })
                                    },
                                    attrs: {
                                        'aria-expanded': this.shownList ? 'true' : 'false',
                                        'aria-haspopup': 'listbox',
                                        tabindex: '0',
                                        ...this.$attrs
                                    },
                                    on: {
                                        keydown: event => {
                                            switch (event.keyCode) {
                                                case 13:
                                                    console.log('ENTER');

                                                    this.open();
                                                    // enter

                                                    break;

                                                case 9:
                                                    // tab
                                                    console.log('TAB');

                                                    this.close();
                                                    break;

                                                case 38:
                                                    // up
                                                    if (this.selectIndex === 0) return;

                                                    this.$emit(
                                                        'change',
                                                        mapOption({
                                                            option: this.data[this.selectIndex - 1],
                                                            optionLabel,
                                                            optionValue
                                                        }).value
                                                    );
                                                    break;
                                                case 40:
                                                    // down
                                                    if (this.selectIndex === this.data.length - 1)
                                                        return;

                                                    console.log(this.data[this.selectIndex + 1]);
                                                    this.$emit(
                                                        'change',
                                                        mapOption({
                                                            option: this.data[this.selectIndex + 1],
                                                            optionLabel,
                                                            optionValue
                                                        }).value
                                                    );
                                                    break;
                                            }
                                        }
                                    }
                                },
                                this.selectedOption
                                    ? this.$scopedSlots.selected
                                        ? this.$scopedSlots.selected(this.selectedOption)
                                        : this.selectedOption[this.optionLabel]
                                    : placeholder || label
                            )
                        ]
                    );
                }
            }
        });
    }
};
