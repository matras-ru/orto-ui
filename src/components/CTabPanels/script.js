import { selfInstall } from '@/utils';

export default {
    name: 'CTabPanels',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        value: {
            type: [String, Number],
            default: null
        },

        lazy: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'value',
        event: 'change'
    },

    render(h) {
        const normalizeTabPanels = this.$slots.default.map(tabPanel => {
            const { name } = tabPanel.componentOptions.propsData;
            const isActive = this.value === name;

            //
            tabPanel.componentOptions.propsData = {
                ...tabPanel.componentOptions.propsData,
                isActive
            };

            return this.lazy ? (isActive ? tabPanel : null) : tabPanel;
        });

        return h('div', {}, [normalizeTabPanels]);
    }
};
