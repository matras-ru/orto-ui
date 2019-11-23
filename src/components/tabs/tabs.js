import { noop } from '@/utils';
import { getComponentConfig } from '@/config';
import { selfInstall } from '@/';

const NAME = 'CTabs';

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: () => {}
        },

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
        event: 'onChange'
    },

    render(h, { props, children = [], listeners }) {
        const { vertical, justify } = props;

        const normalizeTabs = children.map(tab => {
            const { name } = tab.componentOptions.propsData;
            const isActive = props.modelValue === name;
            const onChange = listeners['onChange'] || noop;

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
                    direction: vertical ? 'vertical' : 'horizontal',
                    justify
                }
            },
            [...normalizeTabs]
        );
    }
};
