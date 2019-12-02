import { mergeData } from 'vue-functional-data-merge';
import { selfInstall, noop } from '@/utils';
import commonAttributes from '@/mixins/commonAttributes.js';
// import { baseClass } from '@/themes/default/CLink';

const NAME = 'CLink';

const props = {
    ...commonAttributes.props,

    variant: {
        type: String,
        default: 'variant'
    }
};

export default {
    name: NAME,

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { children }) {
        const componentData = {};

        return h('a', componentData, children);
    }
};
