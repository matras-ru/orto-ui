'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var vueFunctionalDataMerge=require('vue-functional-data-merge'),resolveConfig=_interopDefault(require('tailwindcss/resolveConfig')),tailwindcssTransitions=_interopDefault(require('tailwindcss-transitions')),tailwindcssTransforms=_interopDefault(require('tailwindcss-transforms')),customForms=_interopDefault(require('@tailwindcss/custom-forms')),merge=_interopDefault(require('lodash.merge'));var baseClass =
    'inline-block align-top rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3 mb-1-4';
var defaultClass = 'bg-white border-primary-100 transition-shadow hover:shadow';
var primaryClass = 'bg-primary-100 border-primary-100 transition-shadow hover:shadow';
var secondaryClass =
    'bg-white border-secondary-200 text-secondary-200 transition-bg transition-color hover:text-white hover:bg-secondary-200';
var tertiaryClass =
    'bg-white border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100';
var quaternaryClass =
    'bg-white border-black-100 transition-bg transition-color hover:text-white hover:bg-black-100';
var disabledClass = 'cursor-not-allowed opacity-75';
var defaultSizeClass = 'text-base px-1-5 py-0-4 leading-snug';
var largeSizeClass = 'text-lg px-1-5 py-0-6 leading-none';
var smallSizeClass = 'text-base px-1-3 py-0-3 leading-snug';

var CButton = {
    baseClass: baseClass,
    defaultClass: defaultClass,
    defaultClass: defaultClass,
    primaryClass: primaryClass,
    secondaryClass: secondaryClass,
    tertiaryClass: tertiaryClass,
    quaternaryClass: quaternaryClass,
    disabledClass: disabledClass,
    defaultSizeClass: defaultSizeClass,
    smallSizeClass: smallSizeClass,
    largeSizeClass: largeSizeClass
};var baseClass$1 = 'inline-block align-top';
var defaultClass$1 = 'fill-default';
var defaultSizeClass$1 = 'w-1-6 h-1-6';
var largeSizeClass$1 = '';
var smallSizeClass$1 = '';

var CIcon = { baseClass: baseClass$1, defaultClass: defaultClass$1, defaultSizeClass: defaultSizeClass$1, largeSizeClass: largeSizeClass$1, smallSizeClass: smallSizeClass$1 };var baseClass$2 =
    'form-input-custom inline-block rounded-lg bg-white text-black-100 border-2 px-1-2 outline-none resize-none focus:border-primary-100 focus:text-black-100 transition-border transition-250 transition-ease-in-out';
var defaultClass$2 = 'border-primary-200';
var defaultSizeClass$2 = 'h-2-8';
var largeSizeClass$2 = 'h-12-4 py-0-6';
var errorClass = 'form-input-is-error border-danger text-danger';
var notEmptyClass = 'form-input-not-empty';
var wrapperClass = 'relative inline-block';

var CFormInput = {
    baseClass: baseClass$2,
    defaultClass: defaultClass$2,
    defaultSizeClass: defaultSizeClass$2,
    largeSizeClass: largeSizeClass$2,
    errorClass: errorClass,
    notEmptyClass: notEmptyClass,
    wrapperClass: wrapperClass
};var baseClass$3 = 'mb-1-4';

var CForm = {
    baseClass: baseClass$3
};var baseClass$4 = 'mb-1-4';

var CFormGroup = {
    baseClass: baseClass$4
};var baseClass$5 = 'mb-1-4';
var defaultClass$3 = 'text-danger';

var CFormError = {
    baseClass: baseClass$5,
    defaultClass: defaultClass$3
};var baseClass$6 = 'inline-block transition-250 transition-all';
var primaryClass$1 =
    'text-tertiary-300 bg-traansparent absolute px-0-3 pb-0-3 pt-0-6 top-0-1s left-0-6';

var CFormLabel = {
    baseClass: baseClass$6,
    primaryClass: primaryClass$1
};var disabledClass$1 = 'text-tertiary-200';
var baseIconRadioClass = 'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-full';
var baseIconCheckboxClass = 'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm';
var defaultIconClass = 'border-black-200 bg-white';
var checkedIconClass = 'border-black-200 bg-secondary-200 shadow-inner';
var disabledIconClass = 'border-tertiary-200 bg-white';
var labelClass = 'flex mb-1-4';
var inputClass = 'absolute opacity-0 pointer-events-none';
var wrapperClass$1 = 'inline-flex';

var CRadioCheckbox = {
    disabledClass: disabledClass$1,
    baseIconRadioClass: baseIconRadioClass,
    baseIconCheckboxClass: baseIconCheckboxClass,
    defaultIconClass: defaultIconClass,
    checkedIconClass: checkedIconClass,
    disabledIconClass: disabledIconClass,
    labelClass: labelClass,
    inputClass: inputClass,
    wrapperClass: wrapperClass$1
};var baseClass$7 = ['outline-none', 'select-none'];

var CTabs = {
    baseClass: baseClass$7
};var baseClass$8 = '';
var defaultClass$4 = '';

var CTab = {
    baseClass: baseClass$8,
    defaultClass: defaultClass$4
};// TODO: вынести глобальные унивирсальные классы типо 'betweenClass' ???
var baseClass$9 = ['flex', 'flex-wrap'];
var defaultClass$5 = ['flex-col'];
var horizontalClass = ['flex-row'];
var betweenClass = ['justify-between'];
var startClass = ['justify-start'];
var endClass = ['justify-end'];

var ThemeClass = {
    baseClass: baseClass$9,
    defaultClass: defaultClass$5,
    horizontalClass: horizontalClass,
    betweenClass: betweenClass,
    startClass: startClass,
    endClass: endClass
};var baseClass$a = ['inline-block'];

var CListItem = {
    baseClass: baseClass$a
};var baseClass$b = 'container px-8';
var fluidClass = 'max-w-none';

var ThemeClass$1 = {
    baseClass: baseClass$b,
    fluidClass: fluidClass
};var baseClass$c = ['flex', 'flex-wrap'];
var mediumGuttersNormalizeClass = ['-mx-8'];
var mediumGuttersClass = ['px-8'];
//
var smallSizeGuttersNormalizeClass = ['-mx-4'];
var smallSizeGuttersClass = ['px-4'];
//
var betweenClass$1 = ['justify-between'];
var startClass$1 = ['justify-start'];
var endClass$1 = ['justify-end'];
//
var alignClass = '';
// ...

var CRow = {
    baseClass: baseClass$c,
    mediumGuttersNormalizeClass: mediumGuttersNormalizeClass,
    mediumGuttersClass: mediumGuttersClass,
    smallSizeGuttersNormalizeClass: smallSizeGuttersNormalizeClass,
    smallSizeGuttersClass: smallSizeGuttersClass,
    betweenClass: betweenClass$1,
    startClass: startClass$1,
    endClass: endClass$1,
    alignClass: alignClass
};var baseClass$d = [];
var defaultClass$6 = ['flex-1', 'max-w-full'];

var CCol = {
    baseClass: baseClass$d,
    defaultClass: defaultClass$6
};var DefaultTheme=/*#__PURE__*/Object.freeze({__proto__:null,CButton: CButton,CIcon: CIcon,CFormInput: CFormInput,CForm: CForm,CFormGroup: CFormGroup,CFormError: CFormError,CFormLabel: CFormLabel,CRadioCheckbox: CRadioCheckbox,CTabs: CTabs,CTab: CTab,CList: ThemeClass,CListItem: CListItem,CContainer: ThemeClass$1,CRow: CRow,CCol: CCol});var selfInstall = function (Vue, theme, component) {
    if ( theme === void 0 ) theme = {};

    var props = component.props;

    Object.keys(theme).forEach(function (key) {
        var prop = {
            default: function () { return theme[key]; }
        };
        props[key] = prop;
    });

    Vue.component(component.name, Object.assign({}, component,
        {props: props}));
};

var noop = function () {};var form = {
    name: 'Form',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        action: {
            type: String,
            default: null
        },

        method: {
            type: String,
            default: null
        }
    },

    methods: {
        onSubmit: function onSubmit() {
            this.$emit('submit');
        }
    },

    render: function render(h) {
        var componentData = {
            staticClass: baseClass$3,
            attrs: {
                action: this.action,
                method: this.method
            },
            on: {
                submit: this.onSubmit
            }
        };

        return h('form', componentData, this.$slots.default);
    }
};var formError = {
    name: 'Error',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    render: function render(h, ref) {
        var children = ref.children;

        var componentData = {
            staticClass: [baseClass$5, defaultClass$3]
        };

        return h('div', componentData, children);
    }
};var formGroup = {
    name: 'FormGroup',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    render: function render(h, ref) {
        var children = ref.children;

        var componentData = {
            staticClass: baseClass$4
        };

        return h('div', componentData, children);
    }
};var commonAttributes = {
    props: {
        id: {
            type: String,
            default: null
        },

        autofocus: {
            type: Boolean,
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        },

        name: {
            type: String,
            default: null
        },

        tabindex: {
            type: [String, Number],
            default: null
        }
    }
};var validTagNames = ['input', 'textarea'];

var validSizes = ['lg', 'md'];

var formInput = {
    name: 'Input',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: Object.assign({}, commonAttributes.props,

        {tag: {
            type: String,
            default: 'input',
            validator: function (value) { return validTagNames.includes(value); }
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
            default: 'md',
            validator: function (value) { return validSizes.includes(value); }
        },

        error: {
            type: Boolean,
            default: false
        },

        label: {
            type: String,
            default: null
        },

        hint: {
            type: String,
            default: null
        }}),

    methods: {
        onInput: function onInput(e) {
            this.$emit('input', e.target.value);
        },

        onFocus: function onFocus() {
            this.$emit('focus');
        },

        onBlur: function onBlur() {
            this.$emit('blur');
        }
    },

    computed: {
        isEmpty: function isEmpty() {
            return this.value ? false : true;
        },

        currentClass: function currentClass() {
            var classes = [baseClass$2];

            switch (this.size) {
                case 'lg':
                    classes.push(largeSizeClass$2);
                    break;
                case 'md':
                default:
                    classes.push(defaultSizeClass$2);
                    break;
            }

            classes.push(this.error ? errorClass : defaultClass$2);

            if (this.tag === 'textarea') {
                classes.push(largeSizeClass$2);
            }

            if (!this.isEmpty) {
                classes.push(notEmptyClass);
            }

            return classes;
        }
    },

    render: function render(h) {
        var componentData = {
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
            h('CFormLabel', { attrs: { for: this.id, variant: 'primary' } }, this.label)
        ]);
    }
};var validVariants = ['primary'];

var props = {
    variant: {
        type: String,
        default: 'primary',
        validator: function (value) { return validVariants.includes(value); }
    },

    for: {
        type: String,
        default: null
    }
};

var currentClass = function (ref) {
    var variant = ref.variant;

    var classes = [baseClass$6];

    switch (variant) {
        case 'primary':
            classes.push(primaryClass$1);
            break;
    }

    return classes;
};

var formLabel = {
    name: 'Label',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props,

    render: function render(h, ref) {
        var props = ref.props;
        var children = ref.children;

        var componentData = {
            class: currentClass(props),
            attrs: {
                for: props.for
            }
        };

        return h('label', componentData, children);
    }
};var radioCheckboxMixin = {
    props: Object.assign({}, commonAttributes.props,

        {label: {
            type: String,
            default: null
        },

        hint: {
            type: String,
            default: null
        }}),

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    computed: {
        currentClass: function currentClass() {
            var classes = [labelClass];

            if (this.disabled) {
                classes.push(disabledClass$1);
            }

            return classes;
        },

        currentIconClass: function currentIconClass() {
            var classes = [this.type === 'checkbox' ? baseIconCheckboxClass : baseIconRadioClass];

            if (this.disabled) {
                classes.push(disabledIconClass);
            } else if (this.shouldBeChecked) {
                classes.push(checkedIconClass);
            } else {
                classes.push(defaultIconClass);
            }

            return classes;
        }
    },

    render: function render(h) {
        var inputData = {
            staticClass: inputClass,
            attrs: {
                id: this.id,
                autofocus: this.autofocus,
                name: this.name,
                type: this.type,
                disabled: this.disabled
            },
            domProps: {
                checked: this.shouldBeChecked,
                value: this.value
            },
            on: {
                change: this.onChange
            }
        };

        return h('label', { class: this.currentClass, attrs: { for: this.id } }, [
            h('input', inputData),
            h('div', { class: wrapperClass$1 }, [
                h('span', { class: this.currentIconClass }),
                h('span', this.label)
            ])
        ]);
    }
};var radio = {
    name: 'CRadio',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxMixin],

    props: {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },

        value: {
            type: [String, Number, Boolean],
            default: null
        }
    },

    data: function data() {
        return {
            type: 'radio'
        };
    },

    computed: {
        shouldBeChecked: function shouldBeChecked() {
            return this.modelValue === this.value;
        }
    },

    methods: {
        onChange: function onChange(e) {
            if (e.target.checked) {
                this.$emit('change', this.value);
            }
        }
    }
};var radioCheckboxGroupMixin = {
    props: {
        data: {
            type: Array,
            default: function () { return []; }
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    methods: {
        setValue: function setValue(val) {
            this.$emit('change', val);
        }
    },

    render: function render(h) {
        var this$1 = this;

        var children = this.data.map(function (ref) {
                var id = ref.id;
                var label = ref.label;
                var name = ref.name;
                var disabled = ref.disabled;
                var value = ref.value;
                var autofocus = ref.autofocus;

                return h(this$1.type === 'checkbox-group' ? 'CCheckbox' : 'CRadio', {
                props: {
                    modelValue: this$1.modelValue,
                    id: id,
                    label: label,
                    name: name,
                    disabled: disabled,
                    autofocus: autofocus,
                    value: value
                },
                on: {
                    change: function (val) {
                        this$1.setValue(val);
                    }
                }
            });
        }
        );

        return h('div', {}, children);
    }
};var radioGroup = {
    name: 'CRadioGroup',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxGroupMixin],

    props: {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        }
    },

    data: function data() {
        return {
            type: 'radio-group'
        };
    }
};var checkbox = {
    name: 'CCheckbox',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxMixin],

    props: {
        modelValue: {
            type: [Array, Boolean],
            default: null
        },

        value: {
            type: [String, Number],
            default: null
        },

        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },

        falseValue: {
            type: [String, Number, Boolean],
            default: false
        }
    },

    data: function data() {
        return {
            type: 'checkbox'
        };
    },

    computed: {
        shouldBeChecked: function shouldBeChecked() {
            if (this.modelValue instanceof Array) {
                return this.modelValue.includes(this.value);
            }

            return this.modelValue === this.trueValue;
        }
    },

    methods: {
        onChange: function onChange(e) {
            if (this.modelValue instanceof Array) {
                var newValue = [].concat( this.modelValue );

                if (e.target.checked) {
                    newValue.push(this.value);
                } else {
                    newValue.splice(newValue.indexOf(this.value), 1);
                }

                this.$emit('change', newValue);
            } else {
                this.$emit('change', e.target.checked ? this.trueValue : this.falseValue);
            }
        }
    }
};var checkboxGroup = {
    name: 'CCheckboxGroup',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [radioCheckboxGroupMixin],

    props: {
        modelValue: {
            type: Array,
            default: function () { return []; }
        }
    },

    data: function data() {
        return {
            type: 'checkbox-group'
        };
    }
};var validTagNames$1 = ['button', 'a'];
var validVariants$1 = ['primary', 'secondary', 'tertiary', 'quaternary'];
var validSizes$1 = ['lg', 'md', 'sm'];

var props$1 = Object.assign({}, commonAttributes.props,

    {tagName: {
        type: String,
        default: 'button', // TODO: default value -> global.config
        validator: function (value) { return validTagNames$1.includes(value); }
    },

    label: {
        type: String,
        default: null
    },

    value: {
        type: [String, Number],
        default: null
    },

    type: {
        type: String,
        default: null
    },

    href: {
        type: String,
        default: null
    },

    variant: {
        type: String,
        default: 'primary', // TODO: default value -> global.config
        validator: function (value) { return validVariants$1.includes(value); }
    },

    size: {
        type: String,
        default: 'md', // TODO: default value -> global.config
        validator: function (value) { return validSizes$1.includes(value); }
    },

    activeClass: {
        type: String,
        default: 'router-link-active'
    },

    exactActiveClass: {
        type: String,
        default: 'router-link-exact-active'
    }});

var currentClass$1 = function (props) {
    var classes = [baseClass];

    if (props.disabled) {
        classes.push(disabledClass);
    }

    switch (props.size) {
        case 'sm':
            classes.push(smallSizeClass);
            break;
        case 'lg':
            classes.push(largeSizeClass);
            break;
        case 'md':
        default:
            classes.push(defaultSizeClass);
            break;
    }

    switch (props.variant) {
        case 'primary':
            classes.push(primaryClass);
            break;
        case 'secondary':
            classes.push(secondaryClass);
            break;
        case 'tertiary':
            classes.push(tertiaryClass);
            break;
        case 'quaternary':
            classes.push(quaternaryClass);
            break;
        default:
            classes.push(defaultClass);
            break;
    }

    return classes;
};

var componentToRender = function (props) {
    // if (this.isARouterLink) {
    //     return (
    //         this.$options.components.NuxtLink ||
    //         this.$options.components.RouterLink
    //     );
    // }

    if (props.href) {
        return 'a';
    }

    return props.tagName;
};

var getAttributes = function (props) {
    // if (props.isARouterLink) {
    //     return {
    //         to: props.to,
    //         replace: props.replace,
    //         append: props.append,
    //         tag: props.tagName,
    //         activeClass: props.activeClass,
    //         exact: props.exact,
    //         event: ['click', 'focus', 'blur'],
    //         exactActiveClass: props.exactActiveClass,
    //         id: props.id,
    //         value: props.value,
    //         autofocus: props.autofocus,
    //         disabled: props.disabled,
    //         name: props.name,
    //         type: props.type
    //     };
    // }

    return {
        id: props.id,
        value: props.value,
        autofocus: props.autofocus,
        disabled: props.disabled,
        name: props.name,
        href: props.href,
        type: props.type
    };
};

var button = {
    name: 'CButton',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$1,

    render: function render(h, ref) {
        var props = ref.props;
        var listeners = ref.listeners;
        var children = ref.children;

        var onClick = listeners['onClick'] || noop;
        var onFocus = listeners['onFocus'] || noop;
        var onBlur = listeners['onBlur'] || noop;

        var on = {
            click: function click(e) {
                onClick(e);
            },

            focus: function focus(e) {
                onFocus(e);
            },

            blur: function blur(e) {
                onBlur(e);
            }
        };

        var componentData = {
            class: currentClass$1(props),
            attrs: getAttributes(props),
            on: on
        };

        return h(componentToRender(props), componentData, props.label ? props.label : children);
    }
};/*  TODO:
MVP готово

feature list:
- управление с клавиатуры
- initial state на основании window.location.hash
*/

var tabs = {
    name: 'CTabs',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        value: {
            type: [Number, String],
            default: null
        }
    },

    model: {
        prop: 'value',
        event: 'change'
    },

    methods: {
        switchTab: function switchTab(name) {
            this.$emit('change', name);
        }
    },

    render: function render(h) {
        var this$1 = this;

        var normalizeTabs = this.$slots.default.map(function (tab) {
            var ref = tab.componentOptions.propsData;
            var name = ref.name;
            var isActive = this$1.value === name;

            // mixin isAactive props
            tab.componentOptions.propsData = Object.assign({}, tab.componentOptions.propsData,
                {isActive: isActive});

            // mixin listeners
            tab.componentOptions.listeners = Object.assign({}, tab.componentOptions.listeners,
                {onClick: function (name) {
                    this$1.switchTab(name);
                }});

            return tab;
        });

        return h(
            'CList',
            {
                attrs: {
                    role: 'tablist'
                },
                props: {
                    horizontal: true,
                    justify: 'between'
                }
            },
            [normalizeTabs]
        );
    }
};var tab = {
    name: 'CTab',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        label: {
            type: String,
            default: null
        },

        name: {
            type: String,
            default: null
        },

        isActive: {
            type: Boolean,
            default: false
        }
    },

    render: function render(h) {
        var this$1 = this;

        return h(
            'CListItem',
            {
                attrs: { role: 'presentation' }
            },
            [
                // TODO: Заменить на LINK
                h(
                    'a',
                    {
                        attrs: {
                            href: ("#" + (this.name)),
                            id: ("tab-" + (this.name)),
                            role: 'tab',
                            tabindex: this.isActive ? null : '-1',
                            'aria-selected': this.isActive ? 'true' : 'false'
                        },
                        on: {
                            click: function () {
                                this$1.$emit('onClick', this$1.name);
                            }
                        },
                        staticClass:
                            'block outline-none select-none font-semibold text-lg uppercase px-1-7 py-1-5',
                        class: {
                            'text-secondary-200 border-b-4 border-secondary-200': this.isActive
                        }
                    },
                    this.label
                )
            ]
        );
    }
};var tabPanels = {
    name: 'CTabPanels',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        value: {
            type: [String, Number],
            default: null
        },

        lazy: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'value',
        event: 'change'
    },

    render: function render(h) {
        var this$1 = this;

        var normalizeTabPanels = this.$slots.default.map(function (tabPanel) {
            var ref = tabPanel.componentOptions.propsData;
            var name = ref.name;
            var isActive = this$1.value === name;

            // mixin isAactive props
            tabPanel.componentOptions.propsData = Object.assign({}, tabPanel.componentOptions.propsData,
                {isActive: isActive});

            return this$1.lazy ? (isActive ? tabPanel : null) : tabPanel;
        });

        return h('div', {}, [normalizeTabPanels]);
    }
};var tabPanel = {
    name: 'CTabPanel',

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        name: {
            type: String,
            default: null
        },

        isActive: {
            type: Boolean,
            default: false
        }
    },

    render: function render(h) {
        return h(
            'section',
            {
                staticClass: 'outline-none select-none',
                attrs: {
                    role: 'tabpanel',
                    id: this.name,
                    'aria-labelledby': ("tab-" + (this.name)),
                    tabindex: '-1',
                    hidden: !this.isActive
                }
            },
            [this.$slots.default]
        );
    }
};var baseClass$e = ThemeClass.baseClass;
var defaultClass$7 = ThemeClass.defaultClass;
var horizontalClass$1 = ThemeClass.horizontalClass;
var startClass$2 = ThemeClass.startClass;
var endClass$2 = ThemeClass.endClass;
var betweenClass$2 = ThemeClass.betweenClass; // TODO: flex-class вынести

var props$2 = {
    tag: {
        type: String,
        default: 'ul'
    },

    horizontal: {
        type: Boolean,
        default: false
    },

    justify: {
        type: String,
        default: null
    }
};

var currentClass$2 = function (props) {
    var classes = [].concat( baseClass$e );

    // horizontal/vertical
    classes.push(props.horizontal ? [].concat( horizontalClass$1 ) : [].concat( defaultClass$7 ));

    // horizontal align
    switch (props.justify) {
        case 'end':
            classes.push.apply(classes, endClass$2);
            break;
        case 'between':
            classes.push.apply(classes, betweenClass$2);
            break;
        case 'start':
            classes.push.apply(classes, startClass$2);
            break;
    }

    return classes;
};

var list = {
    name: 'List',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$2,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$2(props)
        };

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var props$3 = {
    tag: {
        type: String,
        default: 'li'
    }
};

var listItem = {
    name: 'ListItem',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$3,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            staticClass: baseClass$a.join(' ')
        };

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var baseClass$f = ThemeClass$1.baseClass;
var fluidClass$1 = ThemeClass$1.fluidClass;

var props$4 = {
    tag: {
        type: String,
        default: 'div'
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

var currentClass$3 = function (props) {
    var classes = [baseClass$f];

    if (props.fluid) { classes.push(fluidClass$1); }

    return classes;
};

var container = {
    name: 'CContainer',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$4,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$3(props)
        };

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var VALID_GUTTERS = ['none', 'md', 'sm'];
var VALID_DIRECTION = ['row', 'column'];
var VALID_ALIGN = ['start', 'center', 'end'];
var VALID_JUSTIFY = ['start', 'center', 'between', 'end'];

var props$5 = {
    justify: {
        type: String,
        default: null,
        validator: function (value) { return VALID_JUSTIFY.includes(value); }
    },

    align: {
        type: String,
        default: null,
        validator: function (value) { return VALID_ALIGN.includes(value); }
    },

    direction: {
        type: String,
        default: 'row',
        validator: function (value) { return VALID_DIRECTION.includes(value); }
    },

    gutters: {
        type: String,
        default: 'md',
        validator: function (value) { return VALID_GUTTERS.includes(value); }
    }
};

var currentClass$4 = function (ref) {
    var gutters = ref.gutters;

    var rowClasses = [].concat( baseClass$c );
    var colClasses = [];

    // negative margin div.-mx-4/8/none + positive padding for children cols
    switch (gutters) {
        case 'none':
            break;
        case 'sm':
            rowClasses.push.apply(rowClasses, smallSizeGuttersNormalizeClass);
            colClasses.push.apply(colClasses, smallSizeGuttersClass);
            break;
        case 'md':
        default:
            rowClasses.push.apply(rowClasses, mediumGuttersNormalizeClass);
            colClasses.push.apply(colClasses, mediumGuttersClass);
            break;
    }

    return {
        rowClasses: rowClasses,
        colClasses: colClasses
    };
};

var row = {
    name: 'CRow',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$5,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children; if ( children === void 0 ) children = [];

        var ref$1 = currentClass$4(props);
        var rowClasses = ref$1.rowClasses;
        var colClasses = ref$1.colClasses;

        var componentData = {
            class: rowClasses
        };

        var computedChildren = children.map(function (item) {
            item.data.staticClass = colClasses.join(' '); // add gutters for Cols
            return item;
        });

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), computedChildren);
    }
};var tailwind_config = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        colors: {
            transparent: 'transparent',

            black: {
                100: '#292929',
                200: '#3d4145'
            },
            white: '#fff',

            primary: {
                100: '#ffcd00'
            },
            secondary: {
                100: '#f3f7f9',
                200: '#3da2e2'
            },
            tertiary: {
                100: '#e0e7ec',
                200: '#c3d0d7',
                300: '#a6b1b6'
            },
            danger: '#f1001a'
        },
        spacing: {
            px: '1px',
            '0': '0',
            '-0-3': '-0.375rem',
            '0-1': '0.125rem',
            '0-2': '0.25rem',
            '0-3': '0.375rem',
            '0-4': '0.5rem',
            '0-5': '0.625rem',
            '0-6': '0.75rem',
            '0-7': '0.875rem',
            '0-8': '1rem',
            '1-1': '1.125rem',
            '1-2': '1.25rem',
            '1-3': '1.375rem',
            '1-4': '1.5rem',
            '1-5': '1.625rem',
            '1-6': '1.75rem',
            '1-7': '1.875rem',
            '1-8': '2rem',
            '2-1': '2.125rem',
            '2-2': '2.25rem',
            '2-3': '2.375rem',
            '2-4': '2.5rem',
            '2-5': '2.625rem',
            '2-6': '2.75rem',
            '2-7': '2.875rem',
            '2-8': '3rem',
            '12-4': '12.5rem'
        },
        backgroundColor: function (theme) { return theme('colors'); },
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain'
        },
        borderColor: function (theme) { return (Object.assign({}, theme('colors'),
            {default: theme('colors.gray.300', 'currentColor')})); },
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            default: '0.25rem',
            lg: '1.375rem',
            full: '9999px'
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '8': '8px'
        },
        boxShadow: {
            default: '0 6px 12px rgba(255, 205, 0, .7)',
            inner: 'inset 0 0 0 2px #FFFFFF',
            none: 'none'
        },
        container: {
            center: true,
            padding: '1rem'
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed'
        },
        fill: function (theme) { return ({
            default: theme('colors.black.100')
        }); },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none'
        },
        flexGrow: {
            '0': '0',
            default: '1'
        },
        flexShrink: {
            '0': '0',
            default: '1'
        },
        fontFamily: {
            body: ['Helvetica', 'sans-serif']
        },
        fontSize: {
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem'
        },
        fontWeight: {
            hairline: '100',
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900'
        },
        height: function (theme) { return (Object.assign({}, {auto: 'auto'},
            theme('spacing'),
            {full: '100%',
            screen: '100vh'})); },
        inset: function (theme) { return (Object.assign({}, {'0': '0',
            auto: 'auto'},
            theme('spacing'))); },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2'
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal'
        },
        margin: function (theme, ref) {
            var negative = ref.negative;

            return (Object.assign({}, {auto: 'auto'},
            theme('spacing'),
            negative(theme('spacing'))));
},
        maxHeight: {
            full: '100%',
            screen: '100vh'
        },
        maxWidth: {
            none: 'none',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            full: '100%'
        },
        minHeight: {
            '0': '0',
            full: '100%',
            screen: '100vh'
        },
        minWidth: {
            '0': '0',
            full: '100%'
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        opacity: {
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '100': '1'
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12'
        },
        padding: function (theme) { return theme('spacing'); },
        stroke: {
            current: 'currentColor'
        },
        textColor: function (theme) { return theme('colors'); },
        width: function (theme) { return (Object.assign({}, {auto: 'auto'},
            theme('spacing'),
            {'1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '2/6': '33.33333%',
            '3/6': '50%',
            '4/6': '66.66667%',
            '5/6': '83.33333%',
            '1/12': '8.33333%',
            '2/12': '16.66667%',
            '3/12': '25%',
            '4/12': '33.33333%',
            '5/12': '41.66667%',
            '6/12': '50%',
            '7/12': '58.33333%',
            '8/12': '66.66667%',
            '9/12': '75%',
            '10/12': '83.33333%',
            '11/12': '91.66667%',
            full: '100%',
            screen: '100vw'})); },
        zIndex: {
            auto: 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50'
        },
        transitionProperty: {
            default: 'none',
            none: 'none',
            all: 'all',
            color: 'color',
            bg: 'background-color',
            border: 'border-color',
            colors: ['color', 'background-color', 'border-color'],
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform'
        },
        transitionDuration: {
            default: '0ms',
            '0': '0ms',
            '100': '100ms',
            '250': '250ms',
            '500': '500ms'
        },
        transitionTimingFunction: {
            default: 'ease',
            linear: 'linear',
            ease: 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out'
        },
        transitionDelay: {
            default: '0ms',
            '0': '0ms',
            '100': '100ms',
            '250': '250ms',
            '500': '500ms'
        },

        transform: {
            none: 'none',
            custom: 'translateY(-50%)'
        },
        transformOrigin: {},
        translate: {
            'right-up': ['0', '-100%']
        },
        scale: {},
        rotate: {},
        skew: {},
        perspective: {},
        perspectiveOrigin: {},

        customForms: function (theme) {
            var labeActivelState = {
                fontSize: theme('fontSize.2xs'),
                paddingTop: theme('padding.0-3'),
                transform: theme('transform.custom'),
                backgroundColor: theme('colors.white')
            };

            var labeErrorlState = {
                color: theme('colors.danger')
            };

            return {
                custom: {
                    'input, textarea': {
                        '&:focus + label': labeActivelState
                    }
                },

                'not-empty': {
                    'input, textarea': {
                        '& + label': labeActivelState
                    }
                },

                'is-error': {
                    'input, textarea': {
                        '& + label': labeErrorlState
                    }
                }
            };
        }
    },
    variants: {
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: ['responsive'],
        display: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        stroke: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
        transitionProperty: [],
        transitionDuration: [],
        transitionTimingFunction: [],
        transitionDelay: [],
        transform: [''],
        transformOrigin: [''],
        translate: [''],
        scale: [''],
        rotate: [''],
        skew: [''],
        perspective: [''],
        perspectiveOrigin: [''],
        transformStyle: [''],
        backfaceVisibility: [''],
        transformBox: ['']
    },
    corePlugins: {},
    plugins: [
        tailwindcssTransitions(),
        tailwindcssTransforms({
            '3d': false
        }),
        customForms,
        function(ref) {
            var addBase = ref.addBase;
            var config = ref.config;

            addBase({
                a: {
                    color: config('theme.colors.black.100')
                },
                h1: {
                    fontSize: config('theme.fontSize.2xl'),
                    fontWeight: config('theme.fontWeight.bold')
                },
                h2: {
                    fontSize: config('theme.fontSize.xl'),
                    fontWeight: config('theme.fontWeight.bold')
                },
                h3: {
                    fontSize: config('theme.fontSize.base'),
                    fontWeight: config('theme.fontWeight.bold')
                },
                p: { marginTop: 'theme.margin.12' }
            });
        }
    ]
};var fullConfig = resolveConfig(tailwind_config);
var breakpoints = fullConfig.theme.screens;

var TOTAL_COLS = 12;
var MINIMUM_COL = 1;

var Num = function () { return ({
    type: Number,
    default: null
}); };

// FIXME: Сделать автогенерацию props/responsive - class
//
// const test = {
//     col: {},
//     order: {}
// };

// Object.keys(breakpoints).forEach(breakpoint => {
//     // console.log(breakpoint);
//     const orderProp = `order-${breakpoint}`;

//     test.col[breakpoint] = Num();
//     test.order[orderProp] = Num();

//     // return prop;
// });

// console.log(breakpointProps);
// console.log(test);

var breakpointsProps = Object.keys(breakpoints).reduce(function (prop, breakpoint) {
    var orderProp = "order-" + breakpoint;

    prop[breakpoint] = Num();
    prop[orderProp] = Num();

    return prop;
}, {});

var generateProps = function () {
    return Object.assign({}, {cols: {
            type: Number,
            default: null,
            validator: function (value) {
                return value <= TOTAL_COLS && value > MINIMUM_COL;
            }
        },
        order: {
            type: Number,
            default: null
        }},
        // add dynamic generated props
        breakpointsProps);
};

var limit = function (col) { return (col !== TOTAL_COLS ? (col + "/" + TOTAL_COLS) : 'full'); };

// Compute a breakpoint class name
// const computeBreakpointClass = (type, breakpoint, val) => {
//     let className = type;

//     if (!val || val === false) {
//         return undefined;
//     }

//     if (breakpoint) {
//         className += `-${breakpoint}`;
//     }
//     // Handling the boolean style prop when accepting [Boolean, String, Number]
//     // means Vue will not convert <b-col sm></b-col> to sm: true for us.
//     // Since the default is false, an empty string indicates the prop's presence.
//     if (type === 'col' && (val === '' || val === true)) {
//         // .col-md
//         return className.toLowerCase();
//     }
//     // .order-md-6
//     className += `-${val}`;
//     return className.toLowerCase();
// };

var currentClass$5 = function (props) {
    var classList = [baseClass$d];

    //
    classList.push(props.cols ? ("w-" + (limit(props.cols))) : [].concat( defaultClass$6 ));

    //
    classList.push(props.order ? ("order-" + (props.order)) : null);

    // Адаптивность

    // input          output

    // cols:     6 -> w-6/12

    // sm:       6 -> xl:w-6/12
    // md:       6 -> md:w-6/12
    // lg:       6 -> lg:w-6/12
    // xl:       6 -> xl:w-6/12

    // order:     3 -> order-3

    // order-sm: 1 -> sm:order-1
    // order-md: 1 -> md:order-1
    // order-lg: 1 -> lg:order-1
    // order-xl: 1 -> xl:order-1

    // FIXME: Процедурщина, переписать

    classList.push(props.orderSm ? ("sm:order-" + (props.orderSm)) : null);
    classList.push(props.orderMd ? ("md:order-" + (props.orderMd)) : null);
    classList.push(props.orderLg ? ("lg:order-" + (props.orderLg)) : null);
    classList.push(props.orderXl ? ("xl:order-" + (props.orderXl)) : null);

    classList.push(props.sm ? ("sm:w-" + (limit(props.sm))) : null);
    classList.push(props.md ? ("md:w-" + (limit(props.md))) : null);
    classList.push(props.lg ? ("lg:w-" + (limit(props.lg))) : null);
    classList.push(props.xl ? ("xl:w-" + (limit(props.xl))) : null);

    return classList;
};

var col = {
    name: 'CCol',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps());
    },

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$5(props)
        };

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};/* FORM */var components=/*#__PURE__*/Object.freeze({__proto__:null,CForm: form,CFormError: formError,CFormGroup: formGroup,CFormInput: formInput,CFormLabel: formLabel,CRadio: radio,CRadioGroup: radioGroup,CCheckbox: checkbox,CCheckboxGroup: checkboxGroup,CButton: button,CTabs: tabs,CTab: tab,CTabPanels: tabPanels,CTabPanel: tabPanel,CList: list,CListItem: listItem,CContainer: container,CRow: row,CCol: col});var extendComponent = function (Vue, CurrentTheme, componentName) {
    var themeSettings = CurrentTheme[componentName];
    var themeDefaultSettings = DefaultTheme[componentName];

    merge(themeDefaultSettings, themeSettings);

    return Vue.extend(Object.assign({}, components[componentName]));
};

var index = {
    install: function install(Vue, options) {
        if ( options === void 0 ) options = {};

        if (this.installed) { return; }

        this.installed = true;

        var CurrentTheme = Object.assign({}, DefaultTheme,
            (options.theme || {}));

        var componentsToRegister = options.components || Object.keys(components);

        componentsToRegister.forEach(function (componentName) {
            Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
        });
    }
};exports.default=index;