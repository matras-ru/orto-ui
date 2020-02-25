import { selfInstall } from '@/';
import CFormField from '@/mixins/form-field';
import DefaultTheme from '@/themes/default/CFormInput';
import { getComponentConfig } from '@/config';

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

const NAME = 'CFormInput';

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

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

        // extarea specific

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
        decrease() {
            let numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue <= this.min) return;

            this.update({ type: 'input', value: numericValue - 1 });
        },

        increase() {
            let numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue === this.max) return;

            this.update({ type: 'input', value: numericValue + 1 });
        },

        numericProcess(value) {
            /*
            1 - empty -> null
            2 - min/max
            3 - negative
            */
            const num = parseFloat(value);
            const localValue = isNaN(num) ? value : num;

            // 1
            if (!localValue) return null;

            // 2
            if (localValue >= this.max) return this.max;
            if (localValue <= this.min) return this.min;

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
                typeTextarea,
                controlWrap,
                apperanceWrap,
                apperanceBase,
                apperanceStateDisable
            } = this.theme;

            const isTextArea = this.type === 'textarea';

            const inputClasses = [base];

            if (this.isTextArea) inputClasses.push(typeTextarea);

            if (this.readonly) inputClasses.push(stateReadonly);

            return h(
                'div',
                {
                    staticClass: controlWrap
                },
                [
                    h(isTextArea ? 'textarea' : 'input', {
                        attrs: {
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
                            },

                            blur: () => (this.focused = false),

                            input: e => this.onUpdate({ e, type: 'input' }),

                            change: e => this.onUpdate({ e, type: 'change' })
                        }
                    }),

                    // custom number apperance
                    this.isNumeric
                        ? h(
                              'div',
                              {
                                  staticClass: apperanceWrap
                              },
                              [
                                  h(
                                      'span',
                                      {
                                          staticClass: apperanceBase,
                                          class: [
                                              this.modelValue === this.max
                                                  ? apperanceStateDisable
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
                                          staticClass: apperanceBase,
                                          class: [
                                              this.modelValue <= this.min
                                                  ? apperanceStateDisable
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
