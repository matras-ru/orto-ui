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
                value: this.value,
                disabled: item.disabled
            };
        };

        return h(
            'div',
            this.data.map(item => {
                return h('CCheckbox', { attrs: setAttrs(item), domProps: { values: this.values } });
            })
        );
    }
};
