import Vue from 'vue';
import { hasOwnProperty } from '@/utils';
import get from 'lodash/get';
import DEFAULTS from './default-config';

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

export const getComponentConfig = (cmpName, key = null) => {
    return key ? getConfigValue(`${cmpName}.${key}`) : getConfigValue(cmpName) || {};
};
