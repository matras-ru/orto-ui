import { selfInstall } from '@/utils';
import DefaultTheme from '@/themes/default/CStar';

const NAME = 'CStar';

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        fill: {
            type: Number,
            default: undefined
        },

        starId: {
            type: Number,
            required: true,
            default: undefined
        },

        activeColor: {
            type: String,
            required: true,
            default: undefined
        },

        inactiveColor: {
            type: String,
            required: true,
            default: undefined
        },

        size: {
            type: Number,
            default: undefined
        },

        gradeModel: {
            type: Number,
            default: undefined
        },

        id: {
            type: [Number, String],
            default: undefined
        }
    },

    data() {
        return {
            starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
            isStarActive: true
        };
    },

    model: {
        prop: 'gradeModel',
        event: 'star-selected'
    },

    computed: {
        starPointsToString() {
            return this.starPoints.join(',');
        },

        gradeId() {
            return `url(#${this.id}${this.starId})`;
        },

        starFill() {
            return `${this.fill}%`;
        },

        starSize() {
            return `${this.size / 16}rem`;
        }
    },

    methods: {
        mouseMoving(e) {
            if (e.touchAction !== 'undefined') {
                this.$emit('star-mouse-move', {
                    event: e,
                    position: this.getPosition(e),
                    id: this.starId
                });
            }
        },

        touchStart() {
            this.$nextTick(() => {
                this.isStarActive = true;
            });
        },

        touchEnd() {
            this.$nextTick(() => {
                this.isStarActive = false;
            });
        },

        getPosition(e) {
            let starWidth = (92 / 100) * this.size;
            const offset = Math.max(e.offsetX, 1);
            let position = Math.round((100 / starWidth) * offset);

            return Math.min(position, 100);
        },

        selected(e) {
            this.$emit('star-selected', {
                id: this.starId,
                position: this.getPosition(e)
            });
        }
    },

    render(h) {
        const { base } = this.theme;
        return h(
            'svg',
            {
                attrs: {
                    viewBox: '0 0 50 50',
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: this.starSize
                },
                staticClass: base,
                on: {
                    mousemove: e => {
                        this.mouseMoving(e);
                    },
                    click: e => {
                        this.selected(e);
                    },
                    touchstart: () => {
                        this.touchStart();
                    },
                    touchend: () => {
                        this.touchEnd();
                    }
                }
            },
            [
                h(
                    'linearGradient',
                    {
                        attrs: {
                            id: `${this.id}${this.starId}`,
                            x1: 0,
                            x2: '100%',
                            y1: 0,
                            y2: 0
                        }
                    },
                    [
                        h('stop', {
                            attrs: {
                                offset: this.starFill,
                                'stop-color': this.activeColor
                            }
                        }),
                        h('stop', {
                            attrs: {
                                offset: this.starFill,
                                'stop-color': this.inactiveColor
                            }
                        })
                    ]
                ),
                h('polygon', {
                    attrs: {
                        points: this.starPointsToString,
                        fill: this.gradeId
                    }
                })
            ]
        );
    }
};
