import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import { getComponentConfig } from '@/config';

import { baseClass } from '@/themes/default/CListItem';

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
        const componentData = {
            staticClass: baseClass
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};
