import { Popper, PopperContent, PopperMethods, ThemeClass } from 'floating-vue';
import { selfInstall } from '@/utils/index.js';

import { getComponentConfig } from '@/config';

const NAME = 'CDropdown';

export default {
    name: NAME,

    install(Vue) {
        selfInstall(Vue, this);
    },

    components: {
        Popper: Popper(),
        PopperContent
    },

    mixins: [PopperMethods, ThemeClass],

    inheritAttrs: false,

    props: {
        theme: {
            type: String,
            default() {
                return getComponentConfig(NAME, 'theme');
            }
        }
    },

    methods: {
        getTargetNodes() {
            return Array.from(this.$refs.reference.children);
        }
    },

    render(h) {
        return h('Popper', {
            ref: 'popper',
            props: {
                theme: this.theme,
                targetNodes: this.getTargetNodes,
                referenceNode: () => this.$refs.reference,
                popperNode: () => this.$refs.popperContent.$el,
                // arrowNode: () => this.$refs.popperContent.$refs.arrow,
                ...this.$attrs
            },
            on: this.$listeners,
            scopedSlots: {
                default: ({
                    popperId,
                    isShown,
                    shouldMountContent,
                    skipTransition,
                    autoHide,
                    hide,
                    handleResize,
                    onResize,
                    classes,
                    result
                }) =>
                    h(
                        'div',
                        {
                            ref: 'reference',
                            class: [
                                this.themeClass,
                                'v-popper',
                                {
                                    'v-popper--shown': isShown
                                }
                            ]
                        },
                        [
                            this.$scopedSlots.default({ shown: isShown }),
                            h(
                                'PopperContent',
                                {
                                    ref: 'popperContent',
                                    props: {
                                        popperId,
                                        theme: this.theme,
                                        shown: isShown,
                                        mounted: shouldMountContent,
                                        skipTransition,
                                        autoHide,
                                        handleResize,
                                        classes,
                                        result
                                    },
                                    on: {
                                        hide,
                                        resize: onResize
                                    }
                                },
                                this.$scopedSlots.popper
                                    ? this.$scopedSlots.popper({ shown: isShown })
                                    : null
                            )
                        ]
                    )
            }
        });
    }
};
