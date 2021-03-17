import { selfInstall } from '@/utils';
import DefaultTheme from '@/themes/default/CRating';
import CStar from './star';

const NAME = 'CRating';
const SCALE_DEFAULT = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 }
];

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    components: {
        CStar
    },

    props: {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        id: {
            type: [Number, String],
            default: Math.random().toString(36).substring(7)
        },

        scale: {
            type: [Number, Array],
            default: 5
        },

        increment: {
            type: [Number, String],
            default: 1
        },

        rating: {
            type: [Number, String],
            default: undefined
        },

        readOnly: {
            type: Boolean,
            default: false
        },

        starSize: {
            type: Number,
            default: 32
        },

        activeOnClick: {
            type: Boolean,
            default: false
        },

        gradeModel: {
            type: Number,
            default: undefined
        }
    },

    data() {
        return {
            fillLevel: [],
            currentRating: this.rating,
            selectedRating: this.rating,
            isSelected: false,
            activeColor: this.theme.stateActive,
            inactiveColor: this.theme.stateDefault,
            scaleComputed: this.scale.length ? this.scale : SCALE_DEFAULT
        };
    },

    model: {
        prop: 'gradeModel',
        event: 'starSelected'
    },

    computed: {
        computedLabel() {
            return this.scaleComputed.find(item => item.value === this.currentRating);
        },

        maxRating() {
            return this.scale.length || this.scale;
        },

        roundedRating() {
            let inv = 1.0 / this.increment;
            return Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv);
        },

        activeColors() {
            if (Array.isArray(this.activeColor)) {
                return this.padColors(
                    this.activeColor,
                    this.maxRating,
                    this.activeColor.slice(-1)[0]
                );
            }
            return new Array(this.maxRating).fill(this.activeColor);
        },

        currentActiveColor() {
            if (!this.activeOnClick) {
                return this.currentRating > 0
                    ? this.activeColors[Math.ceil(this.currentRating) - 1]
                    : this.inactiveColor;
            }
            return this.selectedRating > 0
                ? this.activeColors[Math.ceil(this.selectedRating) - 1]
                : this.inactiveColor;
        }
    },

    created() {
        this.createStars();
    },

    methods: {
        setRating(e, persist) {
            if (!this.readOnly) {
                const position = e.position / 100;
                this.currentRating = (e.id + position).toFixed(2);
                this.currentRating =
                    this.currentRating > this.maxRating ? this.maxRating : this.currentRating;
                if (persist) {
                    this.createStars(true, true);
                    this.selectedRating =
                        this.currentRating === this.selectedRating ? 0 : this.currentRating;
                    this.$emit('starSelected', this.selectedRating);
                    this.isSelected = true;
                } else {
                    this.createStars(true, !this.activeOnClick);
                    this.$emit('starMouseMove', this.currentRating); // for storybook
                }
            }
        },

        resetRating() {
            if (!this.readOnly) {
                this.currentRating = this.selectedRating;
                this.createStars(this.isSelected);
            }
        },

        createStars(round = true, applyFill = true) {
            this.currentRating = round ? this.roundedRating : this.currentRating;
            for (let i = 0; i < this.maxRating; i++) {
                let level = 0;
                if (i < this.currentRating) {
                    level = this.currentRating - i > 1 ? 100 : (this.currentRating - i) * 100;
                }
                if (applyFill) {
                    this.fillLevel[i] = Math.round(level);
                }
            }
        },

        padColors(array, minLength, fillValue) {
            return Object.assign(new Array(minLength).fill(fillValue), array);
        }
    },

    render(h) {
        const { starsWrapper, labelWrapper, stateCursorPointer } = this.theme;
        const stars = this.scaleComputed.map(({ value }, i) => {
            if (typeof value === 'number' && value <= this.maxRating && value >= 0) {
                return h('CStar', {
                    props: {
                        fill: this.fillLevel[i],
                        starId: i,
                        activeColor: this.currentActiveColor,
                        inactiveColor: this.inactiveColor,
                        size: this.starSize,
                        gradeModel: this.gradeModel,
                        id: this.id
                    },
                    on: {
                        starSelected: e => this.setRating(e, true),
                        starMouseMove: e => this.setRating(e)
                    }
                });
            }
        });

        return h('div', [
            h(
                'span',
                {
                    staticClass: starsWrapper,
                    class: { stateCursorPointer: !this.readOnly },
                    on: {
                        mouseleave: () => this.resetRating()
                    }
                },
                stars
            ),
            (this.computedLabel && this.computedLabel.label) || this.rating
                ? h(
                      'div',
                      {
                          staticClass: labelWrapper
                      },
                      this.computedLabel && this.computedLabel.label
                          ? ` - ${this.computedLabel.label}`
                          : ` - ${this.rating}`
                  )
                : null
        ]);
    }
};
