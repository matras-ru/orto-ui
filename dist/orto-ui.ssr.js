'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var vClickOutside=require('v-click-outside-x'),Vue=_interopDefault(require('vue')),vueFunctionalDataMerge=require('vue-functional-data-merge'),merge=_interopDefault(require('lodash.merge'));var base =
    'inline-flex items-center rounded-lg uppercase font-semibold text-black-100 duration-250 ease-in-out border-3 focus:outline-none';

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
};var base$1 = 'no-underline cursor-pointer';
var inlineType = 'inline';
var inlineBlockType = 'inline-block';

var stateDisable$1 = 'opacity-75 cursor-not-allowed';

var variantPrimary$1 = 'text-secondary-200 hover:text-black-200 border-b-2';
var variantSecondary$1 = '';
var variantTertiary$1 = 'hover:text-secondary-200 border-b';
var variantQuaternary$1 = 'text-tertiary-300 hover:text-black-200';
var variantQuinary$1 =
    'border-b border-dashed hover:text-tertiary-300 hover:border-tertiary-300';

var DefaultTheme$1 = {
    base: base$1,
    inlineType: inlineType,
    inlineBlockType: inlineBlockType,
    stateDisable: stateDisable$1,
    variantPrimary: variantPrimary$1,
    variantSecondary: variantSecondary$1,
    variantTertiary: variantTertiary$1,
    variantQuaternary: variantQuaternary$1,
    variantQuinary: variantQuinary$1
};var outerWrapBase = 'block px-0-4';
var outerWrapSpace = 'mb-0-8';

var innerWrapBase =
    'flex items-center border-2 rounded-lg -mx-0-4 transition-border duration-150';
var innerWrapStateDefault = 'border-black-200';
var innerWrapStateFocused = 'border-primary-100';
var innerWrapStateError = 'border-danger';
var innerWrapsizeSm = 'pl-0-5 pr-0-1';
var innerWrapsizeMd = 'px-0-8';

var labelBase =
    'absolute left-0 max-w-full truncate pointer-events-none uppercase origin-top-left transition-transform ease-in duration-150 leading-snug';
var labelPositionFloat = 'transform -translate-y-full scale-75';
var labelStateDefault = 'text-tertiary-300';
var labelStateError = 'text-danger';
var labelBgPrimary = 'bg-white';
var labelSizeSm = 'px-0-2 top-0-3 text-sm';
var labelSizeMd = 'px-0-4 top-0-5';

var controlWrapBase = 'flex-auto relative';
var controlWrapSizeMd = 'py-0-5';
var controlWrapSizeSm = ' py-0-3';

var prependSizeMd = 'pr-0-4';
var prependSizeSm = 'pr-0-2';

var appendSizeMd = 'pl-0-4';
var appendSizeSm = 'pl-0-2';

var DefaultTheme$2 = {
    outerWrapBase: outerWrapBase,
    outerWrapSpace: outerWrapSpace,
    innerWrapBase: innerWrapBase,

    innerWrapStateDefault: innerWrapStateDefault,
    innerWrapStateFocused: innerWrapStateFocused,
    innerWrapStateError: innerWrapStateError,
    innerWrapsizeSm: innerWrapsizeSm,
    innerWrapsizeMd: innerWrapsizeMd,

    controlWrapBase: controlWrapBase,
    controlWrapSizeMd: controlWrapSizeMd,
    controlWrapSizeSm: controlWrapSizeSm,

    labelBase: labelBase,
    labelPositionFloat: labelPositionFloat,
    labelStateDefault: labelStateDefault,
    labelStateError: labelStateError,
    labelBgPrimary: labelBgPrimary,

    prependSizeSm: prependSizeSm,
    prependSizeMd: prependSizeMd,

    appendSizeSm: appendSizeSm,
    appendSizeMd: appendSizeMd,

    labelSizeSm: labelSizeSm,
    labelSizeMd: labelSizeMd
};var controlWrap = 'relative';
var base$2 = 'w-full form-input';
var stateReadonly = 'cursor-pointer';
var stateNotLabel = 'form-input-not-label';
var typeTextarea = 'resize-none';

var apperanceNumberWrap = 'absolute top-0 right-0 flex flex-col h-full';
var apperanceNumberBase =
    'inline-flex items-center justify-center h-1/2 cursor-pointer select-none';
var apperanceNumberStateDisable = 'opacity-50 pointer-events-none';

var sizeSmBase = '';
var sizeMdBase = '';

var DefaultTheme$3 = Object.assign({}, DefaultTheme$2,
    {controlWrap: controlWrap,
    base: base$2,
    stateReadonly: stateReadonly,
    stateNotLabel: stateNotLabel,
    typeTextarea: typeTextarea,
    apperanceNumberWrap: apperanceNumberWrap,
    apperanceNumberBase: apperanceNumberBase,
    apperanceNumberStateDisable: apperanceNumberStateDisable,
    sizeSmBase: sizeSmBase,
    sizeMdBase: sizeMdBase});var base$3 = 'mb-1-4';

var DefaultTheme$4 = {
    base: base$3
};var wrapperBase = 'flex flex-wrap mb-0-4';

var labelBase$1 = 'relative pl-1-4';
var labelStateDefault$1 = 'cursor-pointer';
var labelStateDisabled = 'cursor-not-allowed opacity-50';
var labelStateError$1 = 'cursor-pointer';

var inputBase = 'absolute top-0-2 left-0 w-0-8 h-0-8';

var inputCheckboxBase = 'form-checkbox';
var inputCheckboxStateError = 'form-checkbox-is-error';

var inputRadioBase = 'form-radio';
var inputRadioStateError = 'form-radio-is-error';

var DefaultTheme$5 = {
    wrapperBase: wrapperBase,

    labelBase: labelBase$1,
    labelStateDefault: labelStateDefault$1,
    labelStateDisabled: labelStateDisabled,
    labelStateError: labelStateError$1,

    inputBase: inputBase,

    inputCheckboxBase: inputCheckboxBase,
    inputCheckboxStateError: inputCheckboxStateError,

    inputRadioBase: inputRadioBase,
    inputRadioStateError: inputRadioStateError
};var base$4 = 'outline-none select-none font-semibold text-lg uppercase px-1-5 py-0-7';
var stateDefault = '';
var stateActive = 'text-secondary-200 border-b-4 border-secondary-200';

var DefaultTheme$6 = {
    base: base$4,
    stateDefault: stateDefault,
    stateActive: stateActive
};var base$5 = '';

var DefaultTheme$7 = {
    base: base$5
};var base$6 = 'flex';
var directionColumn = 'flex-col';
var directionHorizontal = 'flex-row';

var DefaultTheme$8 = {
    base: base$6,
    directionColumn: directionColumn,
    directionHorizontal: directionHorizontal
};var base$7 = 'inline-block';

var DefaultTheme$9 = {
    base: base$7
};var base$8 = 'container';
var modeFluid = 'max-w-none';

var DefaultTheme$a = {
    base: base$8,
    modeFluid: modeFluid
};var base$9 = 'flex flex-wrap';

var guttersNormalizeXl = '-mx-1-2';
var guttersXl = 'px-1-2';

var guttersNormalizeLg = '-mx-0-8';
var guttersLg = 'px-0-8';

var guttersNormalizeMd = '-mx-0-4';
var guttersMd = 'px-0-4';

var guttersNormalizeSm = '-mx-0-2';
var guttersSm = 'px-0-2';

var guttersNormalizeNone = '';
var guttersNone = '';

var DefaultTheme$b = {
    base: base$9,
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
};var base$a = 'max-w-full';

var DefaultTheme$c = {
    base: base$a
};var headerBase = 'text-xl font-semibold mb-0-8';
var wrapperBase$1 = 'mb-2-2';

var DefaultTheme$d = {
    headerBase: headerBase,
    wrapperBase: wrapperBase$1
};var inputBase$1 = 'cursor-pointer';
var inputIconBase = 'block form-select';
var inputIconSizeMd = 'w-1-4 h-1-4';
var inputIconSizeSm = 'w-1-2 h-1-2';

var optionBase = 'cursor-pointer py-0-4 px-0-8';
var optionStateDefault = 'bg-white hover:bg-tertiary-100';
var optionStateActive = 'bg-tertiary-100';

var DefaultTheme$e = {
    inputBase: inputBase$1,
    inputIconBase: inputIconBase,
    inputIconSizeMd: inputIconSizeMd,
    inputIconSizeSm: inputIconSizeSm,

    optionBase: optionBase,
    optionStateDefault: optionStateDefault,
    optionStateActive: optionStateActive
};var base$b =
    'rounded-lg font-bold px-0-6 py-0-3 inline-block border-2 leading-none align-middle';

var variantPrimary$2 = 'bg-primary-100 border-primary-100 text-white';
var variantSecondary$2 = 'border-secondary-200 text-secondary-200';
var variantTertiary$2 = 'text-danger border-danger';
var variantQuaternary$2 = '';
var variantQuinary$2 = '';

var DefaultTheme$f = {
    base: base$b,

    variantPrimary: variantPrimary$2,
    variantSecondary: variantSecondary$2,
    variantTertiary: variantTertiary$2,
    variantQuaternary: variantQuaternary$2,
    variantQuinary: variantQuinary$2
};var wrapperBase$2 = 'relative';
var dropdownBase = 'absolute z-50 top-full min-w-full mt-0-4 bg-white overflow-hidden';
var dropdownVariantPrimary = 'shadow-example rounded';
var dropdownVariantSecondary = 'shadow-example rounded-lg';
var dropdownPlacementLeft = 'left-0';
var dropdownPlacementRight = 'right-0';

var DefaultTheme$g = {
    wrapperBase: wrapperBase$2,
    dropdownBase: dropdownBase,
    dropdownVariantPrimary: dropdownVariantPrimary,
    dropdownVariantSecondary: dropdownVariantSecondary,
    dropdownPlacementLeft: dropdownPlacementLeft,
    dropdownPlacementRight: dropdownPlacementRight
};var DefaultTheme$h=/*#__PURE__*/Object.freeze({__proto__:null,CButton: DefaultTheme,CLink: DefaultTheme$1,CFormInput: DefaultTheme$3,CForm: DefaultTheme$4,CCheckbox: DefaultTheme$5,CRadio: DefaultTheme$5,CTab: DefaultTheme$6,CTabPanel: DefaultTheme$7,CList: DefaultTheme$8,CListItem: DefaultTheme$9,CContainer: DefaultTheme$a,CRow: DefaultTheme$b,CCol: DefaultTheme$c,CFormField: DefaultTheme$2,CFormPanel: DefaultTheme$d,CFormSelectCustom: DefaultTheme$e,CBadge: DefaultTheme$f,CDropdown: DefaultTheme$g});var justifyCenter = 'justify-center';
var justifyBetween = 'justify-between';
var justifyStart = 'justify-start';
var justifyEnd = 'justify-end';var noop = function () {};

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
};var DEFAULTS = {
    common: {
        screens: ['sm', 'md', 'lg', 'xl'],
        validJustifyContent: ['start', 'end', 'between', 'center']
    },

    CButton: {
        tag: 'button',
        variant: 'primary',
        size: 'md'
    },

    CBadge: {
        variant: 'primary'
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
        gutters: 'lg',
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
        variant: 'primary',
        placement: 'left'
    },

    CFormInput: {
        rows: 6
    },

    CFormSelectCustom: {
        optionValue: 'value',
        optionLabel: 'label',
        dropdownVariant: 'secondary'
    }
};var get = function (obj, path, defaultValue) {
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
};var NAME = 'CForm';

var props = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$4; }
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

        return h('form', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var NAME$1 = 'CFormPanel';

var CFormPanel = {
    name: NAME$1,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$d; }
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
        var wrapperBase = ref.wrapperBase;

        return h(
            'section',
            {
                staticClass: wrapperBase
            },
            [
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
            ]
        );
    }
};var NAME$2 = 'CFormField';
var validSizes = ['sm', 'md'];

var createSizeMap = function (ref) {
    var labelSizeSm = ref.labelSizeSm;
    var labelSizeMd = ref.labelSizeMd;
    var innerWrapsizeSm = ref.innerWrapsizeSm;
    var innerWrapsizeMd = ref.innerWrapsizeMd;
    var controlWrapSizeMd = ref.controlWrapSizeMd;
    var controlWrapSizeSm = ref.controlWrapSizeSm;
    var appendSizeSm = ref.appendSizeSm;
    var appendSizeMd = ref.appendSizeMd;
    var prependSizeSm = ref.prependSizeSm;
    var prependSizeMd = ref.prependSizeMd;

    return {
        md: {
            label: labelSizeMd,
            innerWrap: innerWrapsizeMd,
            append: appendSizeMd,
            prepend: prependSizeMd,
            controlWrap: controlWrapSizeMd
        },
        sm: {
            label: labelSizeSm,
            innerWrap: innerWrapsizeSm,
            append: appendSizeSm,
            prepend: prependSizeSm,
            controlWrap: controlWrapSizeSm
        }
    };
};

var CFormField = {
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

        inline: {
            type: Boolean,
            default: false
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
        },

        labelBgColor: {
            type: String,
            default: null
        },

        labelStick: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: function (value) { return validSizes.includes(value); }
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
            var outerWrapSpace = ref.outerWrapSpace;
            var innerWrapBase = ref.innerWrapBase;
            var innerWrapStateDefault = ref.innerWrapStateDefault;
            var innerWrapStateFocused = ref.innerWrapStateFocused;
            var innerWrapStateError = ref.innerWrapStateError;
            var controlWrapBase = ref.controlWrapBase;
            var labelBase = ref.labelBase;
            var labelStateDefault = ref.labelStateDefault;
            var labelStateError = ref.labelStateError;
            var labelPositionFloat = ref.labelPositionFloat;
            var labelBgPrimary = ref.labelBgPrimary;

            var outerWrapClasses = [outerWrapBase];
            var innerWrapClasses = [innerWrapBase];
            var controlWrapClasses = [controlWrapBase];
            var labelClasses = [labelBase];

            var sizes = createSizeMap(this$1.theme);

            if (!this$1.inline) {
                outerWrapClasses.push(outerWrapSpace);
            }

            if (!this$1.labelBgColor) {
                labelClasses.push(labelBgPrimary);
            } else {
                labelClasses.push(this$1.labelBgColor);
            }

            // status
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

                if (this$1.modelValue || this$1.labelStick) {
                    isNotEmpty();
                    break level1;
                }

                isDefault();
            }

            var ref$1 = getHashMapValue(
                sizes,
                this$1.size
            );
            var label = ref$1.label;
            var innerWrap = ref$1.innerWrap;
            var prepend = ref$1.prepend;
            var append = ref$1.append;
            var controlWrap = ref$1.controlWrap;

            labelClasses.push(label);
            innerWrapClasses.push(innerWrap);
            controlWrapClasses.push(controlWrap);
            var appendWrapClasses = [append];
            var prependWrapClasses = [prepend];

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

                                this.$slots.label || this.label
                                    ? h(
                                          'div', // label
                                          {
                                              class: labelClasses,
                                              ref: 'label'
                                          },
                                          this.$slots.label ? this.$slots.label : this.label
                                      )
                                    : null
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
};// TODO: support attr - inputmode

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

var createSizeMap$1 = function (ref) {
    var sizeSmBase = ref.sizeSmBase;
    var sizeMdBase = ref.sizeMdBase;

    return {
        md: sizeMdBase,
        sm: sizeSmBase
    };
};

var NAME$3 = 'CFormInput';

var CFormInput = {
    name: NAME$3,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [CFormField],

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
            default: function () { return DefaultTheme$3; }
        },

        // textarea specific

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

    computed: {
        isNumeric: function isNumeric() {
            return this.type === 'number';
        }
    },

    methods: {
        decrease: function decrease() {
            var numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue <= this.min) { return; }

            this.update({ type: 'input', value: numericValue - 1 });
        },

        increase: function increase() {
            var numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue === this.max) { return; }

            this.update({ type: 'input', value: numericValue + 1 });
        },

        numericProcess: function numericProcess(value) {
            /*
            1 - empty -> null
            2 - min/max
            3 - negative
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

            if (this.isNumeric) {
                var numericValue = this.numericProcess(value);
                this.update({ type: type, value: numericValue });
            } else {
                this.update({ type: type, value: value });
            }
        },

        update: function update(ref) {
            var type = ref.type;
            var value = ref.value;

            this.$emit(type === 'input' ? 'input' : 'change', value);
        },

        getControl: function getControl(h) {
            var this$1 = this;

            //
            var ref = this.theme;
            var base = ref.base;
            var stateReadonly = ref.stateReadonly;
            var stateNotLabel = ref.stateNotLabel;
            var typeTextarea = ref.typeTextarea;
            var controlWrap = ref.controlWrap;
            var apperanceNumberWrap = ref.apperanceNumberWrap;
            var apperanceNumberBase = ref.apperanceNumberBase;
            var apperanceNumberStateDisable = ref.apperanceNumberStateDisable;

            var size = createSizeMap$1(this.theme);

            var isTextArea = this.type === 'textarea';

            var inputClasses = [base];

            if (isTextArea) { inputClasses.push(typeTextarea); }

            if (this.readonly) { inputClasses.push(stateReadonly); }

            if (!this.label) { inputClasses.push(stateNotLabel); }

            inputClasses.push(getHashMapValue(size, this.size));

            return h(
                'div',
                {
                    staticClass: controlWrap
                },
                [
                    h(isTextArea ? 'textarea' : 'input', {
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
                    }),

                    // custom number apperance
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
};var CFormField$1 = {
    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [CFormField],

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$2; }
        }
    },

    methods: {
        getControl: function getControl(h) {
            return h('div', [this.$slots.default]);
        }
    }
};var validSizes$1 = ['sm', 'md'];

var NAME$4 = 'CFormSelectCustom';

var createSizeMap$2 = function (ref) {
    var inputIconSizeMd = ref.inputIconSizeMd;
    var inputIconSizeSm = ref.inputIconSizeSm;

    return {
        md: {
            icon: inputIconSizeMd
        },
        sm: {
            icon: inputIconSizeSm
        }
    };
};

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
            default: function () { return DefaultTheme$e; }
        },

        label: {
            type: String,
            default: null
        },

        placeholder: {
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
        },

        size: {
            type: String,
            default: 'md',
            validator: function (value) { return validSizes$1.includes(value); }
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
        var placeholder = props.placeholder;
        var optionLabel = props.optionLabel;
        var optionValue = props.optionValue;
        var error = props.error;
        var size = props.size;

        var selectedOption = options.find(function (item) { return item[optionValue] === modelValue; });
        var inputBase = theme.inputBase;
        var inputIconBase = theme.inputIconBase;
        var sizes = createSizeMap$2(theme);

        var iconClass = [inputIconBase];

        var ref$1 = getHashMapValue(sizes, size);
        var icon = ref$1.icon;

        iconClass.push(icon);

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
                            placeholder: placeholder,
                            size: size,
                            modelValue: selectedOption
                                ? scopedSlots.selected
                                    ? scopedSlots.selected(selectedOption)[0].text
                                    : selectedOption[optionLabel]
                                : null
                        },
                        ref: 'holder',
                        staticClass: inputBase,
                        scopedSlots: {
                            append: function () { return h('i', { class: iconClass }); }
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
};var computeIsChecked = function (ref) {
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

    var labelBase = theme.labelBase;
    var labelStateDefault = theme.labelStateDefault;
    var labelStateDisabled = theme.labelStateDisabled;
    var labelStateError = theme.labelStateError;
    var wrapperBase = theme.wrapperBase;
    var inputBase = theme.inputBase;
    var inputCheckboxBase = theme.inputCheckboxBase;
    var inputCheckboxStateError = theme.inputCheckboxStateError;
    var inputRadioBase = theme.inputRadioBase;
    var inputRadioStateError = theme.inputRadioStateError;

    var labelClasses = [labelBase];
    var inputClass = [inputBase];

    inputClass.push(type === 'checkbox' ? inputCheckboxBase : inputRadioBase);

    if (disabled) {
        labelClasses.push(labelStateDisabled);
    } else if (error) {
        labelClasses.push(labelStateError);
        inputClass.push(type === 'checkbox' ? inputCheckboxStateError : inputRadioStateError);
    } else {
        labelClasses.push(labelStateDefault);
    }

    return {
        labelClasses: labelClasses,
        wrapperBase: wrapperBase,
        inputClass: inputClass
    };
};

function radioCheckbox (type) {
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
            var inputClass = ref$1.inputClass;
            var wrapperBase = ref$1.wrapperBase;

            var inputData = {
                class: inputClass,
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
                        label
                    ])
                ]
            );
        }
    };
}var NAME$5 = 'CRadio';
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
    }));// TODO: add limit...

function radioCheckboxGroup (type) {
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

                var onChange = listeners['change'] || noop;
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
                        change: function (val) { return onChange(val); }
                    }
                });
            });

            return h('div', children);
        }
    };
}var NAME$6 = 'CRadioGroup';
var TYPE$1 = 'radio';

var CRadioGroup = Object.assign({}, {name: NAME$6},

    merge(radioCheckboxGroup(TYPE$1), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    }));var NAME$7 = 'CCheckbox';
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
    }));var NAME$8 = 'CCheckboxGroup';
var TYPE$3 = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$8},

    merge(radioCheckboxGroup(TYPE$3), {
        props: {
            modelValue: {
                type: Array,
                default: function () { return []; }
            }
        }
    }));var NAME$9 = 'CLink';
var LINK_TAG = 'a';
var SPAN_TAG = 'span';
var validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

var concat = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return Array.prototype.concat.apply([], args);
};
var isRouterLink = function (tag) { return ![LINK_TAG, SPAN_TAG].includes(tag.toString().toLowerCase()); };

var computeTag = function (ref, instance) {
    var to = ref.to;
    var disabled = ref.disabled;
    var href = ref.href;

    return instance.$router && to && !disabled
        ? instance.$nuxt
            ? 'nuxt-link'
            : 'router-link'
        : href
        ? LINK_TAG
        : SPAN_TAG;
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

        inline: {
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
            return computeTag({ to: this.to, disabled: this.disabled, href: this.href }, this);
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
            var inlineType = ref.inlineType;
            var inlineBlockType = ref.inlineBlockType;
            var classes = [base];

            classes.push(this$1.inline ? inlineType : inlineBlockType);

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
                {tabindex: this.disabled ? '-1' : this.$attrs.tabindex ? this.$attrs.tabindex : null,
                'aria-disabled': this.disabled ? 'true' : null})
        };
        componentData[this.isRouterLink ? 'nativeOn' : 'on'] = Object.assign({}, this.$listeners,
                {click: this.onClick});

        if (this.href) {
            componentData.attrs.href = this.href;
            componentData.attrs.target = this.target;
            componentData.attrs.rel = this.computeRel;
        } else {
            delete componentData.attrs.href;
            delete componentData.attrs.target;
            delete componentData.attrs.rel;
        }

        return h(this.computedTag, componentData, this.label ? this.label : this.$slots.default);
    }
};var NAME$a = 'CButton';
var validVariants$1 = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
var validSizes$2 = ['lg', 'md', 'sm'];
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
        validator: function (value) { return validSizes$2.includes(value); }
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
            vueFunctionalDataMerge.mergeData(data, componentData),
            props.label ? props.label : children
        );
    }
};var NAME$b = 'CTabs';

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
        var data = ref.data;
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

            vueFunctionalDataMerge.mergeData(data, {
                attrs: {
                    role: 'tablist'
                },
                props: {
                    direction: vertical ? 'vertical' : 'horizontal',
                    justify: justify
                }
            }),

            [].concat( normalizeTabs )
        );
    }
};var NAME$c = 'CTab';

var CTab = {
    name: NAME$c,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$6; }
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
                        click: function (e) {
                            e.preventDefault();
                            return this$1.$emit('onClick', this$1.name);
                        }
                    },
                    staticClass: base,
                    class: [stateDefault, this.isActive ? stateActive : null]
                },
                this.label ? this.label : this.$slots.default
            )
        ]);
    }
};var NAME$d = 'CTabPanels';

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

            tabPanel.data = vueFunctionalDataMerge.mergeData(tabPanel.data, {
                attrs: {
                    hidden: !isActive
                }
            });

            return props.lazy ? (isActive ? tabPanel : null) : tabPanel;
        });

        return h('div', vueFunctionalDataMerge.mergeData(data, {}), [].concat( normalizeTabPanels ));
    }
};var NAME$e = 'CTabPanel';

var CTabPanel = {
    name: NAME$e,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$7; }
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
        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), [children]);
    }
};var validDirection = ['vertical', 'horizontal'];

var NAME$f = 'CList';

var props$4 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$8; }
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

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var NAME$g = 'CListItem';

var props$5 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$9; }
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

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var validVariants$2 = ['primary', 'secondary'];
var validPlacements = ['left', 'right'];

var NAME$h = 'CDropdown';

var CDropdown = {
    name: NAME$h,

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$g; }
        },

        variant: {
            type: String,
            default: function () { return getComponentConfig(NAME$h, 'variant'); },
            validator: function (value) { return validVariants$2.includes(value); }
        },

        placement: {
            type: String,
            default: function () { return getComponentConfig(NAME$h, 'placement'); },
            validator: function (value) { return validPlacements.includes(value); }
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
            var dropdownPlacementLeft = ref.dropdownPlacementLeft;
            var dropdownPlacementRight = ref.dropdownPlacementRight;

            var wrapperClasses = [wrapperBase];
            var dropdownClasses = [dropdownBase];

            var themeMap = {
                variants: {
                    primary: dropdownVariantPrimary,
                    secondary: dropdownVariantSecondary
                },
                placement: {
                    left: dropdownPlacementLeft,
                    right: dropdownPlacementRight
                }
            };

            dropdownClasses.push(themeMap.variants[this$1.variant]);
            dropdownClasses.push(themeMap.placement[this$1.placement]);

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
};var NAME$i = 'CBadge';
var validVariants$3 = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

var createThemeMap$2 = function (ref) {
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

var props$6 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$f; }
    },

    label: {
        type: String,
        default: null
    },

    variant: {
        type: String,
        default: function () { return getComponentConfig(NAME$i, 'variant'); },
        validator: function (value) { return validVariants$3.includes(value); }
    }
};

var currentClass$2 = function (ref) {
    var disabled = ref.disabled;
    var size = ref.size;
    var variant = ref.variant;
    var block = ref.block;
    var theme = ref.theme;

    var base = theme.base;
    var ref$1 = createThemeMap$2(theme);
    var variants = ref$1.variants;
    var classes = [base];

    classes.push(getHashMapValue(variants, variant));

    return classes;
};

var CBadge = {
    name: NAME$i,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$6,

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children;

        var componentData = {
            class: currentClass$2(props)
        };

        return h('span', vueFunctionalDataMerge.mergeData(data, componentData), props.label ? props.label : children);
    }
};var props$7 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$a; }
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

var currentClass$3 = function (ref) {
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

    props: props$7,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$3(props)
        };

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var OFFSET_PROP_NAME = 'offset';
var NAME$j = 'CCol';

var breakpoints = getComponentConfig('common', 'screens');

var generateProps = function () {
    var obj;

    var breakpointCols = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    var breakpointOffsets = breakpoints.reduce(function (prop, breakpoint) {
        prop[suffixPropName(breakpoint, OFFSET_PROP_NAME)] = numProp();
        return prop;
    }, Object.create(null));

    return Object.assign({
        theme: {
            type: Object,
            default: function () { return DefaultTheme$c; }
        },

        cols: {
            type: Number,
            default: null
        }
    },

        breakpointCols,

        ( obj = {}, obj[OFFSET_PROP_NAME] = {
            type: Number,
            default: null
        }, obj ),

        breakpointOffsets);
};

var CCol = {
    name: NAME$j,

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
                }, Object.create(null))),
            offset: Object.assign({}, {default: props.offset},
                // TODO: refactoring, dry
                breakpoints.reduce(function (output, item) {
                    output[item] = props[suffixPropName(item, OFFSET_PROP_NAME)];
                    return output;
                }, Object.create(null)))
        };

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var NAME$k = 'CRow';
var VALID_GUTTERS = ['none', 'sm', 'md', 'lg', 'xl'];
var GUTTERS_PROP_NAME = 'gutters';
var COLS_PROP_NAME = 'cols';

var getBreakpoint = function (key, name) { return key.replace(name, '').toLowerCase(); };
var wPrefix = 'w-';
var offsetPrefix = 'ml-';

var createThemeMap$3 = function (ref) {
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
            default: function () { return DefaultTheme$b; }
        }
    }, obj[COLS_PROP_NAME] = {
            type: Number,
            default: function () { return getComponentConfig(NAME$k, COLS_PROP_NAME); }
        }, obj ),

        breakpointCols,

        ( obj$1 = {}, obj$1[GUTTERS_PROP_NAME] = {
            type: String,
            default: function () { return getComponentConfig(NAME$k, 'gutters'); },
            validator: function (value) { return VALID_GUTTERS.includes(value); }
        }, obj$1 ),

        breakpointGutters);
};

//
var currentClass$4 = function (props) {
    var gutter = props.gutters;
    var theme = props.theme;
    var base = theme.base;
    var ref = createThemeMap$3(theme);
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
    var offset = ref.offset;
    var colsLimit = ref.colsLimit;

    if (!cols) { return null; }

    var classes = [];

    // width
    if (cols.default) {
        if (cols.default < colsLimit) {
            classes.push(("" + wPrefix + (cols.default) + "/" + colsLimit));
        }

        if (cols.default === colsLimit) {
            classes.push((wPrefix + "full"));
        }
    }

    // offset
    if (offset.default) {
        if (offset.default < colsLimit) {
            classes.push(("" + offsetPrefix + (offset.default) + "/" + colsLimit));
        }

        if (offset.default === colsLimit) {
            classes.push((offsetPrefix + "full"));
        }
    }

    breakpointPropMap[COLS_PROP_NAME].forEach(function (breakpoint) {
        var propsValue = props[breakpoint] || colsLimit;

        // breakpoint width
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

        // breakpoint offset
        if (offset[breakpoint]) {
            if (offset[breakpoint] < propsValue) {
                classes.push((breakpoint + ":" + offsetPrefix + (offset[breakpoint]) + "/" + propsValue));
            }

            if (offset[breakpoint] === propsValue) {
                classes.push((breakpoint + ":" + offsetPrefix + "full"));
            }
        } else {
            if (props[breakpoint] && offset.default) {
                classes.push((breakpoint + ":" + offsetPrefix + (offset.default) + "/" + propsValue));
            }
        }
    });

    return classes;
};

var CRow = {
    name: NAME$k,

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

        var ref$1 = currentClass$4(props);
        var rowClasses = ref$1.rowClasses;
        var colClasses = ref$1.colClasses;
        var computedChildren = children.map(function (col) {
            if (!col.data) { return; }

            var ref = col.data;
            var cols = ref.cols;
            var offset = ref.offset;

            var colBreakpointClass = createColBreakpointClass({
                props: props,
                cols: cols,
                offset: offset,
                colsLimit: props.cols
            });

            col.data = vueFunctionalDataMerge.mergeData(col.data, {
                class: colClasses.concat( colBreakpointClass)
            });

            return col;
        });

        return h(
            'div',
            vueFunctionalDataMerge.mergeData(data, {
                class: rowClasses
            }),
            computedChildren
        );
    }
};var components = {
    CButton: CButton,
    CBadge: CBadge,
    CLink: CLink,
    CForm: CForm,
    CFormPanel: CFormPanel,
    CFormField: CFormField$1,
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

var install = function (Vue, options) {
    if ( options === void 0 ) options = {};

    var theme = options.theme; if ( theme === void 0 ) theme = {};
    var config = options.config; if ( config === void 0 ) config = {};
    var injectComponentList = options.components; if ( injectComponentList === void 0 ) injectComponentList = null;

    var CurrentTheme = Object.assign({}, DefaultTheme$h,
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
};exports.CButton=CButton;exports.CCheckbox=CCheckbox;exports.CCheckboxGroup=CCheckboxGroup;exports.CCol=CCol;exports.CContainer=CContainer;exports.CDropdown=CDropdown;exports.CForm=CForm;exports.CFormField=CFormField$1;exports.CFormInput=CFormInput;exports.CFormPanel=CFormPanel;exports.CFormSelectCustom=CFormSelectCustom;exports.CLink=CLink;exports.CList=CList;exports.CListItem=CListItem;exports.CRadio=CRadio;exports.CRadioGroup=CRadioGroup;exports.CRow=CRow;exports.CTab=CTab;exports.CTabPanel=CTabPanel;exports.CTabPanels=CTabPanels;exports.CTabs=CTabs;exports.default=index;exports.selfInstall=selfInstall;