(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["orto-ui"] = factory();
	else
		root["orto-ui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "CButton", function() { return components_CButton; });

// CONCATENATED MODULE: C:/OSPanel/domains/orto-ui/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/themes/default/CButton.js
var Button = {
  baseClass: 'border block rounded inline-flex items-center justify-center',
  defaultClass: 'bg-white border-gray-400 hover:bg-gray-100 hover:border-gray-500',
  primaryClass: 'text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600',
  secondaryClass: 'border-blue-500 text-blue-500 bg-white hover:border-blue-600 hover:text-blue-600 hover:bg-white',
  tertiaryClass: 'border block underline text-blue-500 border-transparent bg-transparent hover:text-blue-600',
  successClass: 'text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600',
  dangerClass: 'text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600',
  warningClass: 'text-yellow-900 bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600',
  disabledClass: 'cursor-not-allowed opacity-75',
  defaultSizeClass: 'px-6 py-3',
  largeSizeClass: 'px-8 py-4 text-lg',
  smallSizeClass: 'px-4 py-2 text-sm'
};
/* harmony default export */ var CButton = (Button);
// CONCATENATED MODULE: ./src/themes/default/index.js

var DefaultTheme = {
  CButton: CButton
}; //

 //

/* harmony default export */ var themes_default = (DefaultTheme);
// CONCATENATED MODULE: ./src/utils/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selfInstall = function selfInstall(Vue) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var component = arguments.length > 2 ? arguments[2] : undefined;
  var props = component.props;
  Object.keys(theme).forEach(function (key) {
    var prop = {
      default: function _default() {
        return theme[key];
      }
    };
    props[key] = prop;
  });
  Vue.component(component.name, _objectSpread({}, component, {}, {
    props: props
  }));
};
// CONCATENATED MODULE: ./src/mixins/commonAttributes.js
var commonAttributes = {
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
};
/* harmony default export */ var mixins_commonAttributes = (commonAttributes);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--13-0!./src/components/CButton/script.js?vue&type=script&lang=js&
function scriptvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function scriptvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { scriptvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { scriptvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { scriptvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function scriptvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var baseClass = CButton.baseClass,
    defaultClass = CButton.defaultClass,
    primaryClass = CButton.primaryClass,
    secondaryClass = CButton.secondaryClass,
    tertiaryClass = CButton.tertiaryClass,
    successClass = CButton.successClass,
    dangerClass = CButton.dangerClass,
    warningClass = CButton.warningClass,
    disabledClass = CButton.disabledClass,
    defaultSizeClass = CButton.defaultSizeClass,
    largeSizeClass = CButton.largeSizeClass,
    smallSizeClass = CButton.smallSizeClass;
var validTagNames = ['button', 'a'];
var validVariants = ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success'];
var validSizes = ['lg', 'sm'];

var scriptvue_type_script_lang_js_props = scriptvue_type_script_lang_js_objectSpread({}, mixins_commonAttributes.props, {
  tagName: {
    type: String,
    default: 'button',
    validator: function validator(value) {
      return validTagNames.indexOf(value) !== -1;
    }
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
    default: 'button'
  },
  href: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: null,
    validator: function validator(value) {
      return value === null || validVariants.indexOf(value) !== -1;
    }
  },
  size: {
    type: String,
    default: null,
    validator: function validator(value) {
      return value === null || validSizes.indexOf(value) !== -1;
    }
  },
  to: {
    type: [String, Object],
    default: undefined
  },
  replace: {
    type: Boolean,
    default: false
  },
  append: {
    type: Boolean,
    default: false
  },
  activeClass: {
    type: String,
    default: 'router-link-active'
  },
  exact: {
    type: Boolean,
    default: false
  },
  exactActiveClass: {
    type: String,
    default: 'router-link-exact-active'
  }
});
/**
 * @description
 *
 * @return {Array}
 */


var currentClass = function currentClass(props) {
  var classes = [baseClass];

  if (props.disabled) {
    classes.push(disabledClass);
  }

  switch (props.size) {
    case null:
      classes.push(defaultSizeClass);
      break;

    case 'sm':
      classes.push(smallSizeClass);
      break;

    case 'lg':
      classes.push(largeSizeClass);
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

    case 'danger':
      classes.push(dangerClass);
      break;

    case 'warning':
      classes.push(warningClass);
      break;

    case 'success':
      classes.push(successClass);
      break;

    default:
      classes.push(defaultClass);
      break;
  }

  return classes;
};

var componentToRender = function componentToRender(props) {
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
/**
 *
 * @return {Object}
 */


var getAttributes = function getAttributes(props) {
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

var noop = function noop() {};

/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'Button',
  functional: true,
  install: function install(Vue, theme) {
    selfInstall(Vue, theme, this);
  },
  props: scriptvue_type_script_lang_js_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        listeners = _ref.listeners,
        children = _ref.children;
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
      class: currentClass(props),
      attrs: getAttributes(props),
      on: on
    };
    return h(componentToRender(props), componentData, props.label ? props.label : children);
  }
});
// CONCATENATED MODULE: ./src/components/CButton/script.js?vue&type=script&lang=js&
 /* harmony default export */ var CButton_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/CButton/index.vue
var render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  CButton_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_CButton = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js


// CONCATENATED MODULE: ./src/index.js
function src_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_ownKeys(source, true).forEach(function (key) { src_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { src_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var src_extendComponent = function extendComponent(Vue, CurrentTheme, componentName) {
  var themeSettings = CurrentTheme[componentName];
  var themeDefaultSettings = themes_default[componentName];

  var newSettings = src_objectSpread({}, themeDefaultSettings, {
    themeSettings: themeSettings
  });

  var props = components_namespaceObject[componentName].props;
  Object.keys(newSettings).forEach(function (key) {
    var prop = {
      default: function _default() {
        return newSettings[key];
      }
    };
    props[key] = prop;
  });
  return Vue.extend(src_objectSpread({}, components_namespaceObject[componentName], {}, {
    props: props
  }));
};

var Plugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.installed) return;
    this.installed = true;

    var CurrentTheme = src_objectSpread({}, themes_default, {}, options.theme || {});

    var componentsToRegister = options.components || Object.keys(components_namespaceObject);
    componentsToRegister.forEach(function (componentName) {
      Vue.component(componentName, src_extendComponent(Vue, CurrentTheme, componentName));
    });
  }
};
"";
/* harmony default export */ var src = (Plugin);
// CONCATENATED MODULE: C:/OSPanel/domains/orto-ui/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=orto-ui.umd.js.map