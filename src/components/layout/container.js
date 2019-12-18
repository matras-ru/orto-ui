import { mergeData } from 'vue-functional-data-merge';
import { install } from '@/mixins';
import ThemeClass from '@/themes/default/CContainer';

const { baseClass, fluidClass } = ThemeClass;

const props = {
    fluid: {
        type: Boolean,
        default: false
    }
};

const currentClass = props => {
    let classes = [baseClass];

    if (props.fluid) classes.push(fluidClass);

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
