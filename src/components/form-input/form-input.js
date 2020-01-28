import { selfInstall } from '@/';
import CFormField from '@/mixins/form-field';
import DefaultTheme from '@/themes/default/CFormInput';

const validTagNames = ['input', 'textarea'];
const validTypes = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date'];

// const validSizes = ['lg', 'md'];

const NAME = 'CFormInput';

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [CFormField],

    props: {
        tag: {
            type: String,
            default: 'input',
            validator: value => validTagNames.includes(value)
        },

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
        }
    },

    model: {
        prop: 'modelValue',
        event: 'input'
    },

    methods: {
        onUpdate({ e, type }) {
            const value = e.target.value;
            this.$emit(type, value);
        },

        getControl(h) {
            return h(this.tag, {
                attrs: {
                    type: this.type,
                    placeholder: this.placeholder,
                    readonly: this.readonly
                },
                domProps: {
                    value: this.modelValue
                },
                staticClass: this.theme.base,
                class: [{ 'cursor-pointer': this.readonly }],
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
            });
        }
    }
};
