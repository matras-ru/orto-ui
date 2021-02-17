'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vClickOutside=require('v-click-outside-x'),Vue=require('vue'),vueFunctionalDataMerge=require('vue-functional-data-merge'),merge=require('lodash.merge');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k];}});}});}n['default']=e;return Object.freeze(n);}var vClickOutside__namespace=/*#__PURE__*/_interopNamespace(vClickOutside);var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);var merge__default=/*#__PURE__*/_interopDefaultLegacy(merge);var base =
    'inline-flex items-center justify-center rounded-lg uppercase font-semibold text-black-100 duration-250 ease-in-out border-3 focus:outline-none';

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

var hintBase = 'text-tertiary-300';
var errorBase = 'text-danger';

var bottomPlaceholderBase = 'text-sm mt-0-2';

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
    labelSizeMd: labelSizeMd,

    hintBase: hintBase,
    errorBase: errorBase,

    bottomPlaceholderBase: bottomPlaceholderBase
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
};var base$6 = '';
var directionColumn = 'flex-col';
var directionHorizontal = 'flex-row';
var DISPLAY_FLEX = 'flex';
var DISPLAY_BLOCK = 'block';

var DefaultTheme$8 = {
    base: base$6,
    directionColumn: directionColumn,
    directionHorizontal: directionHorizontal,
    DISPLAY_FLEX: DISPLAY_FLEX,
    DISPLAY_BLOCK: DISPLAY_BLOCK
};var base$7 = '';
var DISPLAY_INLINE = 'inline-block';
var DISPLAY_BLOCK$1 = 'block';

var DefaultTheme$9 = {
    base: base$7,
    DISPLAY_INLINE: DISPLAY_INLINE,
    DISPLAY_BLOCK: DISPLAY_BLOCK$1
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

var listBase = 'overscroll-contain overflow-y-auto max-h-18-6';

var fakeSelectBase = 'absolute w-full h-full left-0 top-0 opacity-0 z-1 cursor-pointer';

var DefaultTheme$e = {
    inputBase: inputBase$1,
    inputIconBase: inputIconBase,
    inputIconSizeMd: inputIconSizeMd,
    inputIconSizeSm: inputIconSizeSm,

    optionBase: optionBase,
    optionStateDefault: optionStateDefault,
    optionStateActive: optionStateActive,

    listBase: listBase,

    fakeSelectBase: fakeSelectBase
};var base$b = 'rounded-lg font-bold inline-block border-2 leading-none align-middle';

var variantPrimary$2 = 'bg-primary-100 border-primary-100 text-white';
var variantSecondary$2 = 'border-secondary-200 text-secondary-200';
var variantTertiary$2 = 'text-danger border-danger';
var variantQuaternary$2 = '';
var variantQuinary$2 = '';

// TODO: Unit
var sizeSm$1 = 'text-sm px-0-4 py-0-2';
var sizeMd$1 = 'text-base px-0-6 py-0-3';
var sizeLg$1 = 'text-lg px-0-8 py-0-4';

var DefaultTheme$f = {
    base: base$b,

    variantPrimary: variantPrimary$2,
    variantSecondary: variantSecondary$2,
    variantTertiary: variantTertiary$2,
    variantQuaternary: variantQuaternary$2,
    variantQuinary: variantQuinary$2,
    sizeSm: sizeSm$1,
    sizeMd: sizeMd$1,
    sizeLg: sizeLg$1
};var wrapperBase$2 = 'relative';
var dropdownBase = 'absolute z-50 top-full min-w-full mt-0-4 bg-white overflow-hidden';
var dropdownVariantPrimary = 'shadow-secondary rounded';
var dropdownVariantSecondary = 'shadow-secondary rounded-lg';
var dropdownPlacementLeft = 'left-0';
var dropdownPlacementRight = 'right-0';

var DefaultTheme$g = {
    wrapperBase: wrapperBase$2,
    dropdownBase: dropdownBase,
    dropdownVariantPrimary: dropdownVariantPrimary,
    dropdownVariantSecondary: dropdownVariantSecondary,
    dropdownPlacementLeft: dropdownPlacementLeft,
    dropdownPlacementRight: dropdownPlacementRight
};var DefaultTheme$h = {};var DefaultTheme$i=/*#__PURE__*/Object.freeze({__proto__:null,CButton: DefaultTheme,CLink: DefaultTheme$1,CFormInput: DefaultTheme$3,CForm: DefaultTheme$4,CCheckbox: DefaultTheme$5,CRadio: DefaultTheme$5,CTab: DefaultTheme$6,CTabPanel: DefaultTheme$7,CList: DefaultTheme$8,CListItem: DefaultTheme$9,CContainer: DefaultTheme$a,CRow: DefaultTheme$b,CCol: DefaultTheme$c,CFormField: DefaultTheme$2,CFormPanel: DefaultTheme$d,CFormSelectCustom: DefaultTheme$e,CBadge: DefaultTheme$f,CDropdown: DefaultTheme$g,CListToggle: DefaultTheme$h});var justifyCenter = 'justify-center';
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
};var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

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
  return this.has(key) && delete this.__data__[key];
}

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
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

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
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

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
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

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
  return assocIndexOf(this.__data__, key) > -1;
}

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
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

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
  return getMapData(this, key)['delete'](key);
}

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
  return getMapData(this, key).get(key);
}

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
  return getMapData(this, key).has(key);
}

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
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

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
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

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

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e$1) {}
  }
  return '';
}

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
 * method interface of `delete`, `get`, `has`, and `set`.
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
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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
  return value == null ? '' : baseToString(value);
}

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
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var lodash_get = get;var DEFAULTS = {
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
    }
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
    return lodash_get(this.$_config, key, lodash_get(DEFAULTS, key));
};

Object.defineProperties( Config.prototype, prototypeAccessors );
Object.defineProperties( Config, staticAccessors );

var getConfigValue = function (key) {
    return Vue__default['default'].prototype[PROP_NAME]
        ? Vue__default['default'].prototype[PROP_NAME].getConfigValue(key)
        : lodash_get(DEFAULTS, key);
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
            'div',
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

                this.open ? h('div', [this.$slots.default]) : null
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
            'div', // outer wrap
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

var REGEXP_NUMBER = /^\d+$/;

var CFormInput = {
    name: NAME$3,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    inheritAttrs: false,

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
            default: function () { return getComponentConfig(NAME$4, 'optionValue'); }
        },

        optionLabel: {
            type: String,
            default: function () { return getComponentConfig(NAME$4, 'optionLabel'); }
        },

        error: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: function (value) { return validSizes$1.includes(value); }
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
                variant: getComponentConfig(NAME$4, 'dropdownVariant')
            },

            scopedSlots: Object.assign({}, {holder: function (ref) {
                        var toggle = ref.toggle;

                        return h('div', [
                        h('CFormInput', {
                            props: Object.assign({}, this$1.$attrs,
                                {readonly: true,
                                error: error,
                                label: label,
                                placeholder: placeholder,
                                size: size,
                                modelValue: selectedOption
                                    ? this$1.$scopedSlots.selected
                                        ? this$1.$scopedSlots.selected(selectedOption)[0].text
                                        : selectedOption[optionLabel]
                                    : null}),
                            ref: 'holder',
                            staticClass: inputBase,
                            scopedSlots: {
                                append: function () { return h('i', { class: iconClass }); }
                            },
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
                                        Object.assign({}, {class: cumputeOptionClasses(isSelected)},
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

    merge__default['default'](radioCheckbox(TYPE), {
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

    merge__default['default'](radioCheckboxGroup(TYPE$1), {
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

    merge__default['default'](radioCheckbox(TYPE$2), {
        props: props$2
    }));var NAME$8 = 'CCheckboxGroup';
var TYPE$3 = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$8},

    merge__default['default'](radioCheckboxGroup(TYPE$3), {
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
    },

    block: {
        type: Boolean,
        default: false
    }
};

var currentClass$1 = function (ref) {
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
    },

    inline: {
        type: Boolean,
        default: function () { return getComponentConfig(NAME$g, 'inline'); }
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
        var DISPLAY_INLINE = ref$1.DISPLAY_INLINE;
        var DISPLAY_BLOCK = ref$1.DISPLAY_BLOCK;

        var componentData = {
            staticClass: base,
            class: [props.inline ? DISPLAY_INLINE : DISPLAY_BLOCK]
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
var validSizes$3 = ['lg', 'md', 'sm'];

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
    },

    size: {
        type: String,
        default: function () { return getComponentConfig(NAME$i, 'size'); },
        validator: function (value) { return validSizes$3.includes(value); }
    }
};

var currentClass$2 = function (ref) {
    var size = ref.size;
    var variant = ref.variant;
    var theme = ref.theme;

    var base = theme.base;
    var ref$1 = createThemeMap$2(theme);
    var variants = ref$1.variants;
    var sizes = ref$1.sizes;
    var classes = [base];

    classes.push(getHashMapValue(variants, variant));

    // TODO: Unit
    classes.push(getHashMapValue(sizes, size));

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
};var base$c = 'w-full object-cover';

var DefaultTheme$j = {
    base: base$c
};/* TODO: MVP

- type
- size
...

*/

var NAME$j = 'CPicture';

var generateProps = function () {
    var screens = getComponentConfig('common', 'screens');
    var breakpoints = Object.keys(screens);

    var breakpointSources = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = stringProp();
        return prop;
    }, Object.create(null));

    return Object.assign({}, {theme: {
            type: Object,
            default: function () { return DefaultTheme$j; }
        },

        // TODO: more types
        type: {
            type: String,
            default: 'jpg'
        },

        lazy: {
            type: Boolean,
            default: false
        },

        src: stringProp()},

        breakpointSources);
};

var createSources = function (h, screens, props) {
    var breakpoints = Object.keys(screens).reverse();

    return breakpoints.map(function (br) {
        if (props[br]) {
            return h('source', {
                attrs: {
                    type: ("image/" + (props.type)),
                    srcset: props[br],
                    media: ("(min-width: " + (screens[br]) + ")")
                }
            });
        }
    });
};

var currentClass$3 = function (ref) {
    var theme = ref.theme;

    var base = theme.base;
    var classes = [base];

    return classes;
};

var CPicture = {
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
        var parent = ref.parent;

        var imgData = {
            class: currentClass$3(props),
            attrs: {
                src: props.src,
                loading: props.lazy ? 'lazy' : null
            }
        };

        var sources = createSources(
            h,
            parent.$ortoUIConfig.getConfigValue('common.screens'),
            props
        );

        return h('picture', sources.concat( [h('img', vueFunctionalDataMerge.mergeData(data, imgData))]));
    }
};var NAME$k = 'CListToggle';

var props$7 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$h; }
    },

    limit: {
        type: Number,
        default: function () { return getComponentConfig(NAME$k, 'limit'); }
    }
};

var CListToggle = {
    name: NAME$k,

    data: function () { return ({
        childCount: 0,
        innerLimit: 0
    }); },

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$7,

    created: function created() {
        var this$1 = this;

        this.innerLimit = this.limit;
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
            el.data = vueFunctionalDataMerge.mergeData(el.data, {
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
};var props$8 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$a; }
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

var currentClass$4 = function (ref) {
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

    props: props$8,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$4(props)
        };

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var OFFSET_PROP_NAME = 'offset';
var NAME$l = 'CCol';

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
    name: NAME$l,

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
};var NAME$m = 'CRow';
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

var generateProps$2 = function () {
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
            default: function () { return DefaultTheme$b; }
        }
    }, obj[COLS_PROP_NAME] = {
            type: Number,
            default: function () { return getComponentConfig(NAME$m, COLS_PROP_NAME); }
        }, obj ),

        breakpointCols,

        ( obj$1 = {}, obj$1[GUTTERS_PROP_NAME] = {
            type: String,
            default: function () { return getComponentConfig(NAME$m, 'gutters'); },
            validator: function (value) { return VALID_GUTTERS.includes(value); }
        }, obj$1 ),

        breakpointGutters);
};

//
var currentClass$5 = function (props) {
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
    name: NAME$m,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps$2());
    },

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children; if ( children === void 0 ) children = [];

        var ref$1 = currentClass$5(props);
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
    CDropdown: CDropdown,
    CPicture: CPicture,
    CListToggle: CListToggle
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

    ConfigPlugin(config, Vue);

    var CurrentTheme = Object.assign({}, DefaultTheme$i,
        theme);

    var componentsToRegister = injectComponentList || Object.keys(components);

    componentsToRegister.forEach(function (componentName) {
        Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
    });

    Vue.use(vClickOutside__namespace);
};

var index = {
    install: install
};exports.CButton=CButton;exports.CCheckbox=CCheckbox;exports.CCheckboxGroup=CCheckboxGroup;exports.CCol=CCol;exports.CContainer=CContainer;exports.CDropdown=CDropdown;exports.CForm=CForm;exports.CFormField=CFormField$1;exports.CFormInput=CFormInput;exports.CFormPanel=CFormPanel;exports.CFormSelectCustom=CFormSelectCustom;exports.CLink=CLink;exports.CList=CList;exports.CListItem=CListItem;exports.CListToggle=CListToggle;exports.CPicture=CPicture;exports.CRadio=CRadio;exports.CRadioGroup=CRadioGroup;exports.CRow=CRow;exports.CTab=CTab;exports.CTabPanel=CTabPanel;exports.CTabPanels=CTabPanels;exports.CTabs=CTabs;exports.default=index;