import { install } from '@/mixins';
import { getComponentConfig } from '@/config';

const NAME = 'CTabs';

export default {
    name: NAME,
    functional: true,
    ...install,
    props: {
        modelValue: {
            type: [Number, String],
            default: null
        },

        vertical: {
            type: Boolean,
            default: () => getComponentConfig(NAME, 'vertical')
        },

        justify: {
            type: String,
            default: () => getComponentConfig(NAME, 'justify'),
            validator: value => getComponentConfig('common', 'validJustifyContent').includes(value)
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render(h, { props, children, listeners }) {
        const { vertical, justify } = props;
        const onChange = listeners['change'];
        const normalizeTabs = children.map(tab => {
            const { name } = tab.componentOptions.propsData;
            const isActive = props.modelValue === name;

            // mixin isAactive props
            tab.componentOptions.propsData = {
                ...tab.componentOptions.propsData,
                isActive
            };

            // mixin listeners
            tab.componentOptions.listeners = {
                ...tab.componentOptions.listeners,
                onClick: name => onChange(name)
            };

            return tab;
        });

        return h(
            'CList',
            {
                attrs: {
                    role: 'tablist'
                },
                props: {
                    horizontal: !vertical,
                    justify
                }
            },
            [...normalizeTabs]
        );
    }
};
