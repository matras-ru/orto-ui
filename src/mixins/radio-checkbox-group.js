export default {
    props: {
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
        setValue(val) {
            this.$emit('change', val);
        }
    },

    render(h) {
        const children = this.data.map(({ id, label, name, disabled, value, autofocus }) =>
            h(this.type === 'checkbox-group' ? 'CCheckbox' : 'CRadio', {
                props: {
                    modelValue: this.modelValue,
                    id,
                    label,
                    name,
                    disabled,
                    autofocus,
                    value
                },
                on: {
                    change: val => {
                        this.setValue(val);
                    }
                }
            })
        );

        return h('div', {}, children);
    }
};
