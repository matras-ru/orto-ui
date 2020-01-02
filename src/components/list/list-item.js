import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { getComponentConfig } from '@/config';

const NAME = 'CListItem';

const props = {
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
