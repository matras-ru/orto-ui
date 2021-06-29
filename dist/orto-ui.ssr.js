'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vClickOutside=require('v-click-outside-x'),Vue=require('vue'),lodash=require('lodash'),vueFunctionalDataMerge=require('vue-functional-data-merge');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k];}});}});}n['default']=e;return Object.freeze(n);}var vClickOutside__namespace=/*#__PURE__*/_interopNamespace(vClickOutside);var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);var lodash__default=/*#__PURE__*/_interopDefaultLegacy(lodash);var base$d =
    'inline-flex items-center justify-center rounded-lg uppercase font-semibold text-black-100 duration-250 ease-in-out border-3 focus:outline-none';

var variantPrimary$2 =
    'border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
var variantSecondary$2 =
    'bg-primary-100 border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
var variantTertiary$2 =
    'border-secondary-200 text-secondary-200 transition-colors hover:text-white disabled:text-secondary-200 hover:bg-secondary-200 disabled:bg-transparent';
var variantQuaternary$2 =
    'border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100 disabled:bg-transparent';
var variantQuinary$2 =
    'border-black-100 transition-colors hover:text-white disabled:text-black-100 hover:bg-black-100 disabled:bg-transparent';

var stateDisable$1 = 'cursor-not-allowed opacity-75';

var sizeSm$1 = 'text-base px-1-3 py-0-3 leading-snug';
var sizeMd$1 = 'text-base px-1-5 py-0-4 leading-snug';
var sizeLg$1 = 'text-lg px-1-5 py-0-6 leading-none';

var displayBlock = 'w-full';

var DefaultTheme$l = {
    base: base$d,

    variantPrimary: variantPrimary$2,
    variantSecondary: variantSecondary$2,
    variantTertiary: variantTertiary$2,
    variantQuaternary: variantQuaternary$2,
    variantQuinary: variantQuinary$2,

    stateDisable: stateDisable$1,

    sizeSm: sizeSm$1,
    sizeMd: sizeMd$1,
    sizeLg: sizeLg$1,

    displayBlock: displayBlock
};var base$c = 'no-underline cursor-pointer';
var inlineType = 'inline';
var inlineBlockType = 'inline-block';

var stateDisable = 'opacity-75 cursor-not-allowed';

var variantPrimary$1 = 'text-secondary-200 hover:text-black-200 border-b-2';
var variantSecondary$1 = '';
var variantTertiary$1 = 'hover:text-secondary-200 border-b';
var variantQuaternary$1 = 'text-tertiary-300 hover:text-black-200';
var variantQuinary$1 =
    'border-b border-dashed hover:text-tertiary-300 hover:border-tertiary-300';

var DefaultTheme$k = {
    base: base$c,
    inlineType: inlineType,
    inlineBlockType: inlineBlockType,
    stateDisable: stateDisable,
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

var labelBase$1 =
    'absolute left-0 max-w-full truncate pointer-events-none uppercase origin-top-left transition-transform ease-in duration-150 leading-snug';
var labelPositionFloat = 'transform -translate-y-full scale-75';
var labelStateDefault$1 = 'text-tertiary-300';
var labelStateError$1 = 'text-danger';
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

var hintBase = 'text-tertiary-300';
var errorBase = 'text-danger';

var bottomPlaceholderBase = 'text-sm mt-0-2';

var DefaultTheme$j = {
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

    labelBase: labelBase$1,
    labelPositionFloat: labelPositionFloat,
    labelStateDefault: labelStateDefault$1,
    labelStateError: labelStateError$1,
    labelBgPrimary: labelBgPrimary,

    prependSizeSm: prependSizeSm,
    prependSizeMd: prependSizeMd,

    appendSizeSm: appendSizeSm,
    appendSizeMd: appendSizeMd,

    labelSizeSm: labelSizeSm,
    labelSizeMd: labelSizeMd,

    hintBase: hintBase,
    errorBase: errorBase,

    bottomPlaceholderBase: bottomPlaceholderBase
};var controlWrap = 'relative';
var base$b = 'w-full form-input';
var stateReadonly = 'cursor-pointer';
var stateNotLabel = 'form-input-not-label';
var typeTextarea = 'resize-none';

var apperanceNumberWrap = 'absolute top-0 right-0 flex flex-col h-full';
var apperanceNumberBase =
    'inline-flex items-center justify-center h-1/2 cursor-pointer select-none';
var apperanceNumberStateDisable = 'opacity-50 pointer-events-none';

var sizeSmBase = '';
var sizeMdBase = '';

var DefaultTheme$i = Object.assign({}, DefaultTheme$j,
    {controlWrap: controlWrap,
    base: base$b,
    stateReadonly: stateReadonly,
    stateNotLabel: stateNotLabel,
    typeTextarea: typeTextarea,
    apperanceNumberWrap: apperanceNumberWrap,
    apperanceNumberBase: apperanceNumberBase,
    apperanceNumberStateDisable: apperanceNumberStateDisable,
    sizeSmBase: sizeSmBase,
    sizeMdBase: sizeMdBase});var base$a = 'mb-1-4';

var DefaultTheme$h = {
    base: base$a
};var wrapperBase$1 = 'flex flex-wrap mb-0-4';

var labelBase = 'relative pl-1-4';
var labelStateDefault = 'cursor-pointer';
var labelStateDisabled = 'cursor-not-allowed opacity-50';
var labelStateError = 'cursor-pointer';

var inputBase$1 = 'absolute top-0-2 left-0 w-0-8 h-0-8';

var inputCheckboxBase = 'form-checkbox';
var inputCheckboxStateError = 'form-checkbox-is-error';

var inputRadioBase = 'form-radio';
var inputRadioStateError = 'form-radio-is-error';

var DefaultTheme$g = {
    wrapperBase: wrapperBase$1,

    labelBase: labelBase,
    labelStateDefault: labelStateDefault,
    labelStateDisabled: labelStateDisabled,
    labelStateError: labelStateError,

    inputBase: inputBase$1,

    inputCheckboxBase: inputCheckboxBase,
    inputCheckboxStateError: inputCheckboxStateError,

    inputRadioBase: inputRadioBase,
    inputRadioStateError: inputRadioStateError
};var base$9 = 'outline-none select-none font-semibold text-lg uppercase px-1-5 py-0-7';
var stateDefault$1 = '';
var stateActive$1 = 'text-secondary-200 border-b-4 border-secondary-200';

var DefaultTheme$f = {
    base: base$9,
    stateDefault: stateDefault$1,
    stateActive: stateActive$1
};var base$8 = '';

var DefaultTheme$e = {
    base: base$8
};var base$7 = '';
var directionColumn = 'flex-col';
var directionHorizontal = 'flex-row';
var DISPLAY_FLEX = 'flex';
var DISPLAY_BLOCK$1 = 'block';

var DefaultTheme$d = {
    base: base$7,
    directionColumn: directionColumn,
    directionHorizontal: directionHorizontal,
    DISPLAY_FLEX: DISPLAY_FLEX,
    DISPLAY_BLOCK: DISPLAY_BLOCK$1
};var base$6 = '';
var DISPLAY_LIST_ITEM = 'list-item';
var DISPLAY_INLINE = 'inline-block';
var DISPLAY_BLOCK = 'block';

var DefaultTheme$c = {
    base: base$6,
    DISPLAY_LIST_ITEM: DISPLAY_LIST_ITEM,
    DISPLAY_INLINE: DISPLAY_INLINE,
    DISPLAY_BLOCK: DISPLAY_BLOCK
};var base$5 = 'container';
var modeFluid = 'max-w-none';

var DefaultTheme$b = {
    base: base$5,
    modeFluid: modeFluid
};var base$4 = 'flex flex-wrap';

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

var DefaultTheme$a = {
    base: base$4,
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
};var base$3 = 'max-w-full';

var DefaultTheme$9 = {
    base: base$3
};var panelHeaderBase = 'text-xl font-semibold mb-0-8';
var panelWrapperBase = 'mb-2-2';

var CFormPanel$1 = {
    panelHeaderBase: panelHeaderBase,
    panelWrapperBase: panelWrapperBase
};var inputBase = 'cursor-pointer';
var inputIconBase = 'block form-select';
var inputIconSizeMd = 'w-1-4 h-1-4';
var inputIconSizeSm = 'w-1-2 h-1-2';
var inputIconClass = 'form-select-icon';

var optionBase = 'cursor-pointer py-0-4 px-0-8';
var optionStateDefault = 'bg-white hover:bg-tertiary-100';
var optionStateActive = 'bg-tertiary-100';

var listBase = 'overscroll-contain overflow-y-auto max-h-18-6';

var fakeSelectBase = 'absolute w-full h-full left-0 top-0 opacity-0 z-1 cursor-pointer';

var DefaultTheme$8 = {
    inputBase: inputBase,
    inputIconBase: inputIconBase,
    inputIconSizeMd: inputIconSizeMd,
    inputIconSizeSm: inputIconSizeSm,
    inputIconClass: inputIconClass,

    optionBase: optionBase,
    optionStateDefault: optionStateDefault,
    optionStateActive: optionStateActive,

    listBase: listBase,

    fakeSelectBase: fakeSelectBase
};var base$2 = 'rounded-lg font-bold inline-block border-2 leading-none align-middle';

var variantPrimary = 'bg-primary-100 border-primary-100 text-white';
var variantSecondary = 'border-secondary-200 text-secondary-200';
var variantTertiary = 'text-danger border-danger';
var variantQuaternary = '';
var variantQuinary = '';

// TODO: Unit
var sizeSm = 'text-sm px-0-4 py-0-2';
var sizeMd = 'text-base px-0-6 py-0-3';
var sizeLg = 'text-lg px-0-8 py-0-4';

var DefaultTheme$7 = {
    base: base$2,

    variantPrimary: variantPrimary,
    variantSecondary: variantSecondary,
    variantTertiary: variantTertiary,
    variantQuaternary: variantQuaternary,
    variantQuinary: variantQuinary,
    sizeSm: sizeSm,
    sizeMd: sizeMd,
    sizeLg: sizeLg
};var wrapperBase = 'relative';
var dropdownBase = 'absolute z-50 top-full min-w-full mt-0-4 bg-white overflow-hidden';
var dropdownVariantPrimary = 'shadow-secondary rounded';
var dropdownVariantSecondary = 'shadow-secondary rounded-lg';
var dropdownPlacementLeft = 'left-0';
var dropdownPlacementRight = 'right-0';

var DefaultTheme$6 = {
    wrapperBase: wrapperBase,
    dropdownBase: dropdownBase,
    dropdownVariantPrimary: dropdownVariantPrimary,
    dropdownVariantSecondary: dropdownVariantSecondary,
    dropdownPlacementLeft: dropdownPlacementLeft,
    dropdownPlacementRight: dropdownPlacementRight
};var DefaultTheme$5 = {};var stateDefault = '#dedede';
var stateActive = '#fda368';

var starsWrapper = 'inline-block';
var labelWrapper = 'inline-block align-middle';

var stateCursorPointer = 'cursor-pointer';

var DefaultTheme$4 = {
    stateDefault: stateDefault,
    stateActive: stateActive,

    starsWrapper: starsWrapper,
    labelWrapper: labelWrapper,

    stateCursorPointer: stateCursorPointer
};var base$1 = 'inline-block';

var DefaultTheme$3 = {
    base: base$1
};var DefaultTheme$2=/*#__PURE__*/Object.freeze({__proto__:null,CButton: DefaultTheme$l,CLink: DefaultTheme$k,CFormInput: DefaultTheme$i,CForm: DefaultTheme$h,CCheckbox: DefaultTheme$g,CRadio: DefaultTheme$g,CTab: DefaultTheme$f,CTabPanel: DefaultTheme$e,CList: DefaultTheme$d,CListItem: DefaultTheme$c,CContainer: DefaultTheme$b,CRow: DefaultTheme$a,CCol: DefaultTheme$9,CFormField: DefaultTheme$j,CFormPanel: CFormPanel$1,CFormSelectCustom: DefaultTheme$8,CBadge: DefaultTheme$7,CDropdown: DefaultTheme$6,CListToggle: DefaultTheme$5,CRating: DefaultTheme$4,CStar: DefaultTheme$3});var justifyCenter = 'justify-center';
var justifyBetween = 'justify-between';
var justifyStart = 'justify-start';
var justifyEnd = 'justify-end';var noop = function () {};

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
};var DEFAULTS = {
    common: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        validJustifyContent: ['start', 'end', 'between', 'center']
    },

    CButton: {
        tag: 'button',
        variant: 'primary',
        size: 'md'
    },

    CBadge: {
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
        tag: 'li',
        inline: true
    },

    CRow: {
        direction: 'row',
        gutters: 'lg',
        cols: 12
    },

    CCol: {},

    CListToggle: {
        limit: 5
    },

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
    },

    CRating: {}
};var PROP_NAME = '$ortoUIConfig';

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
        var this$1$1 = this;
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
                this$1$1.$_config[cmpName] = this$1$1.$_config[cmpName] || {};
                this$1$1.$_config[cmpName][prop] = cmpConfig[prop];
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
    return lodash__default['default'].get(this.$_config, key, lodash__default['default'].get(DEFAULTS, key));
};

Object.defineProperties( Config.prototype, prototypeAccessors );
Object.defineProperties( Config, staticAccessors );

var getConfigValue = function (key) {
    return Vue__default['default'].prototype[PROP_NAME]
        ? Vue__default['default'].prototype[PROP_NAME].getConfigValue(key)
        : lodash__default['default'].get(DEFAULTS, key);
};

var ConfigPlugin = function (config, Vue) {
    if ( config === void 0 ) config = {};

    Vue.prototype[PROP_NAME] = new Config();
    Vue.prototype[PROP_NAME].setConfig(config);
};

var getComponentConfig = function (cmpName, key) {
    if ( key === void 0 ) key = null;

    return key ? getConfigValue((cmpName + "." + key)) : getConfigValue(cmpName) || {};
};var NAME$o = 'CForm';

var props$8 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$h; }
    }
};

var CForm = {
    name: NAME$o,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$8,

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
};var FormPanel = {
    props: {
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
            open: !this.collapsed
        };
    },

    methods: {
        // TODO:
        toggle: function toggle() {
            this.open = !this.open;
        }
    },

    render: function render(h) {
        var ref = this.theme;
        var panelHeaderBase = ref.panelHeaderBase;
        var panelWrapperBase = ref.panelWrapperBase;

        return h(
            'div',
            {
                staticClass: panelWrapperBase
            },
            [
                this.label
                    ? h(
                          'header',
                          {
                              staticClass: panelHeaderBase
                          },
                          [h('div', this.label)]
                      )
                    : null,
                this.open
                    ? h('div', [
                          [
                              this.getControl !== void 0 // control slot
                                  ? this.getControl(h)
                                  : this.$slots.default
                          ]
                      ])
                    : null
            ]
        );
    }
};var NAME$n = 'CFormPanel';

var CFormPanel = {
    name: NAME$n,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [FormPanel],

    props: {
        theme: {
            type: Object,
            default: function () { return CFormPanel$1; }
        }
    },

    methods: {
        getControl: function getControl(h) {
            return h('div', [this.$slots.default]);
        }
    }
};var NAME$m = 'CFormField';
var validSizes$3 = ['sm', 'md'];

var createSizeMap$2 = function (ref) {
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

var CFormField$1 = {
    name: NAME$m,

    inheritAttrs: false,

    props: {
        modelValue: {
            type: [String, Number]
        },

        label: {
            type: String
        },

        inline: {
            type: Boolean
        },

        name: {
            type: String
        },

        id: {
            type: String
        },

        placeholder: {
            type: String
        },

        hint: {
            type: String
        },

        error: {
            type: Boolean,
            default: false
        },

        errorMessage: {
            type: String
        },

        labelBgColor: {
            type: String
        },

        labelStick: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: function (value) { return validSizes$3.includes(value); }
        }
    },

    data: function data() {
        return {
            focused: false
        };
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = (function () {
            var ref = this$1$1.theme;
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
            var hintBase = ref.hintBase;
            var errorBase = ref.errorBase;
            var bottomPlaceholderBase = ref.bottomPlaceholderBase;

            var outerWrapClasses = [outerWrapBase];
            var innerWrapClasses = [innerWrapBase];
            var controlWrapClasses = [controlWrapBase];
            var labelClasses = [labelBase];
            var hintClasses = [hintBase];
            var errorClasses = [errorBase];
            var bottomPlaceholderClasses = [bottomPlaceholderBase];

            var sizes = createSizeMap$2(this$1$1.theme);

            if (!this$1$1.inline) {
                outerWrapClasses.push(outerWrapSpace);
            }

            if (!this$1$1.labelBgColor) {
                labelClasses.push(labelBgPrimary);
            } else {
                labelClasses.push(this$1$1.labelBgColor);
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

            level1: if (this$1$1.error) {
                isError();

                if (this$1$1.modelValue || this$1$1.focused) {
                    isErrorAndNotEmptyOrFocused();
                    break level1;
                }
            } else {
                if (this$1$1.focused) {
                    isFocused();
                    break level1;
                }

                if (this$1$1.modelValue || this$1$1.labelStick) {
                    isNotEmpty();
                    break level1;
                }

                isDefault();
            }

            var ref$1 = getHashMapValue(
                sizes,
                this$1$1.size
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
                appendWrapClasses: appendWrapClasses,
                hintClasses: hintClasses,
                errorClasses: errorClasses,
                bottomPlaceholderClasses: bottomPlaceholderClasses
            };
        })();
        var outerWrapClasses = ref.outerWrapClasses;
        var innerWrapClasses = ref.innerWrapClasses;
        var controlWrapClasses = ref.controlWrapClasses;
        var labelClasses = ref.labelClasses;
        var prependWrapClasses = ref.prependWrapClasses;
        var appendWrapClasses = ref.appendWrapClasses;
        var hintClasses = ref.hintClasses;
        var errorClasses = ref.errorClasses;
        var bottomPlaceholderClasses = ref.bottomPlaceholderClasses;

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
                ),
                (this.error && this.errorMessage) || this.hint
                    ? h('div', { class: bottomPlaceholderClasses }, [
                          this.error && this.errorMessage
                              ? h('div', { class: errorClasses }, this.errorMessage)
                              : h('div', { class: hintClasses }, this.hint)
                      ])
                    : null
            ]
        );
    }
};// TODO: support attr - inputmode

var validTypes$1 = [
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

var NAME$l = 'CFormInput';

var REGEXP_NUMBER = /^\d+$/;

var CFormInput = {
    name: NAME$l,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    // inheritAttrs: false,

    mixins: [CFormField$1],

    props: {
        type: {
            type: String,
            default: 'text',
            validator: function (value) { return validTypes$1.includes(value); }
        },

        readonly: {
            type: Boolean,
            default: false
        },

        theme: {
            type: Object,
            default: function () { return DefaultTheme$i; }
        },

        // textarea specific

        rows: {
            type: Number,
            default: function () { return getComponentConfig(NAME$l, 'rows'); }
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
        paste: function paste(event) {
            var clipboardData = event.clipboardData || window.clipboardData;

            if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
                event.preventDefault();
            }
        },

        decrease: function decrease() {
            var numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue <= this.min) { return; }

            this.update({ type: 'change', value: numericValue - 1 });
        },

        increase: function increase() {
            var numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue === this.max) { return; }

            this.update({ type: 'change', value: numericValue + 1 });
        },

        numericProcess: function numericProcess(value) {
            /*
            1 - empty -> null
            2 - min/max
            3 - negative
            */
            var num = parseInt(value);
            var localValue = isNaN(num) ? value : num;

            // 1
            if (!localValue) { return this.min || 0; }

            // 2
            if (this.max) {
                if (localValue >= this.max) { return this.max; }
            }

            if (localValue <= this.min) { return this.min || 0; }

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
            var this$1$1 = this;

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
                        attrs: Object.assign({}, this.$attrs,
                            {name: this.name,
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
                                if (this$1$1.readonly) { return; }
                                this$1$1.focused = true;
                                this$1$1.$emit('focus');
                            },

                            blur: function () {
                                this$1$1.focused = false;
                                this$1$1.$emit('blur');
                            },

                            input: function (e) { return this$1$1.onUpdate({ e: e, type: 'input' }); },

                            change: function (e) { return this$1$1.onUpdate({ e: e, type: 'change' }); }},

                            (this.isNumeric && {
                                paste: function (e) {
                                    this$1$1.paste(e);
                                    this$1$1.$emit('paste');
                                }
                            }))
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
};var CFormField = {
    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [CFormField$1],

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$j; }
        }
    },

    methods: {
        getControl: function getControl(h) {
            return h('div', [this.$slots.default]);
        }
    }
};var validVariants$3 = ['primary', 'secondary'];
var validPlacements = ['left', 'right'];

var NAME$k = 'CDropdown';

var CDropdown = {
    name: NAME$k,

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$6; }
        },

        variant: {
            type: String,
            default: function () { return getComponentConfig(NAME$k, 'variant'); },
            validator: function (value) { return validVariants$3.includes(value); }
        },

        placement: {
            type: String,
            default: function () { return getComponentConfig(NAME$k, 'placement'); },
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
        var this$1$1 = this;

        var ref = (function () {
            var ref = this$1$1.theme;
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

            dropdownClasses.push(themeMap.variants[this$1$1.variant]);
            dropdownClasses.push(themeMap.placement[this$1$1.placement]);

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
};var validDirection = ['vertical', 'horizontal'];

var NAME$j = 'CList';

var props$7 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$d; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$j, 'tag'); }
    },

    direction: {
        type: String,
        default: function () { return getComponentConfig(NAME$j, 'direction'); },
        validator: function (value) { return validDirection.includes(value); }
    },

    justify: {
        type: String,
        default: null,
        validator: function (value) { return getComponentConfig('common', 'validJustifyContent').includes(value); }
    },

    block: {
        // for col-count-
        type: Boolean,
        default: false
    }
};

var currentClass$5 = function (ref) {
    var direction = ref.direction;
    var justify = ref.justify;
    var theme = ref.theme;
    var block = ref.block;

    var base = theme.base;
    var directionColumn = theme.directionColumn;
    var directionHorizontal = theme.directionHorizontal;
    var DISPLAY_FLEX = theme.DISPLAY_FLEX;
    var DISPLAY_BLOCK = theme.DISPLAY_BLOCK;

    var classMap = {
        vertical: directionColumn,
        horizontal: directionHorizontal
    };

    var classes = [base];

    if (block) {
        classes.push(DISPLAY_BLOCK);
    } else {
        classes.push(DISPLAY_FLEX);

        // horizontal/vertical
        classes.push(classMap[direction]);

        // horizontal align
        classes.push(justifyClaassUtil(justify));
    }

    return classes;
};

var CList = {
    name: NAME$j,

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
            class: currentClass$5(props)
        };

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var NAME$i = 'CListItem';

var props$6 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$c; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$i, 'tag'); }
    },

    inline: {
        type: Boolean,
        default: function () { return getComponentConfig(NAME$i, 'inline'); }
    },

    listItem: {
        type: Boolean,
        default: false
    }
};

var CListItem = {
    name: NAME$i,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$6,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;
        var DISPLAY_LIST_ITEM = ref$1.DISPLAY_LIST_ITEM;
        var DISPLAY_INLINE = ref$1.DISPLAY_INLINE;
        var DISPLAY_BLOCK = ref$1.DISPLAY_BLOCK;

        var componentData = {
            staticClass: base,
            class:
                props.tag === 'li' && props.listItem
                    ? DISPLAY_LIST_ITEM
                    : [props.inline ? DISPLAY_INLINE : DISPLAY_BLOCK]
        };

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var validSizes$2 = ['sm', 'md'];

var NAME$h = 'CFormSelectCustom';

var createSizeMap = function (ref) {
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
    name: NAME$h,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    components: {
        CDropdown: CDropdown,
        CFormInput: CFormInput,
        CList: CList,
        CListItem: CListItem
    },

    inheritAttrs: false,

    props: {
        modelValue: {
            type: [String, Number]
        },

        theme: {
            type: Object,
            default: function () { return DefaultTheme$8; }
        },

        label: {
            type: String
        },

        name: {
            type: String
        },

        labelBgColor: {
            type: String
        },

        placeholder: {
            type: String
        },

        data: {
            type: Array,
            default: function () { return []; }
        },

        optionValue: {
            type: String,
            default: function () { return getComponentConfig(NAME$h, 'optionValue'); }
        },

        optionLabel: {
            type: String,
            default: function () { return getComponentConfig(NAME$h, 'optionLabel'); }
        },

        error: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: function (value) { return validSizes$2.includes(value); }
        },

        useNativeList: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this;
        var options = ref.data;
        var theme = ref.theme;
        var modelValue = ref.modelValue;
        var label = ref.label;
        var placeholder = ref.placeholder;
        var optionLabel = ref.optionLabel;
        var optionValue = ref.optionValue;
        var error = ref.error;
        var size = ref.size;
        var useNativeList = ref.useNativeList;

        var selectedOption = options.find(function (item) { return item[optionValue] === modelValue; });
        var inputBase = theme.inputBase;
        var inputIconBase = theme.inputIconBase;
        var listBase = theme.listBase;
        var fakeSelectBase = theme.fakeSelectBase;
        var inputIconClass = theme.inputIconClass;
        var sizes = createSizeMap(theme);

        var iconClass = [inputIconBase];

        var ref$1 = getHashMapValue(sizes, size);
        var icon = ref$1.icon;

        iconClass.push(icon);

        var computeOptionClasses = function (isSelected) {
            var optionBase = theme.optionBase;
            var optionStateDefault = theme.optionStateDefault;
            var optionStateActive = theme.optionStateActive;

            var classesBasedOnState = isSelected ? optionStateActive : optionStateDefault;

            return [optionBase, classesBasedOnState];
        };

        // for mobile platform
        // TODO: unit
        var fakeNativeSelect = function () { return h(
                'select',
                {
                    staticClass: fakeSelectBase,
                    directives: [
                        {
                            name: 'model',
                            rawName: 'v-model',
                            value: modelValue,
                            expression: 'modelValue'
                        }
                    ],
                    attrs: this$1$1.$attrs,
                    on: {
                        change: function (e) {
                            var target = e.target;

                            var selectedVal = Array.from(target.options)
                                .filter(function (option) { return option.selected; })
                                .map(function (option) { return ('_value' in option ? option._value : option.value); });

                            this$1$1.$emit('change', selectedVal[0]);
                        }
                    }
                },
                options.map(function (option) {
                    var ref = mapOption({
                        option: option,
                        optionLabel: optionLabel,
                        optionValue: optionValue
                    });
                    var value = ref.value;
                    var label = ref.label;

                    var computedLabel = this$1$1.$scopedSlots.default
                        ? this$1$1.$scopedSlots.default(option)[0].text
                        : label;

                    return h('option', {
                        domProps: { value: value, innerHTML: computedLabel }
                    });
                })
            ); };

        return h('CDropdown', {
            props: {
                variant: getComponentConfig(NAME$h, 'dropdownVariant')
            },

            scopedSlots: Object.assign({}, {holder: function (ref) {
                        var toggle = ref.toggle;

                        return h('div', [
                        h('CFormInput', {
                            props: {
                                name: this$1$1.name,
                                labelBgColor: this$1$1.labelBgColor,
                                readonly: true,
                                error: error,
                                label: label,
                                placeholder: placeholder,
                                size: size,
                                modelValue: selectedOption
                                    ? this$1$1.$scopedSlots.selected
                                        ? this$1$1.$scopedSlots.selected(selectedOption)[0].text
                                        : selectedOption[optionLabel]
                                    : null
                            },
                            ref: 'holder',
                            staticClass: inputBase,
                            scopedSlots: {
                                append: function () { return h('i', { class: [iconClass, inputIconClass] }); }
                            },
                            attrs: this$1$1.$attrs,
                            on: {
                                click: toggle
                            }
                        }),
                        useNativeList ? fakeNativeSelect() : null
                    ]);
}        },

                (!useNativeList && {
                    dropdown: function (ref) {
                        var close = ref.close;
                        var isShow = ref.isShow;

                        // First to selected
                        // TODO:
                        this$1$1.$nextTick().then(function () {
                            if (isShow && this$1$1.$refs.selected) {
                                this$1$1.$refs.selected.scrollIntoView({
                                    block: 'nearest',
                                    inline: 'start'
                                });
                            }
                        });

                        return h(
                            'CList',
                            {
                                staticClass: listBase
                            },
                            [
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
                                        Object.assign({}, {class: computeOptionClasses(isSelected)},
                                            (isSelected && {
                                                ref: 'selected'
                                            }),
                                            {on: {
                                                click: function () {
                                                    this$1$1.$emit('change', value);
                                                    close();
                                                }
                                            }}),
                                        this$1$1.$scopedSlots.default
                                            ? this$1$1.$scopedSlots.default(option)
                                            : label
                                    );
                                })
                            ]
                        );
                    }
                }))
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
                default: function () { return DefaultTheme$g; }
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
}var NAME$g = 'CRadio';
var TYPE$3 = 'radio';

var props$5 = {
    modelValue: {
        type: [String, Number, Boolean],
        default: null
    },

    value: {
        type: [String, Number, Boolean],
        default: null
    }
};

var CRadio = Object.assign({}, {name: NAME$g},

    lodash__default['default'].merge(radioCheckbox(TYPE$3), {
        props: props$5
    }));var DefaultTheme$1 = Object.assign({}, CFormPanel$1);// TODO: add limit...

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

        mixins: [FormPanel],

        props: {
            theme: {
                type: Object,
                default: function () { return DefaultTheme$1; }
            },

            name: {
                type: String
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

        methods: {
            getControl: function getControl(h) {
                var this$1$1 = this;

                var children = this.data.map(function (ref) {
                    var id = ref.id;
                    var label = ref.label;
                    var disabled = ref.disabled;
                    var value = ref.value;

                    return h(ChildComponent, {
                        props: {
                            modelValue: this$1$1.modelValue,
                            id: id,
                            label: label,
                            name: this$1$1.name,
                            disabled: disabled,
                            value: value
                        },
                        on: {
                            change: function (val) { return this$1$1.$emit('change', val); }
                        }
                    });
                });

                return h('div', children);
            }
        }
    };
}var NAME$f = 'CRadioGroup';
var TYPE$2 = 'radio';

var CRadioGroup = Object.assign({}, {name: NAME$f},

    lodash__default['default'].merge(radioCheckboxGroup(TYPE$2), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    }));var NAME$e = 'CCheckbox';
var TYPE$1 = 'checkbox';

var props$4 = {
    modelValue: {
        type: [Array, Boolean, String, Number],
        default: null
    },

    trueValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$e, 'trueValue'); }
    },

    falseValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$e, 'falseValue'); }
    },

    error: {
        type: Boolean,
        default: false
    }
};

var CCheckbox = Object.assign({}, {name: NAME$e},

    lodash__default['default'].merge(radioCheckbox(TYPE$1), {
        props: props$4
    }));var NAME$d = 'CCheckboxGroup';
var TYPE = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$d},

    lodash__default['default'].merge(radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: Array,
                default: function () { return []; }
            }
        }
    }));var NAME$c = 'CStar';

var CStar = {
    name: NAME$c,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$3; }
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

    data: function data() {
        return {
            starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
            isStarActive: true
        };
    },

    model: {
        prop: 'gradeModel',
        event: 'starSelected'
    },

    computed: {
        starPointsToString: function starPointsToString() {
            return this.starPoints.join(',');
        },

        gradeId: function gradeId() {
            return ("url(#" + (this.id) + (this.starId) + ")");
        },

        starFill: function starFill() {
            return ((this.fill) + "%");
        },

        starSize: function starSize() {
            return ((this.size / 16) + "rem");
        }
    },

    methods: {
        mouseMoving: function mouseMoving(e) {
            if (e.touchAction !== 'undefined') {
                this.$emit('starMouseMove', {
                    event: e,
                    position: this.getPosition(e),
                    id: this.starId
                });
            }
        },

        touchStart: function touchStart() {
            var this$1$1 = this;

            this.$nextTick(function () {
                this$1$1.isStarActive = true;
            });
        },

        touchEnd: function touchEnd() {
            var this$1$1 = this;

            this.$nextTick(function () {
                this$1$1.isStarActive = false;
            });
        },

        getPosition: function getPosition(e) {
            var starWidth = (92 / 100) * this.size;
            var offset = Math.max(e.offsetX, 1);
            var position = Math.round((100 / starWidth) * offset);

            return Math.min(position, 100);
        },

        selected: function selected(e) {
            this.$emit('starSelected', {
                id: this.starId,
                position: this.getPosition(e)
            });
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this.theme;
        var base = ref.base;
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
                    mousemove: function (e) {
                        this$1$1.mouseMoving(e);
                    },
                    click: function (e) {
                        this$1$1.selected(e);
                    },
                    touchstart: function () {
                        this$1$1.touchStart();
                    },
                    touchend: function () {
                        this$1$1.touchEnd();
                    }
                }
            },
            [
                h(
                    'linearGradient',
                    {
                        attrs: {
                            id: ("" + (this.id) + (this.starId)),
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
};var NAME$b = 'CRating';
var SCALE_DEFAULT = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 }
];

var CRating = {
    name: NAME$b,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    components: {
        CStar: CStar
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$4; }
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

    data: function data() {
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
        computedLabel: function computedLabel() {
            var this$1$1 = this;

            return this.scaleComputed.find(function (item) { return item.value === this$1$1.currentRating; });
        },

        maxRating: function maxRating() {
            return this.scale.length || this.scale;
        },

        roundedRating: function roundedRating() {
            var inv = 1.0 / this.increment;
            return Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv);
        },

        activeColors: function activeColors() {
            if (Array.isArray(this.activeColor)) {
                return this.padColors(
                    this.activeColor,
                    this.maxRating,
                    this.activeColor.slice(-1)[0]
                );
            }
            return new Array(this.maxRating).fill(this.activeColor);
        },

        currentActiveColor: function currentActiveColor() {
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

    created: function created() {
        this.createStars();
    },

    methods: {
        setRating: function setRating(e, persist) {
            if (!this.readOnly) {
                var position = e.position / 100;
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

        resetRating: function resetRating() {
            if (!this.readOnly) {
                this.currentRating = this.selectedRating;
                this.createStars(this.isSelected);
            }
        },

        createStars: function createStars(round, applyFill) {
            if ( round === void 0 ) round = true;
            if ( applyFill === void 0 ) applyFill = true;

            this.currentRating = round ? this.roundedRating : this.currentRating;
            for (var i = 0; i < this.maxRating; i++) {
                var level = 0;
                if (i < this.currentRating) {
                    level = this.currentRating - i > 1 ? 100 : (this.currentRating - i) * 100;
                }
                if (applyFill) {
                    this.fillLevel[i] = Math.round(level);
                }
            }
        },

        padColors: function padColors(array, minLength, fillValue) {
            return Object.assign(new Array(minLength).fill(fillValue), array);
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this.theme;
        var starsWrapper = ref.starsWrapper;
        var labelWrapper = ref.labelWrapper;
        ref.stateCursorPointer;
        var stars = this.scaleComputed.map(function (ref, i) {
            var value = ref.value;

            if (typeof value === 'number' && value <= this$1$1.maxRating && value >= 0) {
                return h('CStar', {
                    props: {
                        fill: this$1$1.fillLevel[i],
                        starId: i,
                        activeColor: this$1$1.currentActiveColor,
                        inactiveColor: this$1$1.inactiveColor,
                        size: this$1$1.starSize,
                        gradeModel: this$1$1.gradeModel,
                        id: this$1$1.id
                    },
                    on: {
                        starSelected: function (e) { return this$1$1.setRating(e, true); },
                        starMouseMove: function (e) { return this$1$1.setRating(e); }
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
                        mouseleave: function () { return this$1$1.resetRating(); }
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
                          ? (" - " + (this.computedLabel.label))
                          : (" - " + (this.rating))
                  )
                : null
        ]);
    }
};var NAME$a = 'CLink';
var LINK_TAG = 'a';
var SPAN_TAG = 'span';
var validVariants$2 = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

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

var createThemeMap$3 = function (ref) {
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
            default: function () { return getComponentConfig(NAME$a, 'target'); }
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
    name: NAME$a,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: Object.assign({}, createProps(),

        {theme: {
            type: Object,
            default: function () { return DefaultTheme$k; }
        },

        button: {
            type: Boolean,
            default: false
        },

        variant: {
            type: String,
            default: function () { return getComponentConfig(NAME$a, 'variant'); },
            validator: function (value) { return validVariants$2.includes(value); }
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
        var this$1$1 = this;

        var computedClass = function () {
            if (this$1$1.button) { return; }

            var ref = this$1$1.theme;
            var base = ref.base;
            var stateDisable = ref.stateDisable;
            var inlineType = ref.inlineType;
            var inlineBlockType = ref.inlineBlockType;
            var classes = [base];

            classes.push(this$1$1.inline ? inlineType : inlineBlockType);

            if (this$1$1.disabled) {
                classes.push(stateDisable);
            }

            var ref$1 = createThemeMap$3(this$1$1.theme);
            var variants = ref$1.variants;
            classes.push(getHashMapValue(variants, this$1$1.variant));

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
};var NAME$9 = 'CButton';
var validVariants$1 = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
var validSizes$1 = ['lg', 'md', 'sm'];
var validTagNames = ['button', 'a'];
var validTypes = ['submit', 'reset'];

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

var createThemeMap$2 = function (ref) {
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
        default: function () { return DefaultTheme$l; }
    },

    disabled: {
        type: Boolean,
        default: false
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$9, 'tag'); },
        validator: function (value) { return validTagNames.includes(value); }
    },

    label: {
        type: String,
        default: null
    },

    type: {
        type: String,
        default: null,
        validator: function (value) { return validTypes.includes(value); }
    },

    variant: {
        type: String,
        default: function () { return getComponentConfig(NAME$9, 'variant'); },
        validator: function (value) { return validVariants$1.includes(value); }
    },

    size: {
        type: String,
        default: function () { return getComponentConfig(NAME$9, 'size'); },
        validator: function (value) { return validSizes$1.includes(value); }
    },

    block: {
        type: Boolean,
        default: false
    }});

var currentClass$4 = function (ref) {
    var disabled = ref.disabled;
    var size = ref.size;
    var variant = ref.variant;
    var block = ref.block;
    var theme = ref.theme;

    var base = theme.base;
    var stateDisable = theme.stateDisable;
    var displayBlock = theme.displayBlock;
    var ref$1 = createThemeMap$2(theme);
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
    name: NAME$9,

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
            class: currentClass$4(props),
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
};var NAME$8 = 'CTabs';

var CTabs = {
    name: NAME$8,

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
            default: function () { return getComponentConfig(NAME$8, 'vertical'); }
        },

        justify: {
            type: String,
            default: function () { return getComponentConfig(NAME$8, 'justify'); },
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
};var NAME$7 = 'CTab';

var CTab = {
    name: NAME$7,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$f; }
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
        var this$1$1 = this;

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
                            return this$1$1.$emit('onClick', this$1$1.name);
                        }
                    },
                    staticClass: base,
                    class: [stateDefault, this.isActive ? stateActive : null]
                },
                this.label ? this.label : this.$slots.default
            )
        ]);
    }
};var NAME$6 = 'CTabPanels';

var CTabPanels = {
    name: NAME$6,

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
            default: function () { return getComponentConfig(NAME$6, 'lazy'); }
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
};var NAME$5 = 'CTabPanel';

var CTabPanel = {
    name: NAME$5,

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
            default: function () { return getComponentConfig(NAME$5, 'tag'); }
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
};var NAME$4 = 'CBadge';
var validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
var validSizes = ['lg', 'md', 'sm'];

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

var props$2 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$7; }
    },

    label: {
        type: String,
        default: null
    },

    variant: {
        type: String,
        default: function () { return getComponentConfig(NAME$4, 'variant'); },
        validator: function (value) { return validVariants.includes(value); }
    },

    size: {
        type: String,
        default: function () { return getComponentConfig(NAME$4, 'size'); },
        validator: function (value) { return validSizes.includes(value); }
    }
};

var currentClass$3 = function (ref) {
    var size = ref.size;
    var variant = ref.variant;
    var theme = ref.theme;

    var base = theme.base;
    var ref$1 = createThemeMap$1(theme);
    var variants = ref$1.variants;
    var sizes = ref$1.sizes;
    var classes = [base];

    classes.push(getHashMapValue(variants, variant));

    // TODO: Unit
    classes.push(getHashMapValue(sizes, size));

    return classes;
};

var CBadge = {
    name: NAME$4,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$2,

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children;

        var componentData = {
            class: currentClass$3(props)
        };

        return h('span', vueFunctionalDataMerge.mergeData(data, componentData), props.label ? props.label : children);
    }
};var base = 'w-full object-cover';

var DefaultTheme = {
    base: base
};var NAME$3 = 'CPicture';

var generateProps$2 = function () {
    var screens = getComponentConfig('common', 'screens');
    var breakpoints = Object.keys(screens);

    var breakpointSources = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = stringProp();
        return prop;
    }, Object.create(null));

    return Object.assign({}, {theme: {
            type: Object,
            default: function () { return DefaultTheme; }
        },

        /**
          [
             { type: '', lg: null, md: null, sm: null }
          ]
         */
        formats: {
            type: Array,
            required: false
        },

        src: stringProp()},

        breakpointSources);
};

var createSources = function (h, screens, props) {
    var formats = props.formats;
    if (formats == null || formats.length == null) { return []; }

    return formats.map(function (format) {
        var sizes = mapSizesAndScreens(screens, format);
        var type = format.type;

        return h('source', {
            attrs: {
                type: ("image/" + type),
                srcset: getSrcSet(sizes)
            }
        });
    });
};

var mapSizesAndScreens = function (screens, sizes) {
    var breakpoints = Object.keys(screens);

    return breakpoints
        .filter(function (breakpointKey) { return sizes[breakpointKey]; })
        .map(function (breakpointKey) { return ({
            breakpoint: breakpointKey,
            breakpointWidth: screens[breakpointKey].replace('px', ''),
            src: sizes[breakpointKey]
        }); });
};

/**
 * get srcset attribute
 * @param mappedSizes: { breakpointWidth, src }
 * @returns string
 */
var getSrcSet = function (mappedSizes) {
    return mappedSizes
        .map(function (ref) {
            var breakpointWidth = ref.breakpointWidth;
            var src = ref.src;

            return (src + " " + breakpointWidth + "w");
        })
        .join(', ');
};

var currentClass$2 = function (ref) {
    var theme = ref.theme;

    return theme.base;
};

var CPicture = {
    name: NAME$3,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        this.props = generateProps$2();

        return this.props;
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var parent = ref.parent;

        var screens = parent.$ortoUIConfig.getConfigValue('common.screens');

        var mappedSizes = mapSizesAndScreens(screens, props);
        var srcset = getSrcSet(mappedSizes) || null;

        var imgData = {
            class: currentClass$2(props),
            attrs: {
                src: props.src,
                srcset: srcset
            }
        };

        var sources = createSources(h, screens, props);

        return h('picture', sources.concat( [h('img', vueFunctionalDataMerge.mergeData(data, imgData))]));
    }
};var NAME$2 = 'CListToggle';

var props$1 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$5; }
    },

    limit: {
        type: Number,
        default: function () { return getComponentConfig(NAME$2, 'limit'); }
    }
};

var CListToggle = {
    name: NAME$2,

    data: function data() {
        return {
            childCount: 0,
            innerLimit: this.limit
        };
    },

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$1,

    created: function created() {
        var this$1$1 = this;

        // TODO: optimize
        this.$nextTick().then(function () {
            this$1$1.childCount = this$1$1.$scopedSlots.default().length;
        });
    },

    methods: {
        show: function show() {
            this.innerLimit = this.childCount;
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var getShow = function (children) {
            var el = children[0];
            el.data = vueFunctionalDataMerge.mergeData(el.data, {
                on: {
                    click: this$1$1.show
                }
            });
            return el;
        };

        var getWrap = function (children) {
            var el = children[0];

            //
            el.children = this$1$1.innerLimit
                ? this$1$1.$scopedSlots.default().slice(0, this$1$1.innerLimit)
                : this$1$1.$scopedSlots.default();

            //
            if (this$1$1.childCount > this$1$1.innerLimit && this$1$1.$scopedSlots.show) {
                el.children.push(getShow(this$1$1.$scopedSlots.show()));
            }

            return el;
        };

        // TODO: проверка + throw err
        return getWrap(this.$scopedSlots.wrap());
    }
};var props = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$b; }
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

var currentClass$1 = function (ref) {
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

    props: props,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$1(props)
        };

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var OFFSET_PROP_NAME = 'offset';
var NAME$1 = 'CCol';

var generateProps$1 = function () {
    var obj;

    var screens = getComponentConfig('common', 'screens');
    var breakpoints = Object.keys(screens);

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
            default: function () { return DefaultTheme$9; }
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
    name: NAME$1,

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
        var data = ref.data;
        var props = ref.props;
        var parent = ref.parent;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;
        var screens = parent.$ortoUIConfig.getConfigValue('common.screens');
        var breakpoints = Object.keys(screens);

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
};var NAME = 'CRow';
var VALID_GUTTERS = ['none', 'sm', 'md', 'lg', 'xl'];
var GUTTERS_PROP_NAME = 'gutters';
var COLS_PROP_NAME = 'cols';

var getBreakpoint = function (key, name) { return key.replace(name, '').toLowerCase(); };
var wPrefix = 'w-';
var offsetPrefix = 'ml-';

var createThemeMap = function (ref) {
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

var generateProps = function () {
    var obj, obj$1;

    var screens = getComponentConfig('common', 'screens');
    var breakpoints = Object.keys(screens);

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
            default: function () { return DefaultTheme$a; }
        }
    }, obj[COLS_PROP_NAME] = {
            type: Number,
            default: function () { return getComponentConfig(NAME, COLS_PROP_NAME); }
        }, obj ),

        breakpointCols,

        ( obj$1 = {}, obj$1[GUTTERS_PROP_NAME] = {
            type: String,
            default: function () { return getComponentConfig(NAME, 'gutters'); },
            validator: function (value) { return VALID_GUTTERS.includes(value); }
        }, obj$1 ),

        breakpointGutters);
};

//
var currentClass = function (props) {
    var gutter = props.gutters;
    var theme = props.theme;
    var base = theme.base;
    var ref = createThemeMap(theme);
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
            var ref =
                getHashMapValue(gutters, props[key]);
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
    name: NAME,

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
        var children = ref.children; if ( children === void 0 ) children = [];

        var ref$1 = currentClass(props);
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
    CFormField: CFormField,
    CFormInput: CFormInput,
    CFormSelectCustom: CFormSelectCustom,
    CRadio: CRadio,
    CRadioGroup: CRadioGroup,
    CCheckbox: CCheckbox,
    CCheckboxGroup: CCheckboxGroup,
    CRating: CRating,
    CTabs: CTabs,
    CTab: CTab,
    CTabPanels: CTabPanels,
    CTabPanel: CTabPanel,
    CList: CList,
    CListItem: CListItem,
    CContainer: CContainer,
    CRow: CRow,
    CCol: CCol,
    CDropdown: CDropdown,
    CPicture: CPicture,
    CListToggle: CListToggle
};

var extendComponent = function (Vue, CurrentTheme, componentName) {
    // TODO: if props is undefined
    var ref = components[componentName];
    var props = ref.props; if ( props === void 0 ) props = {};

    var themeDefaultSettings = props.theme ? props.theme.default() : {};
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

    ConfigPlugin(config, Vue);

    var CurrentTheme = Object.assign({}, DefaultTheme$2,
        theme);

    var componentsToRegister = injectComponentList || Object.keys(components);

    componentsToRegister.forEach(function (componentName) {
        Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
    });

    Vue.use(vClickOutside__namespace);
};

var index = {
    install: install
};exports.CButton=CButton;exports.CCheckbox=CCheckbox;exports.CCheckboxGroup=CCheckboxGroup;exports.CCol=CCol;exports.CContainer=CContainer;exports.CDropdown=CDropdown;exports.CForm=CForm;exports.CFormField=CFormField;exports.CFormInput=CFormInput;exports.CFormPanel=CFormPanel;exports.CFormSelectCustom=CFormSelectCustom;exports.CLink=CLink;exports.CList=CList;exports.CListItem=CListItem;exports.CListToggle=CListToggle;exports.CPicture=CPicture;exports.CRadio=CRadio;exports.CRadioGroup=CRadioGroup;exports.CRating=CRating;exports.CRow=CRow;exports.CTab=CTab;exports.CTabPanel=CTabPanel;exports.CTabPanels=CTabPanels;exports.CTabs=CTabs;exports.default=index;//# sourceMappingURL=orto-ui.ssr.js.map
