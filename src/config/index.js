import Vue from 'vue';
import DEFAULTS from './default-config';

const RX_ARRAY_NOTATION = /\[(\d+)]/g;
const identity = x => x;
export const isObject = obj => obj !== null && typeof obj === 'object';

export const hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

const get = (obj, path, defaultValue = null) => {
    // Handle array of path values
    path = Array.isArray(path) ? path.join('.') : path;

    // If no path or no object passed
    if (!path || !isObject(obj)) {
        return defaultValue;
    }

    // Handle edge case where user has dot(s) in top-level item field key
    // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762
    // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
    // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463
    if (path in obj) {
        return obj[path];
    }

    // Handle string array notation (numeric indices only)
    path = String(path).replace(RX_ARRAY_NOTATION, '.$1');

    const steps = path.split('.').filter(identity);

    // Handle case where someone passes a string of only dots
    if (steps.length === 0) {
        return defaultValue;
    }

    // Traverse path in object to find result
    // We use `!=` vs `!==` to test for both `null` and `undefined`
    // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
    // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463
    return steps.every(step => isObject(obj) && step in obj && (obj = obj[step]) != null)
        ? obj
        : defaultValue;
};

export const getConfigValue = key => {
    return Vue.prototype[PROP_NAME]
        ? Vue.prototype[PROP_NAME].getConfigValue(key)
        : get(DEFAULTS, key);
};

// Method to grab a config value for a particular component
export const getComponentConfig = (cmpName, key = null) => {
    // Return the particular config value for key for if specified,
    // otherwise we return the full config (or an empty object if not found)
    return key ? getConfigValue(`${cmpName}.${key}`) : getConfigValue(cmpName) || {};
};

const PROP_NAME = '$ortoUIConfig';

class BvConfig {
    constructor() {
        this.$_config = {};
    }

    static get Defaults() {
        return DEFAULTS;
    }

    get defaults() {
        return DEFAULTS;
    }

    // Returns the defaults
    getDefaults() {
        return this.defaults;
    }

    // Method to merge in user config parameters
    setConfig(config = {}) {
        Object.keys(config).forEach(cmpName => {
            if (!hasOwnProperty(DEFAULTS, cmpName)) {
                console.warn(`config: unknown config property "${cmpName}"`);
                return;
            }

            const cmpConfig = config[cmpName];

            // Component prop defaults
            const props = Object.getOwnPropertyNames(cmpConfig);
            props.forEach(prop => {
                if (!hasOwnProperty(DEFAULTS[cmpName], prop)) {
                    console.warn(`config: unknown config property "${cmpName}.${prop}"`);
                } else {
                    // TODO: If we pre-populate the config with defaults, we can skip this line
                    this.$_config[cmpName] = this.$_config[cmpName] || {};

                    this.$_config[cmpName][prop] = cmpConfig[prop];

                    // if (!isUndefined(cmpConfig[prop])) {
                    // }
                }
            });
        });
    }

    // Clear the config. For testing purposes only
    resetConfig() {
        this.$_config = {};
    }

    // Returns a deep copy of the user config
    getConfig() {
        return this.$_config;
    }

    getConfigValue(key) {
        // First we try the user config, and if key not found we fall back to default value
        // NOTE: If we deep clone DEFAULTS into config, then we can skip the fallback for get
        return get(this.$_config, key, get(DEFAULTS, key));
    }
}

export const ConfigPlugin = (config = {}, Vue) => {
    Vue.prototype[PROP_NAME] = new BvConfig();
    Vue.prototype[PROP_NAME].setConfig(config);
};
