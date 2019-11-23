import { selfInstall } from '@/utils';
import { mergeData } from 'vue-functional-data-merge';

import ThemeClass from '@/themes/default/CListItem';

const { baseClass } = ThemeClass;

const props = {
    tag: {
        type: String,
        default: 'li'
    }
};
export default {
    name: 'ListItem',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props, data, children }) {
        const componentData = {
            staticClass: baseClass.join(' ')
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};
