import DefaultTheme from '@/themes/default';
import * as components from '@/components';

const extendComponent = (Vue, CurrentTheme, componentName) => {
    return Vue.extend({
        ...components[componentName]
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
