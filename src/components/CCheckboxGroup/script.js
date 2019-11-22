import { selfInstall } from '@/utils';
import CCheckbox from '@/components/CCheckbox';

export default {
    name: 'CheckboxGroup',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    components: {
        CCheckbox
    },

    props: {
        data: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: Array,
            default: () => []
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    computed: {
        values: {
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
                autofocus: item.autofocus,
                label: item.label,
                name: item.name,
                value: item.value,
                disabled: item.disabled
            };
        };

        return h(
            'div',
            this.data.map(item => {
                return h('CCheckbox', {
                    props: {
                        modelValue: this.values,
                        ...setProps(item)
                    },
                    on: {
                        change: arr => {
                            this.values = [...arr];
                        }
                    }
                });
            })
        );
    }
};
