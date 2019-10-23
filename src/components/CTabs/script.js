import { selfInstall } from '@/utils';
// import ThemeClass from '@/themes/default/CTabs';
// const { baseClass } = ThemeClass;

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

            //
            tab.componentOptions.propsData = {
                ...tab.componentOptions.propsData,
                isActive
            };

            //
            tab.componentOptions.listeners = {
                ...tab.componentOptions.listeners,
                onClick: name => {
                    this.switchTab(name);
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
