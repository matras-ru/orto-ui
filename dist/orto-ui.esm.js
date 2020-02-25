import * as vClickOutside from 'v-click-outside-x';
import Vue from 'vue';
import { mergeData } from 'vue-functional-data-merge';
import merge from 'lodash.merge';

var base =
    'inline-block align-top rounded-lg uppercase font-semibold text-black-100 duration-250 ease-in-out border-3';

var variantPrimary = 'border-primary-100 transition-shadow hover:shadow';
var variantSecondary = 'bg-primary-100 border-primary-100 transition-shadow hover:shadow';
var variantTertiary =
    'border-secondary-200 text-secondary-200 transition-colors hover:text-white hover:bg-secondary-200';
var variantQuaternary =
    'border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100';
var variantQuinary =
    'border-black-100 transition-colors hover:text-white hover:bg-black-100';

var stateDisable = 'cursor-not-allowed opacity-75';

var sizeSm = 'text-base px-1-3 py-0-3 leading-snug';
var sizeMd = 'text-base px-1-5 py-0-4 leading-snug';
var sizeLg = 'text-lg px-1-5 py-0-6 leading-none';

var displayBlock = 'w-full';

var DefaultTheme = {
    base: base,

    variantPrimary: variantPrimary,
    variantSecondary: variantSecondary,
    variantTertiary: variantTertiary,
    variantQuaternary: variantQuaternary,
    variantQuinary: variantQuinary,

    stateDisable: stateDisable,

    sizeSm: sizeSm,
    sizeMd: sizeMd,
    sizeLg: sizeLg,

    displayBlock: displayBlock
};

var base$1 = 'inline no-underline';
var stateDisable$1 = 'opacity-75 cursor-not-allowed';

var variantPrimary$1 = 'text-secondary-200 hover:text-black-200 border-b-2';
var variantSecondary$1 = '';
var variantTertiary$1 = '';
var variantQuaternary$1 = '';
var variantQuinary$1 = '';

var DefaultTheme$1 = {
    base: base$1,
    stateDisable: stateDisable$1,
    variantPrimary: variantPrimary$1,
    variantSecondary: variantSecondary$1,
    variantTertiary: variantTertiary$1,
    variantQuaternary: variantQuaternary$1,
    variantQuinary: variantQuinary$1
};

var outerWrapBase = 'block mb-1-4 px-0-4';

var innerWrapBase =
    'flex items-center border-2 rounded-lg -mx-0-4 px-0-8 transition-border duration-150';
var innerWrapStateDefault = 'border-black-200';
var innerWrapStateFocused = 'border-primary-100';
var innerWrapStateError = 'border-danger';

var labelBase =
    'absolute left-0 max-w-full truncate pointer-events-none bg-white px-0-4 uppercase origin-top-left transition-transform ease-in duration-150 top-0-5 leading-snug';
var labelPositionFloat = 'transform -translate-y-full scale-75';
var labelStateDefault = 'text-tertiary-300';
var labelStateError = 'text-danger';
var controlWrapBase = 'flex-auto relative';
var prependBase = 'pr-0-4';
var appendBase = 'pl-0-4';

var CFormField = {
    outerWrapBase: outerWrapBase,
    innerWrapBase: innerWrapBase,

    innerWrapStateDefault: innerWrapStateDefault,
    innerWrapStateFocused: innerWrapStateFocused,
    innerWrapStateError: innerWrapStateError,

    controlWrapBase: controlWrapBase,

    labelBase: labelBase,
    labelPositionFloat: labelPositionFloat,
    labelStateDefault: labelStateDefault,
    labelStateError: labelStateError,

    prependBase: prependBase,
    appendBase: appendBase
};

var base$2 = 'w-full form-input py-0-5';
var stateReadonly = 'cursor-pointer';
var typeTextarea = 'resize-none';

var DefaultTheme$2 = Object.assign({}, CFormField,
    {base: base$2,
    stateReadonly: stateReadonly,
    typeTextarea: typeTextarea});

var base$3 = 'mb-1-4';

var DefaultTheme$3 = {
    base: base$3
};

var wrapperBase = 'flex flex-wrap mb-0-7';

var labelBase$1 = 'inline-flex';
var labelStateDefault$1 = 'cursor-pointer';
var labelStateDisabled = 'cursor-not-allowed';

var iconRadioBase = 'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-full';
var iconCheckboxBase = 'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm';

var iconStateDefault = 'border-black-200 bg-white';
var iconStateChecked = 'border-black-200 bg-secondary-200 shadow-inner';
var iconStateDisabled = 'border-tertiary-200 bg-white';
var iconStateError = 'border-danger bg-white';

var inputBase = 'absolute opacity-0 invisible';

var DefaultTheme$4 = {
    labelBase: labelBase$1,
    labelStateDefault: labelStateDefault$1,
    labelStateDisabled: labelStateDisabled,
    iconRadioBase: iconRadioBase,
    iconCheckboxBase: iconCheckboxBase,
    iconStateDefault: iconStateDefault,
    iconStateChecked: iconStateChecked,
    iconStateDisabled: iconStateDisabled,
    iconStateError: iconStateError,
    inputBase: inputBase,
    wrapperBase: wrapperBase
};

var base$4 = 'outline-none select-none font-semibold text-lg uppercase px-1-5 py-0-7';
var stateDefault = '';
var stateActive = 'text-secondary-200 border-b-4 border-secondary-200';

var DefaultTheme$5 = {
    base: base$4,
    stateDefault: stateDefault,
    stateActive: stateActive
};

var base$5 = 'flex flex-wrap';
var directionColumn = 'flex-col';
var directionHorizontal = 'flex-row';

var DefaultTheme$6 = {
    base: base$5,
    directionColumn: directionColumn,
    directionHorizontal: directionHorizontal
};

var base$6 = 'inline-block';

var DefaultTheme$7 = {
    base: base$6
};

var base$7 = 'container';
var modeFluid = 'max-w-none';

var DefaultTheme$8 = {
    base: base$7,
    modeFluid: modeFluid
};

var base$8 = 'flex flex-wrap';

var guttersNormalizeXl = '-mx-1-8';
var guttersXl = 'px-1-8';

var guttersNormalizeLg = '-mx-1-4';
var guttersLg = 'px-1-4';

var guttersNormalizeMd = '-mx-0-8';
var guttersMd = 'px-0-8';

var guttersNormalizeSm = '-mx-0-4';
var guttersSm = 'px-0-4';

var guttersNormalizeNone = '';
var guttersNone = '';

var DefaultTheme$9 = {
    base: base$8,
    guttersNormalizeXl: guttersNormalizeXl,
    guttersXl: guttersXl,
    guttersNormalizeLg: guttersNormalizeLg,
    guttersLg: guttersLg,
    guttersNormalizeMd: guttersNormalizeMd,
    guttersMd: guttersMd,
    guttersNormalizeSm: guttersNormalizeSm,
    guttersSm: guttersSm,
    guttersNormalizeNone: guttersNormalizeNone,
    guttersNone: guttersNone
};

var base$9 = 'max-w-full';

var DefaultTheme$a = {
    base: base$9
};



var DefaultTheme$b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CButton: DefaultTheme,
    CLink: DefaultTheme$1,
    CFormInput: DefaultTheme$2,
    CForm: DefaultTheme$3,
    CCheckbox: DefaultTheme$4,
    CRadio: DefaultTheme$4,
    CTab: DefaultTheme$5,
    CList: DefaultTheme$6,
    CListItem: DefaultTheme$7,
    CContainer: DefaultTheme$8,
    CRow: DefaultTheme$9,
    CCol: DefaultTheme$a
});

var justifyCenter = 'justify-center';
var justifyBetween = 'justify-between';
var justifyStart = 'justify-start';
var justifyEnd = 'justify-end';

var noop = function () {};

var isObject = function (obj) { return obj !== null && typeof obj === 'object'; };

var hasOwnProperty = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };

var getHashMapValue = function (themeMap, key) {
    return themeMap[key] || themeMap.default || null;
};

var upperFirst = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };

var suffixPropName = function (suffix, str) {
    return str + (suffix ? upperFirst(suffix) : '');
};

var numProp = function () { return ({
    type: Number,
    default: null
}); };

var stringProp = function () { return ({
    type: String,
    default: null
}); };

var justifyClaassUtil = function (justify) {
    var justifyMap = {
        start: justifyStart,
        end: justifyEnd,
        center: justifyCenter,
        between: justifyBetween
    };

    return justifyMap[justify] || null;
};

var DEFAULTS = {
    common: {
        screens: ['sm', 'md', 'lg', 'xl'],
        validJustifyContent: ['start', 'end', 'between', 'center']
    },

    CButton: {
        tag: 'button',
        variant: 'primary',
        size: 'md'
    },

    CLink: {
        variant: 'primary',
        target: '_self'
    },

    CCheckbox: {
        falseValue: false,
        trueValue: true
    },

    CList: {
        tag: 'ul',
        direction: 'vertical'
    },

    CListItem: {
        tag: 'li'
    },

    CRow: {
        direction: 'row',
        gutters: 'md',
        cols: 12
    },

    CCol: {},

    CTabs: {
        vertical: false,
        justify: 'start'
    },

    CTabPanels: {
        lazy: false
    },

    CTabPanel: {
        tag: 'section'
    },

    CDropdown: {
        variant: 'primary'
    },

    CFormInput: {
        rows: 6
    },

    CFormSelectCustom: {
        optionValue: 'value',
        optionLabel: 'label',
        dropdownVariant: 'secondary'
    }
};

var get = function (obj, path, defaultValue) {
    if ( defaultValue === void 0 ) defaultValue = null;

    if (path in obj) {
        return obj[path];
    }

    var steps = path.split('.');

    if (steps.length === 0) {
        return defaultValue;
    }

    return steps.every(function (step) { return isObject(obj) && step in obj && (obj = obj[step]) != null; })
        ? obj
        : defaultValue;
};

var PROP_NAME = '$ortoUIConfig';

var Config = function Config() {
    this.$_config = {};
};

var prototypeAccessors = { defaults: { configurable: true } };
var staticAccessors = { Defaults: { configurable: true } };

staticAccessors.Defaults.get = function () {
    return DEFAULTS;
};

prototypeAccessors.defaults.get = function () {
    return DEFAULTS;
};

// Returns the defaults
Config.prototype.getDefaults = function getDefaults () {
    return this.defaults;
};

// Method to merge in user config parameters
Config.prototype.setConfig = function setConfig (config) {
        var this$1 = this;
        if ( config === void 0 ) config = {};

    Object.keys(config).forEach(function (cmpName) {
        if (!hasOwnProperty(DEFAULTS, cmpName)) {
            console.warn(("config: unknown config property \"" + cmpName + "\""));
            return;
        }

        var cmpConfig = config[cmpName];

        // Component prop defaults
        var props = Object.getOwnPropertyNames(cmpConfig);
        props.forEach(function (prop) {
            if (!hasOwnProperty(DEFAULTS[cmpName], prop)) {
                console.warn(("config: unknown config property \"" + cmpName + "." + prop + "\""));
            } else {
                this$1.$_config[cmpName] = this$1.$_config[cmpName] || {};
                this$1.$_config[cmpName][prop] = cmpConfig[prop];
            }
        });
    });
};

Config.prototype.resetConfig = function resetConfig () {
    this.$_config = {};
};

Config.prototype.getConfig = function getConfig () {
    return this.$_config;
};

Config.prototype.getConfigValue = function getConfigValue (key) {
    return get(this.$_config, key, get(DEFAULTS, key));
};

Object.defineProperties( Config.prototype, prototypeAccessors );
Object.defineProperties( Config, staticAccessors );

var getConfigValue = function (key) {
    return Vue.prototype[PROP_NAME]
        ? Vue.prototype[PROP_NAME].getConfigValue(key)
        : get(DEFAULTS, key);
};

var ConfigPlugin = function (config, Vue) {
    if ( config === void 0 ) config = {};

    Vue.prototype[PROP_NAME] = new Config();
    Vue.prototype[PROP_NAME].setConfig(config);
};

var getComponentConfig = function (cmpName, key) {
    if ( key === void 0 ) key = null;

    return key ? getConfigValue((cmpName + "." + key)) : getConfigValue(cmpName) || {};
};

var NAME = 'CForm';

var props = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$3; }
    }
};

var CForm = {
    name: NAME,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;

        var componentData = {
            staticClass: base
        };

        return h('form', mergeData(data, componentData), children);
    }
};

var headerBase = 'text-2xl font-semibold mb-1-1';

var DefaultTheme$c = {
    headerBase: headerBase
};

var NAME$1 = 'CFormPanel';

var CFormPanel = {
    name: NAME$1,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$c; }
        },

        label: {
            type: String,
            default: null
        },

        collapsible: {
            type: Boolean,
            default: false
        },

        collapsed: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            open: true
        };
    },

    created: function created() {
        this.open = !this.collapsed;
    },

    methods: {
        toggle: function toggle() {
            this.open = !this.open;
        }
    },

    render: function render(h) {
        var ref = this.theme;
        var headerBase = ref.headerBase;

        return h('section', [
            this.label
                ? h(
                      'header',
                      {
                          staticClass: headerBase
                      },
                      [h('div', this.label)]
                  )
                : null,

            this.open ? h('main', [this.$slots.default]) : null
        ]);
    }
};

var NAME$2 = 'CFormField';

var CFormField$1 = {
    name: NAME$2,

    inheritAttrs: false,

    props: {
        modelValue: {
            type: [String, Number],
            default: null
        },

        label: {
            type: String,
            default: null
        },

        name: {
            type: String,
            default: null
        },

        id: {
            type: String,
            default: null
        },

        placeholder: {
            type: String,
            default: null
        },

        hint: {
            type: String,
            default: null
        },

        error: {
            type: Boolean,
            default: false
        },

        errorMessage: {
            type: String,
            default: null
        }
    },

    data: function data() {
        return {
            focused: false
        };
    },

    render: function render(h) {
        var this$1 = this;

        var ref = (function () {
            var ref = this$1.theme;
            var outerWrapBase = ref.outerWrapBase;
            var innerWrapBase = ref.innerWrapBase;
            var innerWrapStateDefault = ref.innerWrapStateDefault;
            var innerWrapStateFocused = ref.innerWrapStateFocused;
            var innerWrapStateError = ref.innerWrapStateError;
            var controlWrapBase = ref.controlWrapBase;
            var labelBase = ref.labelBase;
            var labelStateDefault = ref.labelStateDefault;
            var labelStateError = ref.labelStateError;
            var labelPositionFloat = ref.labelPositionFloat;
            var prependBase = ref.prependBase;
            var appendBase = ref.appendBase;

            var outerWrapClasses = [outerWrapBase];
            var innerWrapClasses = [innerWrapBase];
            var controlWrapClasses = [controlWrapBase];
            var labelClasses = [labelBase];
            var prependWrapClasses = [prependBase];
            var appendWrapClasses = [appendBase];

            var isError = function () {
                innerWrapClasses.push(innerWrapStateError);
                labelClasses.push(labelStateError);
            };

            var isErrorAndNotEmptyOrFocused = function () {
                labelClasses.push(labelPositionFloat);
            };

            var isFocused = function () {
                innerWrapClasses.push(innerWrapStateFocused);
                labelClasses.push(labelPositionFloat);
                labelClasses.push(labelStateDefault);
            };

            var isNotEmpty = function () {
                labelClasses.push(labelPositionFloat);
                labelClasses.push(labelStateDefault);
                innerWrapClasses.push(innerWrapStateDefault);
            };

            var isDefault = function () {
                innerWrapClasses.push(innerWrapStateDefault);
                labelClasses.push(labelStateDefault);
            };

            level1: if (this$1.error) {
                isError();

                if (this$1.modelValue || this$1.focused) {
                    isErrorAndNotEmptyOrFocused();
                    break level1;
                }
            } else {
                if (this$1.focused) {
                    isFocused();
                    break level1;
                }

                if (this$1.modelValue) {
                    isNotEmpty();
                    break level1;
                }

                isDefault();
            }

            return {
                outerWrapClasses: outerWrapClasses,
                innerWrapClasses: innerWrapClasses,
                controlWrapClasses: controlWrapClasses,
                labelClasses: labelClasses,
                prependWrapClasses: prependWrapClasses,
                appendWrapClasses: appendWrapClasses
            };
        })();
        var outerWrapClasses = ref.outerWrapClasses;
        var innerWrapClasses = ref.innerWrapClasses;
        var controlWrapClasses = ref.controlWrapClasses;
        var labelClasses = ref.labelClasses;
        var prependWrapClasses = ref.prependWrapClasses;
        var appendWrapClasses = ref.appendWrapClasses;

        return h(
            'label', // outer wrap
            {
                class: outerWrapClasses
            },
            [
                h(
                    'div', // inner wrap
                    {
                        class: innerWrapClasses
                    },
                    [
                        this.$scopedSlots.prepend
                            ? h('div', { class: prependWrapClasses }, this.$scopedSlots.prepend())
                            : null, // append
                        h(
                            'div', // control wrap
                            {
                                class: controlWrapClasses
                            },
                            [
                                this.getControl !== void 0 // control slot
                                    ? this.getControl(h)
                                    : this.$slots.default,
                                h(
                                    'div', // label
                                    {
                                        class: labelClasses
                                    },
                                    this.label
                                )
                            ]
                        ),
                        this.$scopedSlots.append
                            ? h('div', { class: appendWrapClasses }, this.$scopedSlots.append())
                            : null // prepend
                    ]
                )
            ]
        );
    }
};

var validTypes = [
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

var NAME$3 = 'CFormInput';

var CFormInput = {
    name: NAME$3,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [CFormField$1],

    props: {
        type: {
            type: String,
            default: 'text',
            validator: function (value) { return validTypes.includes(value); }
        },

        readonly: {
            type: Boolean,
            default: false
        },

        theme: {
            type: Object,
            default: function () { return DefaultTheme$2; }
        },

        // extarea specific

        rows: {
            type: Number,
            default: function () { return getComponentConfig(NAME$3, 'rows'); }
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

    methods: {
        numericProcess: function numericProcess(value) {
            /*
            1 - если поле пустое, cброс значения -> null
            2 - ограничения по сторонам
            3 - защита от отрицательных значений
            */
            var num = parseFloat(value);
            var localValue = isNaN(num) ? value : num;

            // 1
            if (!localValue) { return null; }

            // 2
            if (localValue >= this.max) { return this.max; }
            if (localValue <= this.min) { return this.min; }

            // 3
            if (localValue < 0) { return this.min >= 0 ? this.min : 0; }

            return localValue;
        },

        onUpdate: function onUpdate(ref) {
            var e = ref.e;
            var type = ref.type;

            var value = e.target.value;
            this.$emit(type, value);
        },

        getControl: function getControl(h) {
            var this$1 = this;

            var isTextArea = this.type === 'textarea';

            //
            var ref = this.theme;
            var base = ref.base;
            var stateReadonly = ref.stateReadonly;
            var typeTextarea = ref.typeTextarea;
            var inputClasses = [base];
            if (isTextArea) { inputClasses.push(typeTextarea); }
            if (this.readonly) { inputClasses.push(stateReadonly); }

            return h(isTextArea ? 'textarea' : 'input', {
                attrs: Object.assign({}, {name: this.name,
                    id: this.id,
                    type: !isTextArea ? this.type : null,
                    rows: isTextArea ? this.rows : null},
                    (['number', 'date'].includes(this.type)
                        ? {
                              min: this.min,
                              max: this.max
                          }
                        : null),
                    {placeholder: this.placeholder,
                    readonly: this.readonly}),
                domProps: {
                    value: this.modelValue
                },
                class: inputClasses,
                on: Object.assign({}, this.$listeners,
                    {focus: function () {
                        if (this$1.readonly) { return; }
                        this$1.focused = true;
                    },
                    blur: function () { return (this$1.focused = false); },
                    input: function (e) { return this$1.onUpdate({ e: e, type: 'input' }); },
                    change: function (e) { return this$1.onUpdate({ e: e, type: 'change' }); }})
            });
        }
    }
};

var inputBase$1 = 'cursor-pointer';
var inputIcon = 'block form-select w-1-4 h-1-4';
var optionBase = 'cursor-pointer py-0-4 px-0-8';
var optionStateDefault = 'bg-white hover:bg-tertiary-100';
var optionStateActive = 'bg-tertiary-100';

var DefaultTheme$d = {
    inputBase: inputBase$1,
    inputIcon: inputIcon,
    optionBase: optionBase,
    optionStateDefault: optionStateDefault,
    optionStateActive: optionStateActive
};

var NAME$4 = 'CFormSelectCustom';

var mapOption = function (ref) {
        var option = ref.option;
        var optionLabel = ref.optionLabel;
        var optionValue = ref.optionValue;

        return Object.keys(option).reduce(function (output, item) {
        if (item === optionLabel) {
            output['label'] = option[item];
        } else if (item === optionValue) {
            output['value'] = option[item];
        } else {
            output[item] = option[item];
        }

        return output;
    }, {});
};

var CFormSelectCustom = {
    name: NAME$4,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    inheritAttrs: false,

    functional: true,

    props: {
        modelValue: {
            type: [String, Number],
            default: null
        },

        theme: {
            type: Object,
            default: function () { return DefaultTheme$d; }
        },

        label: {
            type: String,
            default: null
        },

        data: {
            type: Array,
            default: function () { return []; }
        },

        optionValue: {
            type: String,
            default: getComponentConfig(NAME$4, 'optionValue')
        },

        optionLabel: {
            type: String,
            default: getComponentConfig(NAME$4, 'optionLabel')
        },

        error: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render: function render(h, ref) {
        var listeners = ref.listeners;
        var props = ref.props;
        var scopedSlots = ref.scopedSlots;

        var options = props.data;
        var theme = props.theme;
        var modelValue = props.modelValue;
        var label = props.label;
        var optionLabel = props.optionLabel;
        var optionValue = props.optionValue;
        var error = props.error;

        var selectedOption = options.find(function (item) { return item[optionValue] === modelValue; });

        var inputBase = theme.inputBase;
        var inputIcon = theme.inputIcon;

        var cumputeOptionClasses = function (isSelected) {
            var optionBase = theme.optionBase;
            var optionStateDefault = theme.optionStateDefault;
            var optionStateActive = theme.optionStateActive;
            var classes = [optionBase];

            if (isSelected) {
                classes.push(optionStateActive);
            } else {
                classes.push(optionStateDefault);
            }

            return classes;
        };

        return h('CDropdown', {
            props: {
                variant: getComponentConfig(NAME$4, 'dropdownVariant')
            },

            scopedSlots: {
                holder: function (ref) {
                        var toggle = ref.toggle;

                        return h('CFormInput', {
                        props: {
                            readonly: true,
                            error: error,
                            label: label,
                            modelValue: selectedOption
                                ? scopedSlots.selected
                                    ? scopedSlots.selected(selectedOption)[0].text
                                    : selectedOption[optionLabel]
                                : null
                        },
                        ref: 'holder',
                        staticClass: inputBase,
                        scopedSlots: {
                            append: function () { return h('i', { staticClass: inputIcon }); }
                        },
                        on: {
                            click: toggle
                        }
                    });
        },

                dropdown: function (ref) {
                    var close = ref.close;

                    return h('CList', [
                        options.map(function (option) {
                            var ref = mapOption({
                                option: option,
                                optionLabel: optionLabel,
                                optionValue: optionValue
                            });
                            var value = ref.value;
                            var label = ref.label;

                            var isSelected = value === modelValue;

                            return h(
                                'CListItem',
                                {
                                    class: cumputeOptionClasses(isSelected),
                                    on: {
                                        click: function () {
                                            listeners['change'](value);
                                            close();
                                        }
                                    }
                                },
                                scopedSlots.default ? scopedSlots.default(option) : label
                            );
                        })
                    ]);
                }
            }
        });
    }
};

var computeIsChecked = function (ref) {
    var type = ref.type;
    var modelValue = ref.modelValue;
    var value = ref.value;
    var trueValue = ref.trueValue;

    if (type === 'checkbox') {
        if (modelValue instanceof Array) {
            return modelValue.includes(value);
        }

        return modelValue === trueValue;
    }

    return modelValue === value;
};

var computeClasses = function (type, ref) {
    var disabled = ref.disabled;
    var error = ref.error;
    var theme = ref.theme;
    var isChecked = ref.isChecked;

    var labelBase = theme.labelBase;
    var labelStateDefault = theme.labelStateDefault;
    var labelStateDisabled = theme.labelStateDisabled;
    var iconRadioBase = theme.iconRadioBase;
    var iconCheckboxBase = theme.iconCheckboxBase;
    var iconStateDefault = theme.iconStateDefault;
    var iconStateChecked = theme.iconStateChecked;
    var iconStateDisabled = theme.iconStateDisabled;
    var iconStateError = theme.iconStateError;
    var wrapperBase = theme.wrapperBase;
    var inputBase = theme.inputBase;

    var labelClasses = [labelBase];
    var iconClasses = [type === 'checkbox' ? iconCheckboxBase : iconRadioBase];

    if (disabled) {
        labelClasses.push(labelStateDisabled);
        iconClasses.push(iconStateDisabled);
    } else if (error) {
        iconClasses.push(iconStateError);
    } else {
        labelClasses.push(labelStateDefault);

        if (isChecked) {
            iconClasses.push(iconStateChecked);
        } else {
            iconClasses.push(iconStateDefault);
        }
    }

    return {
        labelClasses: labelClasses,
        iconClasses: iconClasses,
        wrapperBase: wrapperBase,
        inputBase: inputBase
    };
};

function radioCheckbox(type) {
    //
    return {
        install: function install(Vue, theme) {
            selfInstall(Vue, theme, this);
        },

        inheritAttrs: false,

        functional: true,

        model: {
            prop: 'modelValue',
            event: 'change'
        },

        props: {
            theme: {
                type: Object,
                default: function () { return DefaultTheme$4; }
            },

            label: {
                type: String,
                default: null
            },

            name: {
                type: String,
                default: null
            },

            value: {
                type: [String, Number],
                default: null
            },

            id: {
                type: String,
                default: null // TODO: random uuid?
            },

            error: {
                type: Boolean,
                default: false
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        render: function render(h, ref) {
            var props = ref.props;
            var listeners = ref.listeners;

            var name = props.name;
            var label = props.label;
            var id = props.id;
            var disabled = props.disabled;
            var theme = props.theme;
            var error = props.error;
            var value = props.value;
            var modelValue = props.modelValue;
            var trueValue = props.trueValue;
            var falseValue = props.falseValue;

            var isChecked = computeIsChecked({ type: type, modelValue: modelValue, value: value, trueValue: trueValue });

            var ref$1 = computeClasses(type, {
                theme: theme,
                error: error,
                disabled: disabled,
                isChecked: isChecked
            });
            var labelClasses = ref$1.labelClasses;
            var iconClasses = ref$1.iconClasses;
            var inputBase = ref$1.inputBase;
            var wrapperBase = ref$1.wrapperBase;

            var inputData = {
                staticClass: inputBase,
                attrs: {
                    id: id,
                    name: name,
                    type: type,
                    disabled: disabled
                },
                domProps: {
                    checked: isChecked,
                    value: value
                },
                on: {
                    change: function (e) {
                        var checked = e.target.checked;

                        if (type === 'checkbox') {
                            if (modelValue instanceof Array) {
                                var newValue = [].concat( modelValue );

                                if (checked) {
                                    newValue.push(value);
                                } else {
                                    newValue.splice(newValue.indexOf(value), 1);
                                }

                                listeners['change'](newValue);

                                return;
                            }

                            listeners['change'](checked ? trueValue : falseValue);

                            return;
                        }

                        if (checked) {
                            listeners['change'](value);
                        }
                    }
                }
            };

            return h(
                'div',
                {
                    class: wrapperBase
                },
                [
                    h('label', { class: labelClasses, attrs: { for: id } }, [
                        h('input', inputData),
                        h('span', { class: iconClasses }),
                        label
                    ])
                ]
            );
        }
    };
}

var NAME$5 = 'CRadio';
var TYPE = 'radio';

var props$1 = {
    modelValue: {
        type: [String, Number, Boolean],
        default: null
    },

    value: {
        type: [String, Number, Boolean],
        default: null
    }
};

var CRadio = Object.assign({}, {name: NAME$5},

    merge(radioCheckbox(TYPE), {
        props: props$1
    }));

// TODO: add limit...

function radioCheckboxGroup(type) {
    var mapComponents = {
        checkbox: 'CCheckbox',
        radio: 'CRadio'
    };

    var ChildComponent = mapComponents[type];

    return {
        install: function install(Vue, theme) {
            selfInstall(Vue, theme, this);
        },

        functional: true,

        props: {
            theme: {
                type: Object,
                default: function () {}
            },

            data: {
                type: Array,
                default: function () { return []; }
            }
        },

        model: {
            prop: 'modelValue',
            event: 'change'
        },

        render: function render(h, ref) {
            var props = ref.props;
            var listeners = ref.listeners;

            var children = props.data.map(function (ref) {
                    var id = ref.id;
                    var label = ref.label;
                    var name = ref.name;
                    var disabled = ref.disabled;
                    var value = ref.value;

                    return h(ChildComponent, {
                    props: {
                        modelValue: props.modelValue,
                        id: id,
                        label: label,
                        name: name,
                        disabled: disabled,
                        value: value
                    },
                    on: {
                        change: function (val) { return listeners['change'](val); }
                    }
                });
            }
            );

            return h('div', children);
        }
    };
}

var NAME$6 = 'CRadioGroup';
var TYPE$1 = 'radio';

var CRadioGroup = Object.assign({}, {name: NAME$6},

    merge(radioCheckboxGroup(TYPE$1), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    }));

var NAME$7 = 'CCheckbox';
var TYPE$2 = 'checkbox';

var props$2 = {
    modelValue: {
        type: [Array, Boolean, String, Number],
        default: null
    },

    trueValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$7, 'trueValue'); }
    },

    falseValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$7, 'falseValue'); }
    },

    error: {
        type: Boolean,
        default: false
    }
};

var CCheckbox = Object.assign({}, {name: NAME$7},

    merge(radioCheckbox(TYPE$2), {
        props: props$2
    }));

var NAME$8 = 'CCheckboxGroup';
var TYPE$3 = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$8},

    merge(radioCheckboxGroup(TYPE$3), {
        props: {
            modelValue: {
                type: Array,
                default: function () { return []; }
            }
        }
    }));

var NAME$9 = 'CLink';
var ANCHOR_TAG = 'a';
var validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

var concat = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return Array.prototype.concat.apply([], args);
};
var isRouterLink = function (tag) { return tag.toString().toLowerCase() !== ANCHOR_TAG; };

var computeTag = function (ref, instance) {
    if ( ref === void 0 ) ref = {};
    var to = ref.to;
    var disabled = ref.disabled;

    return instance.$router && to && !disabled
        ? instance.$nuxt
            ? 'nuxt-link'
            : 'router-link'
        : ANCHOR_TAG;
};

var computeRel = function (ref) {
    if ( ref === void 0 ) ref = {};
    var target = ref.target;
    var rel = ref.rel;

    if (target === '_blank' && isNull(rel)) {
        return 'noopener';
    }
    return rel || null;
};

var createThemeMap = function (ref) {
    var variantPrimary = ref.variantPrimary;
    var variantSecondary = ref.variantSecondary;
    var variantTertiary = ref.variantTertiary;
    var variantQuaternary = ref.variantQuaternary;
    var variantQuinary = ref.variantQuinary;

    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            quinary: variantQuinary
        }
    };
};

function createProps() {
    return {
        href: {
            type: String,
            default: null
        },

        target: {
            type: String,
            default: function () { return getComponentConfig(NAME$9, 'target'); }
        },

        rel: {
            type: String,
            default: null
        },

        // router specific props ref: https://router.vuejs.org/api/#router-link
        to: {
            type: [String, Object],
            default: null
        },

        append: {
            type: Boolean,
            default: false
        },

        event: {
            type: [String, Array],
            default: 'click'
        },

        replace: {
            type: Boolean,
            default: false
        },

        activeClass: {
            type: String,
            default: 'router-link-active'
        },

        routerTag: {
            type: String,
            default: 'a'
        },

        exact: {
            type: Boolean,
            default: false
        },

        exactActiveClass: {
            type: String,
            default: 'router-link-exact-active'
        },

        // nuxt-link specific prop(s)
        noPrefetch: {
            type: Boolean,
            default: false
        }
    };
}

var CLink = {
    name: NAME$9,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: Object.assign({}, createProps(),

        {theme: {
            type: Object,
            default: function () { return DefaultTheme$1; }
        },

        button: {
            type: Boolean,
            default: false
        },

        variant: {
            type: String,
            default: function () { return getComponentConfig(NAME$9, 'variant'); },
            validator: function (value) { return validVariants.includes(value); }
        },

        border: {
            type: Boolean,
            default: false
        },

        label: {
            type: String,
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        }}),

    computed: {
        computedTag: function computedTag() {
            return computeTag({ to: this.to, disabled: this.disabled }, this);
        },

        isRouterLink: function isRouterLink$1() {
            return isRouterLink(this.computedTag);
        },

        computedRel: function computedRel() {
            return computeRel({ target: this.target, rel: this.rel });
        },

        computedProps: function computedProps() {
            return this.isRouterLink ? Object.assign({}, this.$props, {tag: this.routerTag}) : {};
        }
    },

    methods: {
        onClick: function onClick(e) {
            var arguments$1 = arguments;

            var isEvent = e instanceof Event;
            var suppliedHandler = this.$listeners.click;

            if (isEvent && this.disabled) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            } else {
                if (this.isRouterLink && e.currentTarget.__vue__) {
                    e.currentTarget.__vue__.$emit('click', e);
                }

                // Call the suppliedHandler(s), if any provided
                concat(suppliedHandler)
                    .filter(function (h) { return h instanceof Function; })
                    .forEach(function (handler) {
                        handler.apply(void 0, arguments$1);
                    });

                // Emit the global $root click event
                this.$root.$emit('clicked::link', e);
            }

            // Stop scroll-to-top behavior or navigation on
            // regular links when href is just '#'
            if (isEvent && (this.disabled || (!this.isRouterLink && this.href === '#'))) {
                e.preventDefault();
            }
        }
    },

    render: function render(h) {
        var this$1 = this;

        var computedClass = function () {
            if (this$1.button) { return; }

            var ref = this$1.theme;
            var base = ref.base;
            var stateDisable = ref.stateDisable;
            var classes = [base];

            if (this$1.disabled) {
                classes.push(stateDisable);
            }

            var ref$1 = createThemeMap(this$1.theme);
            var variants = ref$1.variants;
            classes.push(getHashMapValue(variants, this$1.variant));

            return classes;
        };

        var componentData = {
            class: computedClass(),
            props: this.computedProps,
            attrs: Object.assign({}, this.$attrs,
                {rel: this.computeRel,
                target: this.target,
                tabindex: this.disabled ? '-1' : this.$attrs.tabindex ? this.$attrs.tabindex : null,
                'aria-disabled': this.disabled ? 'true' : null})
        };
        componentData[this.isRouterLink ? 'nativeOn' : 'on'] = Object.assign({}, this.$listeners,
                {click: this.onClick});

        if (this.href) {
            componentData.attrs.href = this.href;
        } else {
            delete componentData.props.href;
        }

        return h(this.computedTag, componentData, this.label ? this.label : this.$slots.default);
    }
};

var NAME$a = 'CButton';
var validVariants$1 = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
var validSizes = ['lg', 'md', 'sm'];
var validTagNames = ['button', 'a'];
var validTypes$1 = ['submit', 'reset'];

// Button as Link helpers
var pluckProps = function (keysToPluck, objToPluck) {
    return Object.keys(keysToPluck).reduce(function (output, prop) {
        output[prop] = objToPluck[prop];
        return output;
    }, {});
};

var linkProps = createProps();
var isLink = function (props) { return Boolean(props.href || props.to || props.tag === 'a'); };
var computeLinkProps = function (props) { return isLink(props) ? Object.assign({}, pluckProps(linkProps, props), {button: true}) : {}; };

var createThemeMap$1 = function (ref) {
    var variantPrimary = ref.variantPrimary;
    var variantSecondary = ref.variantSecondary;
    var variantTertiary = ref.variantTertiary;
    var variantQuaternary = ref.variantQuaternary;
    var variantQuinary = ref.variantQuinary;
    var sizeLg = ref.sizeLg;
    var sizeSm = ref.sizeSm;
    var sizeMd = ref.sizeMd;

    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            quinary: variantQuinary
        },

        sizes: {
            lg: sizeLg,
            md: sizeMd,
            sm: sizeSm
        }
    };
};

var props$3 = Object.assign({}, linkProps,

    {theme: {
        type: Object,
        default: function () { return DefaultTheme; }
    },

    disabled: {
        type: Boolean,
        default: false
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$a, 'tag'); },
        validator: function (value) { return validTagNames.includes(value); }
    },

    label: {
        type: String,
        default: null
    },

    type: {
        type: String,
        default: null,
        validator: function (value) { return validTypes$1.includes(value); }
    },

    variant: {
        type: String,
        default: function () { return getComponentConfig(NAME$a, 'variant'); },
        validator: function (value) { return validVariants$1.includes(value); }
    },

    size: {
        type: String,
        default: function () { return getComponentConfig(NAME$a, 'size'); },
        validator: function (value) { return validSizes.includes(value); }
    },

    block: {
        type: Boolean,
        default: false
    }});

var currentClass = function (ref) {
    var disabled = ref.disabled;
    var size = ref.size;
    var variant = ref.variant;
    var block = ref.block;
    var theme = ref.theme;

    var base = theme.base;
    var stateDisable = theme.stateDisable;
    var displayBlock = theme.displayBlock;
    var ref$1 = createThemeMap$1(theme);
    var sizes = ref$1.sizes;
    var variants = ref$1.variants;
    var classes = [base];

    classes.push(getHashMapValue(sizes, size));
    classes.push(getHashMapValue(variants, variant));

    if (disabled) {
        classes.push(stateDisable);
    }

    if (block) {
        classes.push(displayBlock);
    }

    return classes;
};

var computeAttrs = function (props) {
    var link = isLink(props);

    return {
        type: !link ? props.type : null,
        disabled: props.disabled
    };
};

var CButton = {
    name: NAME$a,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$3,

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var listeners = ref.listeners;
        var children = ref.children;

        var link = isLink(props);

        var onClick = listeners['onClick'] || noop;

        var on = {
            click: function click(e) {
                if (props.disabled) {
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                onClick(e);
            }
        };

        var componentData = {
            class: currentClass(props),
            props: computeLinkProps(props),
            attrs: computeAttrs(props),
            on: on
        };

        return h(
            link ? CLink : props.tag,
            mergeData(data, componentData),
            props.label ? props.label : children
        );
    }
};

var NAME$b = 'CTabs';

var CTabs = {
    name: NAME$b,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () {}
        },

        modelValue: {
            type: [Number, String],
            default: null
        },

        vertical: {
            type: Boolean,
            default: function () { return getComponentConfig(NAME$b, 'vertical'); }
        },

        justify: {
            type: String,
            default: function () { return getComponentConfig(NAME$b, 'justify'); },
            validator: function (value) { return getComponentConfig('common', 'validJustifyContent').includes(value); }
        }
    },

    model: {
        prop: 'modelValue',
        event: 'onChange'
    },

    render: function render(h, ref) {
        var props = ref.props;
        var children = ref.children; if ( children === void 0 ) children = [];
        var listeners = ref.listeners;

        var vertical = props.vertical;
        var justify = props.justify;

        var normalizeTabs = children.map(function (tab) {
            var ref = tab.componentOptions.propsData;
            var name = ref.name;
            var isActive = props.modelValue === name;
            var onChange = listeners['onChange'] || noop;

            // mixin isAactive props
            tab.componentOptions.propsData = Object.assign({}, tab.componentOptions.propsData,
                {isActive: isActive});

            // mixin listeners
            tab.componentOptions.listeners = Object.assign({}, tab.componentOptions.listeners,
                {onClick: function (name) { return onChange(name); }});

            return tab;
        });

        return h(
            'CList',
            {
                attrs: {
                    role: 'tablist'
                },
                props: {
                    direction: vertical ? 'vertical' : 'horizontal',
                    justify: justify
                }
            },
            [].concat( normalizeTabs )
        );
    }
};

var NAME$c = 'CTab';

var CTab = {
    name: NAME$c,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$5; }
        },

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

        var ref = this.theme;
        var base = ref.base;
        var stateDefault = ref.stateDefault;
        var stateActive = ref.stateActive;

        return h('CListItem', { attrs: { role: 'presentation' } }, [
            h(
                'CLink',
                {
                    props: {
                        href: ("#" + (this.name)),
                        variant: 'secondary'
                    },
                    attrs: {
                        role: 'tab',
                        'aria-selected': this.isActive ? 'true' : 'false',
                        tabindex: this.isActive ? null : '-1',
                        id: ("tab-" + (this.name))
                    },
                    on: {
                        click: function () { return this$1.$emit('onClick', this$1.name); }
                    },
                    staticClass: base,
                    class: [stateDefault, this.isActive ? stateActive : null]
                },
                this.label ? this.label : this.$slots.default
            )
        ]);
    }
};

var NAME$d = 'CTabPanels';

var CTabPanels = {
    name: NAME$d,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () {}
        },

        modelValue: {
            type: [String, Number],
            default: null
        },

        // v-if/show
        lazy: {
            type: Boolean,
            default: function () { return getComponentConfig(NAME$d, 'lazy'); }
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children; if ( children === void 0 ) children = [];

        var normalizeTabPanels = children.map(function (tabPanel) {
            var ref = tabPanel.data;
            var name = ref.name;
            var isActive = props.modelValue === name;

            tabPanel.data = mergeData(tabPanel.data, {
                attrs: {
                    hidden: !isActive
                }
            });

            return props.lazy ? (isActive ? tabPanel : null) : tabPanel;
        });

        return h('div', mergeData(data, {}), [].concat( normalizeTabPanels ));
    }
};

var base$a = '';

var DefaultTheme$e = {
    base: base$a
};

var NAME$e = 'CTabPanel';

var CTabPanel = {
    name: NAME$e,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$e; }
        },

        tag: {
            type: String,
            default: function () { return getComponentConfig(NAME$e, 'tag'); }
        },

        name: {
            type: String,
            default: null
        }
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;

        var componentData = {
            name: props.name,
            attrs: {
                role: 'tabpanel',
                id: props.name,
                'aria-labelledby': ("tab-" + (props.name))
            },
            staticClass: base
        };
        return h(props.tag, mergeData(data, componentData), [children]);
    }
};

var validDirection = ['vertical', 'horizontal'];

var NAME$f = 'CList';

var props$4 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$6; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$f, 'tag'); }
    },

    direction: {
        type: String,
        default: function () { return getComponentConfig(NAME$f, 'direction'); },
        validator: function (value) { return validDirection.includes(value); }
    },

    justify: {
        type: String,
        default: null,
        validator: function (value) { return getComponentConfig('common', 'validJustifyContent').includes(value); }
    }
};

var currentClass$1 = function (ref) {
    var direction = ref.direction;
    var justify = ref.justify;
    var theme = ref.theme;

    var base = theme.base;
    var directionColumn = theme.directionColumn;
    var directionHorizontal = theme.directionHorizontal;

    var classMap = {
        vertical: directionColumn,
        horizontal: directionHorizontal
    };

    var classes = [base];

    // horizontal/vertical
    classes.push(classMap[direction]);

    // horizontal align
    classes.push(justifyClaassUtil(justify));

    return classes;
};

var CList = {
    name: NAME$f,

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
            class: currentClass$1(props)
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};

var NAME$g = 'CListItem';

var props$5 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$7; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$g, 'tag'); }
    }
};

var CListItem = {
    name: NAME$g,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$5,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;

        var componentData = {
            staticClass: base
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};

var wrapperBase$1 = 'relative';
var dropdownBase = 'absolute z-10 top-full left-0 mt-0-4 bg-white overflow-hidden';
var dropdownVariantPrimary = 'shadow-example rounded';
var dropdownVariantSecondary = 'shadow-example rounded-lg';

var DefaultTheme$f = {
    wrapperBase: wrapperBase$1,
    dropdownBase: dropdownBase,
    dropdownVariantPrimary: dropdownVariantPrimary,
    dropdownVariantSecondary: dropdownVariantSecondary
};

var validVariants$2 = ['primary', 'secondary'];

var NAME$h = 'CDropdown';

var CDropdown = {
    name: NAME$h,

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$f; }
        },

        variant: {
            type: String,
            default: function () { return getComponentConfig(NAME$h, 'variant'); },
            validator: function (value) { return validVariants$2.includes(value); }
        }
    },

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    data: function data() {
        return {
            isShow: false
        };
    },

    methods: {
        toggle: function toggle() {
            this.isShow = !this.isShow;
        },

        close: function close() {
            this.isShow = false;
        },

        open: function open() {
            this.isShow = true;
        }
    },

    render: function render(h) {
        var this$1 = this;

        var ref = (function () {
            var ref = this$1.theme;
            var wrapperBase = ref.wrapperBase;
            var dropdownBase = ref.dropdownBase;
            var dropdownVariantPrimary = ref.dropdownVariantPrimary;
            var dropdownVariantSecondary = ref.dropdownVariantSecondary;

            var wrapperClasses = [wrapperBase];
            var dropdownClasses = [dropdownBase];

            var themeMap = {
                variants: {
                    primary: dropdownVariantPrimary,
                    secondary: dropdownVariantSecondary
                }
            };

            dropdownClasses.push(themeMap.variants[this$1.variant]);

            return {
                wrapperClasses: wrapperClasses,
                dropdownClasses: dropdownClasses
            };
        })();
        var wrapperClasses = ref.wrapperClasses;
        var dropdownClasses = ref.dropdownClasses;

        return h(
            'div', // wrapper
            {
                class: wrapperClasses,
                directives: [
                    {
                        name: 'click-outside',
                        value: this.close
                    }
                ]
            },
            [
                this.$scopedSlots.holder
                    ? this.$scopedSlots.holder({
                          // holder
                          // TODO: спорное решение передавать функцию в качестве props, не совсем vue way, скорее реакт. Пока оставим так
                          toggle: this.toggle,
                          open: this.open,
                          close: this.close,
                          isShow: this.isShow
                      })
                    : null,

                this.isShow
                    ? h(
                          'div', // dropdown
                          {
                              class: dropdownClasses,
                              ref: 'dropdown'
                          },
                          this.$scopedSlots.dropdown
                              ? this.$scopedSlots.dropdown({
                                    toggle: this.toggle,
                                    open: this.open,
                                    close: this.close,
                                    isShow: this.isShow
                                })
                              : null
                      )
                    : null
            ]
        );
    }
};

var props$6 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$8; }
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

var currentClass$2 = function (ref) {
    var fluid = ref.fluid;
    var theme = ref.theme;

    var base = theme.base;
    var modeFluid = theme.modeFluid;
    var classes = [base];

    if (fluid) { classes.push(modeFluid); }

    return classes;
};

var CContainer = {
    name: 'CContainer',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$6,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$2(props)
        };

        return h('div', mergeData(data, componentData), children);
    }
};

var NAME$i = 'CCol';

var breakpoints = getComponentConfig('common', 'screens');

var generateProps = function () {
    var breakpointCols = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    return Object.assign({}, {theme: {
            type: Object,
            default: function () { return DefaultTheme$a; }
        },

        cols: {
            type: Number,
            default: null
        }},

        breakpointCols);
};

var CCol = {
    name: NAME$i,

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
        var data = ref.data;
        var props = ref.props;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;

        var componentData = {
            staticClass: base,
            cols: Object.assign({}, {default: props.cols},
                breakpoints.reduce(function (output, item) {
                    output[item] = props[item];
                    return output;
                }, Object.create(null)))
        };

        return h('div', mergeData(data, componentData), children);
    }
};

var NAME$j = 'CRow';
var VALID_GUTTERS = ['none', 'sm', 'md', 'lg', 'xl'];
var GUTTERS_PROP_NAME = 'gutters';
var COLS_PROP_NAME = 'cols';

var getBreakpoint = function (key, name) { return key.replace(name, '').toLowerCase(); };
var wPrefix = 'w-';

var createThemeMap$2 = function (ref) {
    var guttersNormalizeXl = ref.guttersNormalizeXl;
    var guttersXl = ref.guttersXl;
    var guttersNormalizeLg = ref.guttersNormalizeLg;
    var guttersLg = ref.guttersLg;
    var guttersNormalizeMd = ref.guttersNormalizeMd;
    var guttersMd = ref.guttersMd;
    var guttersNormalizeSm = ref.guttersNormalizeSm;
    var guttersSm = ref.guttersSm;
    var guttersNormalizeNone = ref.guttersNormalizeNone;
    var guttersNone = ref.guttersNone;

    return {
        gutters: {
            xl: {
                row: guttersNormalizeXl,
                col: guttersXl
            },
            lg: {
                row: guttersNormalizeLg,
                col: guttersLg
            },
            md: {
                row: guttersNormalizeMd,
                col: guttersMd
            },
            sm: {
                row: guttersNormalizeSm,
                col: guttersSm
            },
            none: {
                row: guttersNormalizeNone,
                col: guttersNone
            }
        }
    };
};

// Cached copy of the breakpoint prop names
var breakpointPropMap = Object.create(null);

var generateProps$1 = function () {
    var obj, obj$1;

    var breakpoints = getComponentConfig('common', 'screens');

    var breakpointGutters = breakpoints.reduce(function (prop, breakpoint) {
        prop[suffixPropName(breakpoint, GUTTERS_PROP_NAME)] = stringProp();
        return prop;
    }, Object.create(null));

    var breakpointCols = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    breakpointPropMap = Object.assign(Object.create(null), {
        gutters: Object.keys(breakpointGutters),
        cols: Object.keys(breakpointCols)
    });

    return Object.assign(( obj = {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$9; }
        }
    }, obj[COLS_PROP_NAME] = {
            type: Number,
            default: function () { return getComponentConfig(NAME$j, COLS_PROP_NAME); }
        }, obj ),

        breakpointCols,

        ( obj$1 = {}, obj$1[GUTTERS_PROP_NAME] = {
            type: String,
            default: function () { return getComponentConfig(NAME$j, 'gutters'); },
            validator: function (value) { return VALID_GUTTERS.includes(value); }
        }, obj$1 ),

        breakpointGutters);
};

//
var currentClass$3 = function (props) {
    var gutter = props.gutters;
    var theme = props.theme;
    var base = theme.base;
    var ref = createThemeMap$2(theme);
    var gutters = ref.gutters;

    var rowClasses = [base];
    var colClasses = [];

    var ref$1 = getHashMapValue(gutters, gutter);
    var rowGuttersClass = ref$1.row;
    var colGuttersClass = ref$1.col;

    if (rowGuttersClass && colGuttersClass) {
        rowClasses.push(rowGuttersClass);
        colClasses.push(colGuttersClass);
    }

    // breakpoints gutters
    breakpointPropMap[GUTTERS_PROP_NAME].forEach(function (key) {
        if (!props[key]) { return undefined; }

        var breakpoint = getBreakpoint(key, 'gutters');

        if (breakpoint) {
            var ref = getHashMapValue(gutters, props[key]);
            var rowGuttersBreakpointClass = ref.row;
            var colGuttersBreakpointClass = ref.col;

            if (rowGuttersBreakpointClass && colGuttersBreakpointClass) {
                rowClasses.push((breakpoint + ":" + rowGuttersBreakpointClass));
                colClasses.push((breakpoint + ":" + colGuttersBreakpointClass));
            }
        }
    });

    return {
        rowClasses: rowClasses,
        colClasses: colClasses
    };
};

var createColBreakpointClass = function (ref) {
    var props = ref.props;
    var cols = ref.cols;
    var colsLimit = ref.colsLimit;

    if (!cols) { return undefined; }

    var classes = [];

    if (cols.default) {
        if (cols.default < colsLimit) {
            classes.push(("" + wPrefix + (cols.default) + "/" + colsLimit));
        }

        if (cols.default === colsLimit) {
            classes.push((wPrefix + "full"));
        }
    }

    breakpointPropMap[COLS_PROP_NAME].forEach(function (breakpoint) {
        var propsValue = props[breakpoint] || colsLimit;

        if (cols[breakpoint]) {
            if (cols[breakpoint] < propsValue) {
                classes.push((breakpoint + ":" + wPrefix + (cols[breakpoint]) + "/" + propsValue));
            }

            if (cols[breakpoint] === propsValue) {
                classes.push((breakpoint + ":" + wPrefix + "full"));
            }
        } else {
            if (props[breakpoint] && cols.default) {
                classes.push((breakpoint + ":" + wPrefix + (cols.default) + "/" + propsValue));
            }
        }
    });

    return classes;
};

var CRow = {
    name: NAME$j,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps$1());
    },

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children; if ( children === void 0 ) children = [];

        var ref$1 = currentClass$3(props);
        var rowClasses = ref$1.rowClasses;
        var colClasses = ref$1.colClasses;

        var computedChildren = children.map(function (col) {
            if (!col.data) { return; }

            var ref = col.data;
            var cols = ref.cols; if ( cols === void 0 ) cols = null;

            var colBreakpointClass = createColBreakpointClass({
                props: props,
                cols: cols,
                colsLimit: props.cols
            });

            col.data = mergeData(col.data, {
                class: colClasses.concat( colBreakpointClass)
            });

            return col;
        });

        return h(
            'div',
            mergeData(data, {
                class: rowClasses
            }),
            computedChildren
        );
    }
};

var components = {
    CButton: CButton,
    CLink: CLink,
    CForm: CForm,
    CFormPanel: CFormPanel,
    CFormInput: CFormInput,
    CFormSelectCustom: CFormSelectCustom,
    CRadio: CRadio,
    CRadioGroup: CRadioGroup,
    CCheckbox: CCheckbox,
    CCheckboxGroup: CCheckboxGroup,
    CTabs: CTabs,
    CTab: CTab,
    CTabPanels: CTabPanels,
    CTabPanel: CTabPanel,
    CList: CList,
    CListItem: CListItem,
    CContainer: CContainer,
    CRow: CRow,
    CCol: CCol,
    CDropdown: CDropdown
};

var selfInstall = function (Vue, theme, component) {
    if ( theme === void 0 ) theme = {};

    var props = component.props; if ( props === void 0 ) props = {};
    var name = component.name;
    var defaultComponentTheme = Object.assign({}, (props && props.theme ? props.theme.default() : {}));

    props.theme = {
        type: Object,
        default: function () {
            return Object.assign({}, defaultComponentTheme, theme);
        }
    };

    Vue.component(name, Object.assign({}, component,
        {props: props}));
};

var extendComponent = function (Vue, CurrentTheme, componentName) {
    // TODO: if props is undefined
    var ref = components[componentName];
    var props = ref.props; if ( props === void 0 ) props = {};

    var themeDefaultSettings = Object.assign({}, (props && props.theme ? props.theme.default() : {}));
    var themeSettings = CurrentTheme[componentName];

    props.theme = {
        type: Object,
        default: function () {
            return Object.assign({}, themeDefaultSettings, themeSettings);
        }
    };

    return Vue.extend(Object.assign({}, components[componentName],
        {props: props}));
};

var install = function(Vue, options) {
    if ( options === void 0 ) options = {};

    var theme = options.theme; if ( theme === void 0 ) theme = {};
    var config = options.config; if ( config === void 0 ) config = {};
    var injectComponentList = options.components; if ( injectComponentList === void 0 ) injectComponentList = null;

    var CurrentTheme = Object.assign({}, DefaultTheme$b,
        theme);

    var componentsToRegister = injectComponentList || Object.keys(components);

    componentsToRegister.forEach(function (componentName) {
        Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
    });

    Vue.use(vClickOutside);

    ConfigPlugin(config, Vue);
};

var index = {
    install: install
};

export default index;
export { CButton, CCheckbox, CCheckboxGroup, CCol, CContainer, CDropdown, CForm, CFormInput, CFormPanel, CFormSelectCustom, CLink, CList, CListItem, CRadio, CRadioGroup, CRow, CTab, CTabPanel, CTabPanels, CTabs, selfInstall };
