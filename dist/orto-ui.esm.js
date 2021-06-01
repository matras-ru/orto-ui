import * as vClickOutside from 'v-click-outside-x';
import Vue from 'vue';
import { mergeData } from 'vue-functional-data-merge';

var base$d =
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
};

var base$c = 'no-underline cursor-pointer';
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
};

var outerWrapBase = 'block px-0-4';
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
};

var controlWrap = 'relative';
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
    sizeMdBase: sizeMdBase});

var base$a = 'mb-1-4';

var DefaultTheme$h = {
    base: base$a
};

var wrapperBase$1 = 'flex flex-wrap mb-0-4';

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
};

var base$9 = 'outline-none select-none font-semibold text-lg uppercase px-1-5 py-0-7';
var stateDefault$1 = '';
var stateActive$1 = 'text-secondary-200 border-b-4 border-secondary-200';

var DefaultTheme$f = {
    base: base$9,
    stateDefault: stateDefault$1,
    stateActive: stateActive$1
};

var base$8 = '';

var DefaultTheme$e = {
    base: base$8
};

var base$7 = '';
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
};

var base$6 = '';
var DISPLAY_LIST_ITEM = 'list-item';
var DISPLAY_INLINE = 'inline-block';
var DISPLAY_BLOCK = 'block';

var DefaultTheme$c = {
    base: base$6,
    DISPLAY_LIST_ITEM: DISPLAY_LIST_ITEM,
    DISPLAY_INLINE: DISPLAY_INLINE,
    DISPLAY_BLOCK: DISPLAY_BLOCK
};

var base$5 = 'container';
var modeFluid = 'max-w-none';

var DefaultTheme$b = {
    base: base$5,
    modeFluid: modeFluid
};

var base$4 = 'flex flex-wrap';

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
};

var base$3 = 'max-w-full';

var DefaultTheme$9 = {
    base: base$3
};

var panelHeaderBase = 'text-xl font-semibold mb-0-8';
var panelWrapperBase = 'mb-2-2';

var CFormPanel$1 = {
    panelHeaderBase: panelHeaderBase,
    panelWrapperBase: panelWrapperBase
};

var inputBase = 'cursor-pointer';
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
};

var base$2 = 'rounded-lg font-bold inline-block border-2 leading-none align-middle';

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
};

var wrapperBase = 'relative';
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
};

var DefaultTheme$5 = {};

var stateDefault = '#dedede';
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
};

var base$1 = 'inline-block';

var DefaultTheme$3 = {
    base: base$1
};

var DefaultTheme$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CButton: DefaultTheme$l,
    CLink: DefaultTheme$k,
    CFormInput: DefaultTheme$i,
    CForm: DefaultTheme$h,
    CCheckbox: DefaultTheme$g,
    CRadio: DefaultTheme$g,
    CTab: DefaultTheme$f,
    CTabPanel: DefaultTheme$e,
    CList: DefaultTheme$d,
    CListItem: DefaultTheme$c,
    CContainer: DefaultTheme$b,
    CRow: DefaultTheme$a,
    CCol: DefaultTheme$9,
    CFormField: DefaultTheme$j,
    CFormPanel: CFormPanel$1,
    CFormSelectCustom: DefaultTheme$8,
    CBadge: DefaultTheme$7,
    CDropdown: DefaultTheme$6,
    CListToggle: DefaultTheme$5,
    CRating: DefaultTheme$4,
    CStar: DefaultTheme$3
});

var justifyCenter = 'justify-center';
var justifyBetween = 'justify-between';
var justifyStart = 'justify-start';
var justifyEnd = 'justify-end';

var noop = function () {};

var hasOwnProperty$9 = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };

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
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$a.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$9.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e$1) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$8 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$5.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var DEFAULTS = {
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
        if (!hasOwnProperty$9(DEFAULTS, cmpName)) {
            console.warn(("config: unknown config property \"" + cmpName + "\""));
            return;
        }

        var cmpConfig = config[cmpName];

        // Component prop defaults
        var props = Object.getOwnPropertyNames(cmpConfig);
        props.forEach(function (prop) {
            if (!hasOwnProperty$9(DEFAULTS[cmpName], prop)) {
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
    return get_1(this.$_config, key, get_1(DEFAULTS, key));
};

Object.defineProperties( Config.prototype, prototypeAccessors );
Object.defineProperties( Config, staticAccessors );

var getConfigValue = function (key) {
    return Vue.prototype[PROP_NAME]
        ? Vue.prototype[PROP_NAME].getConfigValue(key)
        : get_1(DEFAULTS, key);
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

var NAME$o = 'CForm';

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

        return h('form', mergeData(data, componentData), children);
    }
};

var FormPanel = {
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
};

var NAME$n = 'CFormPanel';

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
};

var NAME$m = 'CFormField';
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

            var sizes = createSizeMap$2(this$1.theme);

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
};

// TODO: support attr - inputmode

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
                                if (this$1.readonly) { return; }
                                this$1.focused = true;
                                this$1.$emit('focus');
                            },

                            blur: function () {
                                this$1.focused = false;
                                this$1.$emit('blur');
                            },

                            input: function (e) { return this$1.onUpdate({ e: e, type: 'input' }); },

                            change: function (e) { return this$1.onUpdate({ e: e, type: 'change' }); }},

                            (this.isNumeric && {
                                paste: function (e) {
                                    this$1.paste(e);
                                    this$1.$emit('paste');
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
};

var CFormField = {
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
};

var validVariants$3 = ['primary', 'secondary'];
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
};

var validDirection = ['vertical', 'horizontal'];

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

        return h(props.tag, mergeData(data, componentData), children);
    }
};

var NAME$i = 'CListItem';

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

        return h(props.tag, mergeData(data, componentData), children);
    }
};

var validSizes$2 = ['sm', 'md'];

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
        var this$1 = this;

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
                    attrs: this$1.$attrs,
                    on: {
                        change: function (e) {
                            var target = e.target;

                            var selectedVal = Array.from(target.options)
                                .filter(function (option) { return option.selected; })
                                .map(function (option) { return ('_value' in option ? option._value : option.value); });

                            this$1.$emit('change', selectedVal[0]);
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

                    var computedLabel = this$1.$scopedSlots.default
                        ? this$1.$scopedSlots.default(option)[0].text
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
                                name: this$1.name,
                                labelBgColor: this$1.labelBgColor,
                                readonly: true,
                                error: error,
                                label: label,
                                placeholder: placeholder,
                                size: size,
                                modelValue: selectedOption
                                    ? this$1.$scopedSlots.selected
                                        ? this$1.$scopedSlots.selected(selectedOption)[0].text
                                        : selectedOption[optionLabel]
                                    : null
                            },
                            ref: 'holder',
                            staticClass: inputBase,
                            scopedSlots: {
                                append: function () { return h('i', { class: [iconClass, inputIconClass] }); }
                            },
                            attrs: this$1.$attrs,
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
                        this$1.$nextTick().then(function () {
                            if (isShow && this$1.$refs.selected) {
                                this$1.$refs.selected.scrollIntoView({
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
                                                    this$1.$emit('change', value);
                                                    close();
                                                }
                                            }}),
                                        this$1.$scopedSlots.default
                                            ? this$1.$scopedSlots.default(option)
                                            : label
                                    );
                                })
                            ]
                        );
                    }
                }))
        });
    }
};

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$1;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var objectTag$1 = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$3 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$1) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack);
    if (isObject_1(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

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
}

var NAME$g = 'CRadio';
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

    merge_1(radioCheckbox(TYPE$3), {
        props: props$5
    }));

var DefaultTheme$1 = Object.assign({}, CFormPanel$1);

// TODO: add limit...

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
                var this$1 = this;

                var children = this.data.map(function (ref) {
                    var id = ref.id;
                    var label = ref.label;
                    var disabled = ref.disabled;
                    var value = ref.value;

                    return h(ChildComponent, {
                        props: {
                            modelValue: this$1.modelValue,
                            id: id,
                            label: label,
                            name: this$1.name,
                            disabled: disabled,
                            value: value
                        },
                        on: {
                            change: function (val) { return this$1.$emit('change', val); }
                        }
                    });
                });

                return h('div', children);
            }
        }
    };
}

var NAME$f = 'CRadioGroup';
var TYPE$2 = 'radio';

var CRadioGroup = Object.assign({}, {name: NAME$f},

    merge_1(radioCheckboxGroup(TYPE$2), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    }));

var NAME$e = 'CCheckbox';
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

    merge_1(radioCheckbox(TYPE$1), {
        props: props$4
    }));

var NAME$d = 'CCheckboxGroup';
var TYPE = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$d},

    merge_1(radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: Array,
                default: function () { return []; }
            }
        }
    }));

var NAME$c = 'CStar';

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
            var this$1 = this;

            this.$nextTick(function () {
                this$1.isStarActive = true;
            });
        },

        touchEnd: function touchEnd() {
            var this$1 = this;

            this.$nextTick(function () {
                this$1.isStarActive = false;
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
        var this$1 = this;

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
                        this$1.mouseMoving(e);
                    },
                    click: function (e) {
                        this$1.selected(e);
                    },
                    touchstart: function () {
                        this$1.touchStart();
                    },
                    touchend: function () {
                        this$1.touchEnd();
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
};

var NAME$b = 'CRating';
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
            var this$1 = this;

            return this.scaleComputed.find(function (item) { return item.value === this$1.currentRating; });
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
        var this$1 = this;

        var ref = this.theme;
        var starsWrapper = ref.starsWrapper;
        var labelWrapper = ref.labelWrapper;
        ref.stateCursorPointer;
        var stars = this.scaleComputed.map(function (ref, i) {
            var value = ref.value;

            if (typeof value === 'number' && value <= this$1.maxRating && value >= 0) {
                return h('CStar', {
                    props: {
                        fill: this$1.fillLevel[i],
                        starId: i,
                        activeColor: this$1.currentActiveColor,
                        inactiveColor: this$1.inactiveColor,
                        size: this$1.starSize,
                        gradeModel: this$1.gradeModel,
                        id: this$1.id
                    },
                    on: {
                        starSelected: function (e) { return this$1.setRating(e, true); },
                        starMouseMove: function (e) { return this$1.setRating(e); }
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
                        mouseleave: function () { return this$1.resetRating(); }
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
};

var NAME$a = 'CLink';
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

            var ref$1 = createThemeMap$3(this$1.theme);
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
};

var NAME$9 = 'CButton';
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
            mergeData(data, componentData),
            props.label ? props.label : children
        );
    }
};

var NAME$8 = 'CTabs';

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

            mergeData(data, {
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
};

var NAME$7 = 'CTab';

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
};

var NAME$6 = 'CTabPanels';

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

var NAME$5 = 'CTabPanel';

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
        return h(props.tag, mergeData(data, componentData), [children]);
    }
};

var NAME$4 = 'CBadge';
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

        return h('span', mergeData(data, componentData), props.label ? props.label : children);
    }
};

var base = 'w-full object-cover';

var DefaultTheme = {
    base: base
};

var NAME$3 = 'CPicture';

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

        return h('picture', sources.concat( [h('img', mergeData(data, imgData))]));
    }
};

var NAME$2 = 'CListToggle';

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
        var this$1 = this;

        // TODO: optimize
        this.$nextTick().then(function () {
            this$1.childCount = this$1.$scopedSlots.default().length;
        });
    },

    methods: {
        show: function show() {
            this.innerLimit = this.childCount;
        }
    },

    render: function render(h) {
        var this$1 = this;

        var getShow = function (children) {
            var el = children[0];
            el.data = mergeData(el.data, {
                on: {
                    click: this$1.show
                }
            });
            return el;
        };

        var getWrap = function (children) {
            var el = children[0];

            //
            el.children = this$1.innerLimit
                ? this$1.$scopedSlots.default().slice(0, this$1.innerLimit)
                : this$1.$scopedSlots.default();

            //
            if (this$1.childCount > this$1.innerLimit && this$1.$scopedSlots.show) {
                el.children.push(getShow(this$1.$scopedSlots.show()));
            }

            return el;
        };

        // TODO: проверка + throw err
        return getWrap(this.$scopedSlots.wrap());
    }
};

var props = {
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

        return h('div', mergeData(data, componentData), children);
    }
};

var OFFSET_PROP_NAME = 'offset';
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

        return h('div', mergeData(data, componentData), children);
    }
};

var NAME = 'CRow';
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

    Vue.use(vClickOutside);
};

var index = {
    install: install
};

export default index;
export { CButton, CCheckbox, CCheckboxGroup, CCol, CContainer, CDropdown, CForm, CFormField, CFormInput, CFormPanel, CFormSelectCustom, CLink, CList, CListItem, CListToggle, CPicture, CRadio, CRadioGroup, CRating, CRow, CTab, CTabPanel, CTabPanels, CTabs };
