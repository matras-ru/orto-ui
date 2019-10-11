import { selfInstall } from '@/utils';
import ThemeClass from '@/themes/default/CIcon';

const { baseClass, defaultClass, defaultSizeClass, largeSizeClass, smallSizeClass } = ThemeClass;

const validNames = ['cart'];

const validVariants = [];

const validSizes = ['lg', 'sm'];

const props = {
    name: {
        type: String,
        default: null,
        validator: value => value === null || validNames.indexOf(value) !== -1
    },
    variant: {
        type: String,
        default: null,
        validator: value => value === null || validVariants.indexOf(value) !== -1
    },
    size: {
        type: String,
        default: null,
        validator: value => value === null || validSizes.indexOf(value) !== -1
    }
};

const currentClass = props => {
    let classes = [baseClass];
    switch (props.size) {
        case null:
            classes.push(defaultSizeClass);
            break;
        case 'sm':
            classes.push(smallSizeClass);
            break;
        case 'lg':
            classes.push(largeSizeClass);
            break;
    }

    switch (props.variant) {
        default:
            classes.push(defaultClass);
            break;
    }

    return classes;
};

const getAttributes = props => {
    return {
        'xlink:href': `#${props.name}`
    };
};

export default {
    name: 'Icon',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { props }) {
        return h('svg', { class: currentClass(props) }, [
            h('use', { attrs: getAttributes(props) })
        ]);
    }
};
