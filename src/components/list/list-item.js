import { mergeData } from 'vue-functional-data-merge';
import { selfInstall } from '@/utils/index.js';
import { getComponentConfig } from '@/config';
import DefaultTheme from '@/themes/default/CListItem';

const NAME = 'CListItem';

const props = {
    theme: {
        type: Object,
        default: () => DefaultTheme
    },

    tag: {
        type: String,
        default: () => getComponentConfig(NAME, 'tag')
    }
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props, data, children }) {
        const { base } = props.theme;

        const componentData = {
            staticClass: base
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};
