import { selfInstall } from '@/';
import DefaultTheme from '@/themes/default/CFormInput';

import {
    baseClass,
    defaultClass,
    errorClass,
    defaultSizeClass,
    largeSizeClass,
    notEmptyClass,
    wrapperClass
} from '@/themes/default/CFormInput';

const validTagNames = ['input', 'textarea'];
const validSizes = ['lg', 'md'];
const validTypes = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date'];

export default {
    name: 'Input',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        tag: {
            type: String,
            default: 'input',
            validator: value => validTagNames.includes(value)
        },

        value: {
            type: [String, Number],
            default: null
        },

        type: {
            type: String,
            default: 'text',
            validator: value => validTypes.includes(value)
        },

        size: {
            type: String,
            default: 'md',
            validator: value => validSizes.includes(value)
        },

        error: {
            type: Boolean,
            default: false
        },

        label: {
            type: String,
            default: null
        },

        id: {
            type: [String, Number],
            default: null
        },

        name: {
            type: [String, Number],
            default: null
        },

        hint: {
            type: String,
            default: null
        }
    },

    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
        },

        onFocus() {
            this.$emit('focus');
        },

        onBlur() {
            this.$emit('blur');
        }
    },

    computed: {
        isEmpty() {
            return this.value ? false : true;
        },

        currentClass() {
            const classes = [baseClass];

            switch (this.size) {
                case 'lg':
                    classes.push(largeSizeClass);
                    break;
                case 'md':
                default:
                    classes.push(defaultSizeClass);
                    break;
            }

            classes.push(this.error ? errorClass : defaultClass);

            if (this.tag === 'textarea') {
                classes.push(largeSizeClass);
            }

            if (!this.isEmpty) {
                classes.push(notEmptyClass);
            }

            return classes;
        }
    },

    render(h) {
        const componentData = {
            class: this.currentClass,
            attrs: {
                id: this.id,
                autofocus: this.autofocus,
                name: this.name,
                type: this.type
            },
            domProps: {
                value: this.value
            },
            on: {
                input: this.onInput,
                focus: this.onFocus,
                blur: this.onBlur
            }
        };

        return h('div', { class: wrapperClass }, [
            h(this.tag, componentData),
            h('CFormLabel', { attrs: { for: this.id }, props: { variant: 'primary' } }, this.label)
        ]);
    }
};
