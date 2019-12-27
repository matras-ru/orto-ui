import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { getComponentConfig } from '@/config';
import defaultTheme from '@/themes/default/CListItem';

const NAME = 'CListItem';

const props = {
    theme: {
        type: Object,
        default: () => defaultTheme
    },

    tag: {
        type: String,
        default: () => getComponentConfig(NAME, 'tag')
    }
};

export default {
    name: NAME,
    functional: true,
    ...install,
    props,
    render(h, { props, data, children }) {
        const { baseClass } = props.theme;

        const componentData = {
            staticClass: baseClass
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};
