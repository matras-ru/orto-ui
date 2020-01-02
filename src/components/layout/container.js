import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';

const props = {
    fluid: {
        type: Boolean,
        default: false
    }
};

const currentClass = ({ fluid, theme }) => {
    const { baseClass, fluidClass } = theme;
    const classes = [baseClass];

    if (fluid) classes.push(fluidClass);

    return classes;
};

export default {
    name: 'CContainer',

    functional: true,

    ...install,

    props,

    render(h, { props, data, children }) {
        const componentData = {
            class: currentClass(props)
        };

        return h('div', mergeData(data, componentData), children);
    }
};
