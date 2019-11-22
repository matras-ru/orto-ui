import { selfInstall } from '@/utils';
import commonAttributes from '@/mixins/commonAttributes.js';
import CLabel from '@/components/CLabel';

import ThemeClass from '@/themes/default/CInput';

const {
    baseClass,
    defaultClass,
    errorClass,
    defaultSizeClass,
    largeSizeClass,
    notEmptyClass,
    wrapperClass
} = ThemeClass;

const validTagNames = ['input', 'textarea'];

const validVariants = ['error'];

const validSizes = ['lg'];

export default {
    name: 'Input',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        ...commonAttributes.props,
        tagName: {
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
            default: null
        },
        size: {
            type: String,
            default: null,
            validator: value => value === null || validSizes.includes(value)
        },
        variant: {
            type: String,
            default: null,
            validator: value => value === null || validVariants.includes(value)
        },
        label: {
            type: String,
            default: null
        },
        hint: {
            type: String,
            default: null
        }
    },

    components: {
        CLabel
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
        componentToRender() {
            if (!this.type) {
                return 'textarea';
            }

            return this.tagName;
        },

        isEmpty() {
            return this.value ? false : true;
        },

        currentClass() {
            let classes = [baseClass];

            switch (this.size) {
                case 'lg':
                    classes.push(largeSizeClass);
                    break;
                default:
                    classes.push(defaultSizeClass);
                    break;
            }

            switch (this.variant) {
                case 'error':
                    classes.push(errorClass);
                    break;
                default:
                    classes.push(defaultClass);
                    break;
            }

            if (!this.type) {
                classes.push(largeSizeClass);
            }

            if (!this.isEmpty) {
                classes.push(notEmptyClass);
            }

            return classes;
        }
    },

    render(h) {
        const attrs = {
            id: this.id,
            autofocus: this.autofocus,
            name: this.name,
            type: this.type
        };

        const on = {
            input: this.onInput,
            focus: this.onFocus,
            blur: this.onBlur
        };

        const componentData = {
            class: this.currentClass,
            attrs: attrs,
            domProps: {
                value: this.value
            },
            on
        };

        return h('div', { class: wrapperClass }, [
            h(this.componentToRender, componentData),
            h('CLabel', { attrs: { for: this.id, variant: 'primary' } }, this.label)
        ]);
    }
};
