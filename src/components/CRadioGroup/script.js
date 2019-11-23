import { selfInstall } from '@/utils';
import CRadio from '@/components/CRadio';

export default {
    name: 'RadioGroup',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    components: {
        CRadio
    },

    props: {
        data: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('change', val);
            }
        }
    },

    render(h) {
        let setProps = item => {
            return {
                id: item.id,
                autofocus: this.autofocus,
                label: item.label,
                name: item.name,
                disabled: item.disabled,
                value: item.value
            };
        };

        return h(
            'div',
            this.data.map(item => {
                return h('CRadio', {
                    props: {
                        modelValue: this.value,
                        ...setProps(item)
                    },
                    on: {
                        change: val => {
                            this.value = val;
                        }
                    }
                });
            })
        );
    }
};
