export default function(type) {
    const mapComponents = {
        checkbox: 'CCheckbox',
        radio: 'CRadio'
    };

    const childComponent = mapComponents[type];

    return {
        functional: true,

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

        render(h, { props, listeners }) {
            const onChange = listeners['change'];

            const children = props.data.map(({ id, label, name, disabled, value, autofocus }) =>
                h(childComponent, {
                    props: {
                        modelValue: props.modelValue,
                        id,
                        label,
                        name,
                        disabled,
                        autofocus,
                        value
                    },
                    on: {
                        change(val) {
                            onChange(val);
                        }
                    }
                })
            );

            return h('div', {}, children);
        }
    };
}
