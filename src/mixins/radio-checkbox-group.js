// TODO: add limit...
import { selfInstall } from '@/';

export default function(type) {
    const mapComponents = {
        checkbox: 'CCheckbox',
        radio: 'CRadio'
    };

    const ChildComponent = mapComponents[type];

    return {
        install(Vue, theme) {
            selfInstall(Vue, theme, this);
        },

        functional: true,

        props: {
            theme: {
                type: Object,
                default: () => {}
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
