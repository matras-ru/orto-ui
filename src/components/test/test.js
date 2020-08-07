import { getHashMapValue } from '@/utils';
import { selfInstall } from '@/utils/index.js';

import { getComponentConfig } from '@/config';
import DefaultTheme from '@/themes/default/CBadge';

const NAME = 'CTest';
const validVariants = ['y'];

const props = {
    theme: {
        type: Object,
        default: () => DefaultTheme
    },

    limit: {}
};

export default {
    name: NAME,

    data: () => ({
        childCount: 0,
        innerLimit: 8
    }),

    // functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    async created() {
        await this.$nextTick();
        this.childCount = this.$scopedSlots.default().length;
    },

    render(h) {
        const componentData = {
            // class: currentClass(props)
        };

        const wrap = this.$scopedSlots.wrap();
        const show = this.$scopedSlots.show();
        console.log(show);

        // TODO:
        // show[0].context = Object.assign(show[0].context, {
        //     on: {
        //         ...show[0].context.$listeners,
        //         ...{
        //             click: () => {
        //                 this.innerLimit === this.childCount;
        //             }
        //         }
        //     }
        // });

        wrap[0].children = this.innerLimit
            ? this.$scopedSlots.default().slice(0, this.innerLimit)
            : this.$scopedSlots.default();

        return h('div', [...wrap, this.childCount > this.innerLimit ? show : null]);
    }
};
