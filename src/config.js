import DEFAULTS from './default-config';

const get = (obj, path) => {
    if (path in obj) {
        return obj[path];
    }
};

export const getComponentConfig = (cmpName, key = null) => {
    return get(DEFAULTS, cmpName)[key];
};
