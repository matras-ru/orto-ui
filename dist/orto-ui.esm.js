import Vue from 'vue';
import merge from 'lodash.merge';
import { mergeData } from 'vue-functional-data-merge';

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
        variant: null,
        size: 'md',
        type: 'button'
    },

    CLink: {
        variant: null,
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

var NAME = 'CFormPanel';

var CFormPanel = {
    name: NAME,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () {}
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
        },

        info: {
            type: String,
            default: null
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
        return h('section', {}, [
            this.label
                ? h(
                      'header',
                      {
                          staticClass: 'text-2xl font-semibold mb-1-1'
                      },
                      [
                          h(
                              'div',
                              {
                                  staticClass: ''
                                  //   on: {
                                  //       click: this.collapsible ? this.toggle : noop
                                  //   }
                              },
                              [
                                  //   this.collapsible
                                  //       ? h('Icon', {
                                  //             props: {
                                  //                 size: '2xs',
                                  //                 icon: this.open ? iconMinus : iconPlus
                                  //             }
                                  //         })
                                  //       : null,

                                  h(
                                      'div',
                                      {
                                          staticClass: ''
                                      },

                                      this.label
                                  )
                              ]
                          ) ]
                  )
                : null,

            this.open ? h('main', {}, [this.$slots.default]) : null
        ]);
    }
};

var wrapperBase = 'flex flex-wrap mb-0-7';

var labelBase = 'inline-flex';
var labelStateDefault = 'cursor-pointer';
var labelStateDisabled = 'cursor-not-allowed';

var iconRadioBase = 'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-full';
var iconCheckboxBase = 'w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm';

var iconStateDefault = 'border-black-200 bg-white';
var iconStateChecked = 'border-black-200 bg-secondary-200 shadow-inner';
var iconStateDisabled = 'border-tertiary-200 bg-white';

var inputBase = 'absolute opacity-0 invisible';

var DefaultTheme = {
    labelBase: labelBase,
    labelStateDefault: labelStateDefault,
    labelStateDisabled: labelStateDisabled,
    iconRadioBase: iconRadioBase,
    iconCheckboxBase: iconCheckboxBase,
    iconStateDefault: iconStateDefault,
    iconStateChecked: iconStateChecked,
    iconStateDisabled: iconStateDisabled,
    inputBase: inputBase,
    wrapperBase: wrapperBase
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
    var wrapperBase = theme.wrapperBase;
    var inputBase = theme.inputBase;

    var labelClasses = [labelBase];
    var iconClasses = [type === 'checkbox' ? iconCheckboxBase : iconRadioBase];

    if (disabled) {
        labelClasses.push(labelStateDisabled);
        iconClasses.push(iconStateDisabled);
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
                default: function () { return DefaultTheme; }
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
            var value = props.value;
            var modelValue = props.modelValue;
            var trueValue = props.trueValue;
            var falseValue = props.falseValue;

            var isChecked = computeIsChecked({ type: type, modelValue: modelValue, value: value, trueValue: trueValue });

            var ref$1 = computeClasses(type, {
                theme: theme,
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

var NAME$1 = 'CRadio';
var TYPE = 'radio';

var props = {
    modelValue: {
        type: [String, Number, Boolean],
        default: null
    },

    value: {
        type: [String, Number, Boolean],
        default: null
    }
};

var CRadio = Object.assign({}, {name: NAME$1},

    merge(radioCheckbox(TYPE), {
        props: props
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

var NAME$2 = 'CRadioGroup';
var TYPE$1 = 'radio';

var CRadioGroup = Object.assign({}, {name: NAME$2},

    merge(radioCheckboxGroup(TYPE$1), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    }));

var NAME$3 = 'CCheckbox';
var TYPE$2 = 'checkbox';

var props$1 = {
    modelValue: {
        type: [Array, Boolean, String, Number],
        default: null
    },

    trueValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$3, 'trueValue'); }
    },

    falseValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$3, 'falseValue'); }
    }
};

var CCheckbox = Object.assign({}, {name: NAME$3},

    merge(radioCheckbox(TYPE$2), {
        props: props$1
    }));

var NAME$4 = 'CCheckboxGroup';
var TYPE$3 = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$4},

    merge(radioCheckboxGroup(TYPE$3), {
        props: {
            modelValue: {
                type: Array,
                default: function () { return []; }
            }
        }
    }));

var base = 'inline-block no-underline';
var stateDisable = 'opacity-75 cursor-not-allowed';

var variantDefault = 'text-black-100 border-b-2 border-black-100';
var variantPrimary = 'text-secondary-200 border-b-2 border-secondary-200';

var DefaultTheme$1 = {
    base: base,
    stateDisable: stateDisable,
    variantDefault: variantDefault,
    variantPrimary: variantPrimary
};

var NAME$5 = 'CLink';
var ANCHOR_TAG = 'a';
var validVariants = ['primary'];

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
    var variantDefault = ref.variantDefault;
    var variantPrimary = ref.variantPrimary;

    return {
        variants: {
            primary: variantPrimary,
            default: variantDefault
        }
    };
};

var createProps = function () {
    return {
        href: {
            type: String,
            default: null
        },

        target: {
            type: String,
            default: function () { return getComponentConfig(NAME$5, 'target'); }
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
};

var CLink = {
    name: NAME$5,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: Object.assign({}, createProps(),

        {theme: {
            type: Object,
            default: function () { return DefaultTheme$1; }
        },

        variant: {
            type: String,
            default: function () { return getComponentConfig(NAME$5, 'variant'); },
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

var base$1 =
    'inline-block align-top rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3 mb-1-4';

var variantDefault$1 = 'bg-white border-primary-100 transition-shadow hover:shadow';
var variantPrimary$1 = 'bg-primary-100 border-primary-100 transition-shadow hover:shadow';
var variantSecondary =
    'bg-white border-secondary-200 text-secondary-200 transition-bg transition-color hover:text-white hover:bg-secondary-200';
var variantTertiary =
    'bg-white border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100';
var variantQuaternary =
    'bg-white border-black-100 transition-bg transition-color hover:text-white hover:bg-black-100';

var stateDisable$1 = 'cursor-not-allowed opacity-75';

var sizeSm = 'text-base px-1-3 py-0-3 leading-snug';
var sizeMd = 'text-base px-1-5 py-0-4 leading-snug';
var sizeLg = 'text-lg px-1-5 py-0-6 leading-none';

var displayBlock = 'w-full';

var DefaultTheme$2 = {
    base: base$1,

    variantDefault: variantDefault$1,
    variantPrimary: variantPrimary$1,
    variantSecondary: variantSecondary,
    variantTertiary: variantTertiary,
    variantQuaternary: variantQuaternary,

    stateDisable: stateDisable$1,

    sizeSm: sizeSm,
    sizeMd: sizeMd,
    sizeLg: sizeLg,

    displayBlock: displayBlock
};

var NAME$6 = 'CButton';
var validVariants$1 = ['primary', 'secondary', 'tertiary', 'quaternary'];
var validSizes = ['lg', 'md', 'sm'];
var validTagNames = ['button', 'a'];
var validTypes = ['button', 'submit'];

// Button as Link helpers
var pluckProps = function (keysToPluck, objToPluck) {
    return Object.keys(keysToPluck).reduce(function (output, prop) {
        output[prop] = objToPluck[prop];
        return output;
    }, {});
};

var linkProps = createProps();
var isLink = function (props) { return Boolean(props.href || props.to || props.tag === 'a'); };
var computeLinkProps = function (props) { return (isLink(props) ? pluckProps(linkProps, props) : null); };

var createThemeMap$1 = function (ref) {
    var variantDefault = ref.variantDefault;
    var variantPrimary = ref.variantPrimary;
    var variantSecondary = ref.variantSecondary;
    var variantTertiary = ref.variantTertiary;
    var variantQuaternary = ref.variantQuaternary;
    var sizeLg = ref.sizeLg;
    var sizeSm = ref.sizeSm;
    var sizeMd = ref.sizeMd;

    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            default: variantDefault
        },

        sizes: {
            lg: sizeLg,
            md: sizeMd,
            sm: sizeSm,
            default: sizeMd
        }
    };
};

var props$2 = Object.assign({}, linkProps,

    {theme: {
        type: Object,
        default: function () { return DefaultTheme$2; }
    },

    disabled: {
        type: Boolean,
        default: false
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$6, 'tag'); },
        validator: function (value) { return validTagNames.includes(value); }
    },

    label: {
        type: String,
        default: null
    },

    type: {
        type: String,
        default: function () { return getComponentConfig(NAME$6, 'type'); },
        validator: function (value) { return validTypes.includes(value); }
    },

    variant: {
        type: String,
        default: function () { return getComponentConfig(NAME$6, 'variant'); },
        validator: function (value) { return validVariants$1.includes(value); }
    },

    size: {
        type: String,
        default: function () { return getComponentConfig(NAME$6, 'size'); },
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
    name: NAME$6,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$2,

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

var NAME$7 = 'CTabs';

var CTabs = {
    name: NAME$7,

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
            default: function () { return getComponentConfig(NAME$7, 'vertical'); }
        },

        justify: {
            type: String,
            default: function () { return getComponentConfig(NAME$7, 'justify'); },
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

var base$2 = 'outline-none select-none';
var stateDefault = 'font-semibold text-lg uppercase px-1-5 py-0-7';
var stateActive = 'text-secondary-200 border-b-4 border-secondary-200';

var DefaultTheme$3 = {
    base: base$2,
    stateDefault: stateDefault,
    stateActive: stateActive
};

var NAME$8 = 'CTab';

var CTab = {
    name: NAME$8,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$3; }
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
                        href: ("#" + (this.name))
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

var NAME$9 = 'CTabPanels';

var CTabPanels = {
    name: NAME$9,

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
            default: function () { return getComponentConfig(NAME$9, 'lazy'); }
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

var NAME$a = 'CTabPanel';

var CTabPanel = {
    name: NAME$a,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () {}
        },

        tag: {
            type: String,
            default: function () { return getComponentConfig(NAME$a, 'tag'); }
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

        var componentData = {
            name: props.name,
            attrs: {
                role: 'tabpanel',
                id: props.name,
                'aria-labelledby': ("tab-" + (props.name)),
                tabindex: '-1'
            }
        };
        return h(props.tag, mergeData(data, componentData), [children]);
    }
};

var base$3 = 'flex flex-wrap';
var directionColumn = 'flex-col';
var directionHorizontal = 'flex-row';

var DefaultTheme$4 = {
    base: base$3,
    directionColumn: directionColumn,
    directionHorizontal: directionHorizontal
};

var validDirection = ['vertical', 'horizontal'];

var NAME$b = 'CList';

var props$3 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$4; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$b, 'tag'); }
    },

    direction: {
        type: String,
        default: function () { return getComponentConfig(NAME$b, 'direction'); },
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
    name: NAME$b,

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
            class: currentClass$1(props)
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};

var base$4 = 'inline-block';

var DefaultTheme$5 = {
    base: base$4
};

var NAME$c = 'CListItem';

var props$4 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$5; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$c, 'tag'); }
    }
};

var CListItem = {
    name: NAME$c,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$4,

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

var base$5 = 'container';
var modeFluid = 'max-w-none';

var DefaultTheme$6 = {
    base: base$5,
    modeFluid: modeFluid
};

var props$5 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$6; }
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

    props: props$5,

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

var base$6 = 'max-w-full';

var DefaultTheme$7 = {
    base: base$6
};

var NAME$d = 'CCol';

var breakpoints = getComponentConfig('common', 'screens');

var generateProps = function () {
    var breakpointCols = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    return Object.assign({}, {theme: {
            type: Object,
            default: function () { return DefaultTheme$7; }
        },

        cols: {
            type: Number,
            default: null
        }},

        breakpointCols);
};

var CCol = {
    name: NAME$d,

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

var base$7 = 'flex flex-wrap';

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

var DefaultTheme$8 = {
    base: base$7,
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

var NAME$e = 'CRow';
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
            default: function () { return DefaultTheme$8; }
        }
    }, obj[COLS_PROP_NAME] = {
            type: Number,
            default: function () { return getComponentConfig(NAME$e, COLS_PROP_NAME); }
        }, obj ),

        breakpointCols,

        ( obj$1 = {}, obj$1[GUTTERS_PROP_NAME] = {
            type: String,
            default: function () { return getComponentConfig(NAME$e, 'gutters'); },
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
        }
    });

    return classes;
};

var CRow = {
    name: NAME$e,

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

// import * as DefaultTheme from '@/themes/default';
var DefaultTheme$9 = {};

var components = {
    CButton: CButton,
    // CForm,
    // CFormError,
    CFormPanel: CFormPanel,
    // CFormInput,
    // CFormLabel,
    CRadio: CRadio,
    CRadioGroup: CRadioGroup,
    CCheckbox: CCheckbox,
    CCheckboxGroup: CCheckboxGroup,
    // CIcon,
    CLink: CLink,
    CTabs: CTabs,
    CTab: CTab,
    CTabPanels: CTabPanels,
    CTabPanel: CTabPanel,
    CList: CList,
    CListItem: CListItem,
    CContainer: CContainer,
    CRow: CRow,
    CCol: CCol

    // Dropdown
};

var selfInstall = function (Vue, theme, component) {
    if ( theme === void 0 ) theme = {};

    var props = component.props;
    var name = component.name;
    var defaultComponentTheme = Object.assign({}, props.theme.default());

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
    var props = ref.props;
    var themeDefaultSettings = Object.assign({}, props.theme.default());
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

    var CurrentTheme = Object.assign({}, DefaultTheme$9,
        theme);

    var componentsToRegister = injectComponentList || Object.keys(components);

    componentsToRegister.forEach(function (componentName) {
        Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
    });

    ConfigPlugin(config, Vue);
};
// export { Dropdown };

var index = {
    install: install
};

export default index;
export { CButton, CCheckbox, CCheckboxGroup, CCol, CContainer, CFormPanel, CLink, CList, CListItem, CRadio, CRadioGroup, CRow, CTab, CTabPanel, CTabPanels, CTabs, selfInstall };
