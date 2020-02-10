import { mergeData } from 'vue-functional-data-merge';
import { getComponentConfig } from '@/config';
import { selfInstall } from '@/';
import DefaultTheme from '@/themes/default/CTabPanel';

const NAME = 'CTabPanel';

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        tag: {
            type: String,
            default: () => getComponentConfig(NAME, 'tag')
        },

        name: {
            type: String,
            default: null
        }
    },

    render(h, { data, props, children }) {
        const { base } = props.theme;

        const componentData = {
            name: props.name,
            attrs: {
                role: 'tabpanel',
                id: props.name,
                'aria-labelledby': `tab-${props.name}`
            },
            staticClass: base
        };
        return h(props.tag, mergeData(data, componentData), [children]);
    }
};
