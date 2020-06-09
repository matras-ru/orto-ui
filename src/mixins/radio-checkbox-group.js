// TODO: add limit...
import { selfInstall } from '@/utils/index.js';
import { noop } from '@/utils';

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
            const children = props.data.map(({ id, label, name, disabled, value }) => {
                const onChange = listeners['change'] || noop;
                return h(ChildComponent, {
                    props: {
                        modelValue: props.modelValue,
                        id,
                        label,
                        name,
                        disabled,
                        value
                    },
                    on: {
                        change: val => onChange(val)
                    }
                });
            });

            return h('div', children);
        }
    };
}
