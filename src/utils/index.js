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
