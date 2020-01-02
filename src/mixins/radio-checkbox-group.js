import { install } from '@/mixins';

export default function(type) {
    const mapComponents = {
        checkbox: 'CCheckbox',
        radio: 'CRadio'
    };

    const ChildComponent = mapComponents[type];

    return {
        functional: true,

        ...install,

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
            const children = props.data.map(({ id, label, name, disabled, value }) =>
                h(ChildComponent, {
                    props: {
                        modelValue: props.modelValue,
                        id,
                        label,
                        name,
                        disabled,
                        value
                    },
                    on: {
                        change: val => listeners['change'](val)
                    }
                })
            );

            return h('div', children);
        }
    };
}
