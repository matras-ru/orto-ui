// TODO: add limit...
import { selfInstall } from '@/utils/index.js';
import FormPanel from '@/mixins/form-panel';
import DefaultTheme from '@/themes/default/CCheckboxRadioGroup';

export default function (type) {
    const mapComponents = {
        checkbox: 'CCheckbox',
        radio: 'CRadio'
    };

    const ChildComponent = mapComponents[type];

    return {
        install(Vue, theme) {
            selfInstall(Vue, theme, this);
        },

        mixins: [FormPanel],

        props: {
            theme: {
                type: Object,
                default: () => DefaultTheme
            },

            data: {
                type: Array,
                default: () => []
            }
        },

        model: {
            prop: 'modelValue',
            event: 'change'
        },

        methods: {
            getControl(h) {
                const children = this.data.map(({ id, label, name, disabled, value }) => {
                    return h(ChildComponent, {
                        props: {
                            modelValue: this.modelValue,
                            id,
                            label,
                            name,
                            disabled,
                            value
                        },
                        on: {
                            change: val => this.$emit('change', val)
                        }
                    });
                });

                return h('div', children);
            }
        }
    };
}
