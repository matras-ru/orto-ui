import { selfInstall } from '@/utils/index.js';
import CFormField from '@/mixins/form-field';
import DefaultTheme from '@/themes/default/CFormInput';
import { getComponentConfig } from '@/config';
import { getHashMapValue } from '@/utils';

// TODO: support attr - inputmode

const validTypes = [
    'text',
    'textarea',
    'password',
    'email',
    'number',
    'url',
    'tel',
    'search',
    'date'
];

const createSizeMap = ({ sizeSmBase, sizeMdBase }) => {
    return {
        md: sizeMdBase,
        sm: sizeSmBase
    };
};

const NAME = 'CFormInput';

const REGEXP_NUMBER = /^\d+$/;

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    inheritAttrs: false,

    mixins: [CFormField],

    props: {
        type: {
            type: String,
            default: 'text',
            validator: value => validTypes.includes(value)
        },

        readonly: {
            type: Boolean,
            default: false
        },

        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        // textarea specific

        rows: {
            type: Number,
            default: () => getComponentConfig(NAME, 'rows')
        },

        // number + date specific

        min: {
            type: [Number, String, Date],
            default: null
        },

        max: {
            type: [Number, String, Date],
            default: null
        }
    },

    model: {
        prop: 'modelValue',
        event: 'input'
    },

    computed: {
        isNumeric() {
            return this.type === 'number';
        }
    },

    methods: {
        paste(event) {
            const clipboardData = event.clipboardData || window.clipboardData;

            if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
                event.preventDefault();
            }
        },

        decrease() {
            let numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue <= this.min) return;

            this.update({ type: 'change', value: numericValue - 1 });
        },

        increase() {
            let numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue === this.max) return;

            this.update({ type: 'change', value: numericValue + 1 });
        },

        numericProcess(value) {
            /*
            1 - empty -> null
            2 - min/max
            3 - negative
            */
            const num = parseInt(value);
            const localValue = isNaN(num) ? value : num;

            // 1
            if (!localValue) return this.min || 0;

            // 2
            if (this.max) {
                if (localValue >= this.max) return this.max;
            }

            if (localValue <= this.min) return this.min || 0;

            // 3
            if (localValue < 0) return this.min >= 0 ? this.min : 0;

            return localValue;
        },

        onUpdate({ e, type }) {
            const value = e.target.value;

            if (this.isNumeric) {
                const numericValue = this.numericProcess(value);
                this.update({ type, value: numericValue });
            } else {
                this.update({ type, value });
            }
        },

        update({ type, value }) {
            this.$emit(type === 'input' ? 'input' : 'change', value);
        },

        getControl(h) {
            //
            const {
                base,
                stateReadonly,
                stateNotLabel,
                typeTextarea,
                controlWrap,
                apperanceNumberWrap,
                apperanceNumberBase,
                apperanceNumberStateDisable
            } = this.theme;

            const size = createSizeMap(this.theme);

            const isTextArea = this.type === 'textarea';

            const inputClasses = [base];

            if (isTextArea) inputClasses.push(typeTextarea);

            if (this.readonly) inputClasses.push(stateReadonly);

            if (!this.label) inputClasses.push(stateNotLabel);

            inputClasses.push(getHashMapValue(size, this.size));

            return h(
                'div',
                {
                    staticClass: controlWrap
                },
                [
                    h(isTextArea ? 'textarea' : 'input', {
                        attrs: {
                            ...this.$attrs,
                            name: this.name,
                            id: this.id,
                            type: !isTextArea ? this.type : null,
                            rows: isTextArea ? this.rows : null,
                            ...(['number', 'date'].includes(this.type)
                                ? {
                                      min: this.min,
                                      max: this.max
                                  }
                                : null),
                            placeholder: this.placeholder,
                            readonly: this.readonly
                        },

                        domProps: {
                            value: this.modelValue
                        },

                        class: inputClasses,

                        on: {
                            ...this.$listeners,

                            focus: () => {
                                if (this.readonly) return;
                                this.focused = true;
                                this.$emit('focus');
                            },

                            blur: () => {
                                this.focused = false;
                                this.$emit('blur');
                            },

                            input: e => this.onUpdate({ e, type: 'input' }),

                            change: e => this.onUpdate({ e, type: 'change' }),

                            ...(this.isNumeric && {
                                paste: e => {
                                    this.paste(e);
                                    this.$emit('paste');
                                }
                            })
                        }
                    }),

                    // custom number appearance
                    this.isNumeric
                        ? h(
                              'div',
                              {
                                  staticClass: apperanceNumberWrap
                              },
                              [
                                  h(
                                      'span',
                                      {
                                          staticClass: apperanceNumberBase,
                                          class: [
                                              this.modelValue === this.max
                                                  ? apperanceNumberStateDisable
                                                  : null
                                          ],
                                          on: {
                                              click: this.increase
                                          }
                                      },
                                      this.$slots.up
                                  ),
                                  h(
                                      'span',
                                      {
                                          staticClass: apperanceNumberBase,
                                          class: [
                                              this.modelValue <= this.min
                                                  ? apperanceNumberStateDisable
                                                  : null
                                          ],
                                          on: {
                                              click: this.decrease
                                          }
                                      },
                                      this.$slots.down
                                  )
                              ]
                          )
                        : null
                ]
            );
        }
    }
};
