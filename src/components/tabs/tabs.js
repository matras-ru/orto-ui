import { selfInstall } from '@/utils';

/*  TODO:
MVP готово

feature list:
- управление с клавиатуры
- initial state на основании window.location.hash
*/

const NAME = 'CTabs';

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        modelValue: {
            type: [Number, String],
            default: null
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    // methods: {
    //     switchTab(name) {
    //         this.$emit('change', name);
    //     }
    // },

    render(h, { props, children, listeners }) {
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
                onClick: name => {
                    onChange(name);
                }
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
                    horizontal: true,
                    justify: 'between'
                }
            },
            [normalizeTabs]
        );
    }
};
