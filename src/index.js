import DefaultTheme from '@/themes/default';
import * as components from '@/components';

const extendComponent = (Vue, CurrentTheme, componentName) => {
    const themeSettings = CurrentTheme[componentName];
    const themeDefaultSettings = DefaultTheme[componentName];

    const newSettings = { ...themeDefaultSettings, ...themeSettings };

    let { props } = components[componentName];

    Object.keys(newSettings).forEach(key => {
        const prop = {
            default: () => newSettings[key]
        };
        props[key] = prop;
    });

    return Vue.extend({
        ...components[componentName],
        ...{
            props
        }
    });
};

const Plugin = {
    install(Vue, options = {}) {
        if (this.installed) return;

        this.installed = true;

        const CurrentTheme = {
            ...DefaultTheme,
            ...(options.theme || {})
        };

        const componentsToRegister = options.components || Object.keys(components);

        componentsToRegister.forEach(componentName => {
            Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
        });
    }
};

export default Plugin;
