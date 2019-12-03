import Vue from 'vue';
import { isObject, hasOwnProperty } from '@/utils';

import DEFAULTS from './default-config';

const get = (obj, path, defaultValue = null) => {
    if (path in obj) {
        return obj[path];
    }

    const steps = path.split('.');

    if (steps.length === 0) {
        return defaultValue;
    }

    return steps.every(step => isObject(obj) && step in obj && (obj = obj[step]) != null)
        ? obj
        : defaultValue;
};

const PROP_NAME = '$ortoUIConfig';

class Config {
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
                    this.$_config[cmpName] = this.$_config[cmpName] || {};
                    this.$_config[cmpName][prop] = cmpConfig[prop];
                }
            });
        });
    }

    resetConfig() {
        this.$_config = {};
    }

    getConfig() {
        return this.$_config;
    }

    getConfigValue(key) {
        return get(this.$_config, key, get(DEFAULTS, key));
    }
}

const getConfigValue = key => {
    return Vue.prototype[PROP_NAME]
        ? Vue.prototype[PROP_NAME].getConfigValue(key)
        : get(DEFAULTS, key);
};

export const ConfigPlugin = (config = {}, Vue) => {
    Vue.prototype[PROP_NAME] = new Config();
    Vue.prototype[PROP_NAME].setConfig(config);
};

// Method to grab a config value for a particular component
export const getComponentConfig = (cmpName, key = null) => {
    // Return the particular config value for key for if specified,
    // otherwise we return the full config (or an empty object if not found)
    return key ? getConfigValue(`${cmpName}.${key}`) : getConfigValue(cmpName) || {};
};
