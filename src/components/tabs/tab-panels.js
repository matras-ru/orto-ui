import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { getComponentConfig } from '@/config';

const NAME = 'CTabPanels';

export default {
    name: NAME,

    functional: true,

    ...install,

    props: {
        modelValue: {
            type: [String, Number],
            default: null
        },

        // v-if/show
        lazy: {
            type: Boolean,
            default: () => getComponentConfig(NAME, 'lazy')
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render(h, { data, props, children = [] }) {
        const normalizeTabPanels = children.map(tabPanel => {
            const { name } = tabPanel.data;
            const isActive = props.modelValue === name;

            tabPanel.data = mergeData(tabPanel.data, {
                attrs: {
                    hidden: !isActive
                }
            });

            return props.lazy ? (isActive ? tabPanel : null) : tabPanel;
        });

        return h('div', mergeData(data, {}), [...normalizeTabPanels]);
    }
};
