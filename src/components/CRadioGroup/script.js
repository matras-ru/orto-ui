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
        modelValue: {}
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
        let setAttrs = item => {
            return {
                id: item.id,
                autofocus: this.autofocus,
                label: item.label,
                name: item.name,
                disabled: item.disabled
            };
        };

        return h(
            'div',
            this.data.map(item => {
                return h('CRadio', {
                    attrs: setAttrs(item),
                    domProps: { values: this.values }
                });
            })
        );
    }
};
