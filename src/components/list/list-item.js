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
    },

    inline: {
        type: Boolean,
        default: () => getComponentConfig(NAME, 'inline')
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
        const { base, DISPLAY_INLINE, DISPLAY_BLOCK } = props.theme;

        const componentData = {
            staticClass: base,
            class: [props.inline ? DISPLAY_INLINE : DISPLAY_BLOCK]
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};
