import { justifyCenter, justifyBetween, justifyStart, justifyEnd } from '@/themes/default/common';

export const noop = () => {};

export const isObject = obj => obj !== null && typeof obj === 'object';

export const hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

export const getHashMapValue = (themeMap, key) => {
    return themeMap[key] || themeMap.default || null;
};

export const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

export const suffixPropName = (suffix, str) => {
    return str + (suffix ? upperFirst(suffix) : '');
};

export const numProp = () => ({
    type: Number,
    default: null
});

export const stringProp = () => ({
    type: String,
    default: null
});

export const justifyClaassUtil = justify => {
    const justifyMap = {
        start: justifyStart,
        end: justifyEnd,
        center: justifyCenter,
        between: justifyBetween
    };

    return justifyMap[justify] || null;
};
