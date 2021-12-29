import { Popper, ThemeClass, PopperContent, PopperMethods } from 'v-tooltip';
import { selfInstall } from '@/utils/index.js';

import { getComponentConfig } from '@/config';

const NAME = 'CDropdown';

export default {
    name: NAME,

    install(Vue) {
        selfInstall(Vue, this);
    },

    inheritAttrs: false,

    vPopperTheme: 'orto-ui',

    components: {
        Popper: Popper(),
        PopperContent
    },

    mixins: [PopperMethods, ThemeClass],

    props: {
        theme: {
            type: String,
            default() {
                return getComponentConfig(NAME, 'theme');
            }
        }
    },

    render(h) {
        return h('Popper', {
            ref: 'popper',
            props: {
                theme: this.theme,
                targetNodes: () => [this.$refs.reference],
                popperNode: () => this.$refs.popperContent.$el,
                arrowNode: () => this.$refs.popperContent.$refs.arrow,
                referenceNode: () => this.$refs.reference,
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
                    classes
                }) =>
                    h(
                        'div',
                        {
                            ref: 'reference',
                            class: [
                                'v-popper',
                                {
                                    'v-popper--shown': isShown
                                },
                                this.themeClass
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
                                        classes
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
