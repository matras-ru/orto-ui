import { selfInstall } from '@/utils';

/*  TODO:
MVP готово

feature list:
- управление с клавиатуры
- initial state на основании window.location.hash
*/

export default {
    name: 'CTabs',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        value: {
            type: [Number, String],
            default: null
        }
    },

    model: {
        prop: 'value',
        event: 'change'
    },

    methods: {
        switchTab(name) {
            this.$emit('change', name);
        }
    },

    render(h) {
        const normalizeTabs = this.$slots.default.map(tab => {
            const { name } = tab.componentOptions.propsData;
            const isActive = this.value === name;

            // mixin isAactive props
            tab.componentOptions.propsData = {
                ...tab.componentOptions.propsData,
                isActive
            };

            // mixin listeners
            tab.componentOptions.listeners = {
                ...tab.componentOptions.listeners,
                onClick: name => {
                    this.switchTab(name);
                }
            };

            return tab;
        });

        return h(
            // TODO: заменить на List
            'ul',
            {
                attrs: {
                    role: 'tablist'
                },
                staticClass: ['flex flex-wrap justify-between']
            },
            [normalizeTabs]
        );
    }
};
