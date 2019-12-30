import { centerClass, betweenClass, startClass, endClass } from '@/themes/default/common';

export const selfInstall = (Vue, theme = {}, component) => {
    const { props } = component;

    const defaultComponentTheme = { ...props.theme.default() };

    const prop = {
        default: () => {
            return { ...defaultComponentTheme, ...theme };
        }
    };

    props.theme = prop;

    Vue.component(component.name, {
        ...component,
        ...{
            props
        }
    });
};

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
        start: startClass,
        end: endClass,
        center: centerClass,
        between: betweenClass
    };

    return justifyMap[justify];
};
