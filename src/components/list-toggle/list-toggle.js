import { selfInstall } from '@/utils/index.js';
import { mergeData } from 'vue-functional-data-merge';
import { getComponentConfig } from '@/config';
import DefaultTheme from '@/themes/default/CListToggle';

const NAME = 'CListToggle';

const props = {
    theme: {
        type: Object,
        default: () => DefaultTheme
    },

    limit: {
        type: Number,
        default: () => getComponentConfig(NAME, 'limit')
    }
};

export default {
    name: NAME,

    data() {
        return {
            childCount: 0,
            innerLimit: this.limit
        };
    },

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    created() {
        // TODO: optimize
        this.$nextTick().then(() => {
            this.childCount = this.$scopedSlots.default().length;
        });
    },

    methods: {
        show() {
            this.innerLimit = this.childCount;
        }
    },

    render(h) {
        const getShow = children => {
            const el = children[0];
            el.data = mergeData(el.data, {
                on: {
                    click: this.show
                }
            });
            return el;
        };

        const getWrap = children => {
            const el = children[0];

            //
            el.children = this.innerLimit
                ? this.$scopedSlots.default().slice(0, this.innerLimit)
                : this.$scopedSlots.default();

            //
            if (this.childCount > this.innerLimit && this.$scopedSlots.show) {
                el.children.push(getShow(this.$scopedSlots.show()));
            }

            return el;
        };

        // TODO: проверка + throw err
        return getWrap(this.$scopedSlots.wrap());
    }
};
