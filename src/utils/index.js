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
