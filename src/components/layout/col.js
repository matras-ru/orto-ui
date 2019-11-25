import { selfInstall } from '@/utils';
import { mergeData } from 'vue-functional-data-merge';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@root/tailwind.config.js';

import { baseClass, defaultClass } from '@/themes/default/CCol';

const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = fullConfig.theme.screens;

const TOTAL_COLS = 12;
const MINIMUM_COL = 1;

const Num = () => ({
    type: Number,
    default: null
});

// FIXME: Сделать автогенерацию props/responsive - class
//
// const test = {
//     col: {},
//     order: {}
// };

// Object.keys(breakpoints).forEach(breakpoint => {
//     // console.log(breakpoint);
//     const orderProp = `order-${breakpoint}`;

//     test.col[breakpoint] = Num();
//     test.order[orderProp] = Num();

//     // return prop;
// });

// console.log(breakpointProps);
// console.log(test);

const breakpointsProps = Object.keys(breakpoints).reduce((prop, breakpoint) => {
    const orderProp = `order-${breakpoint}`;

    prop[breakpoint] = Num();
    prop[orderProp] = Num();

    return prop;
}, {});

const generateProps = () => {
    return {
        cols: {
            type: Number,
            default: null,
            validator: value => {
                return value <= TOTAL_COLS && value > MINIMUM_COL;
            }
        },
        order: {
            type: Number,
            default: null
        },
        // add dynamic generated props
        ...breakpointsProps
    };
};

const limit = col => (col !== TOTAL_COLS ? `${col}/${TOTAL_COLS}` : 'full');

// Compute a breakpoint class name
// const computeBreakpointClass = (type, breakpoint, val) => {
//     let className = type;

//     if (!val || val === false) {
//         return undefined;
//     }

//     if (breakpoint) {
//         className += `-${breakpoint}`;
//     }
//     // Handling the boolean style prop when accepting [Boolean, String, Number]
//     // means Vue will not convert <b-col sm></b-col> to sm: true for us.
//     // Since the default is false, an empty string indicates the prop's presence.
//     if (type === 'col' && (val === '' || val === true)) {
//         // .col-md
//         return className.toLowerCase();
//     }
//     // .order-md-6
//     className += `-${val}`;
//     return className.toLowerCase();
// };

const currentClass = props => {
    const classList = [baseClass];

    //
    classList.push(props.cols ? `w-${limit(props.cols)}` : [...defaultClass]);

    //
    classList.push(props.order ? `order-${props.order}` : null);

    // Адаптивность

    // input          output

    // cols:     6 -> w-6/12

    // sm:       6 -> xl:w-6/12
    // md:       6 -> md:w-6/12
    // lg:       6 -> lg:w-6/12
    // xl:       6 -> xl:w-6/12

    // order:     3 -> order-3

    // order-sm: 1 -> sm:order-1
    // order-md: 1 -> md:order-1
    // order-lg: 1 -> lg:order-1
    // order-xl: 1 -> xl:order-1

    // FIXME: Процедурщина, переписать

    classList.push(props.orderSm ? `sm:order-${props.orderSm}` : null);
    classList.push(props.orderMd ? `md:order-${props.orderMd}` : null);
    classList.push(props.orderLg ? `lg:order-${props.orderLg}` : null);
    classList.push(props.orderXl ? `xl:order-${props.orderXl}` : null);

    classList.push(props.sm ? `sm:w-${limit(props.sm)}` : null);
    classList.push(props.md ? `md:w-${limit(props.md)}` : null);
    classList.push(props.lg ? `lg:w-${limit(props.lg)}` : null);
    classList.push(props.xl ? `xl:w-${limit(props.xl)}` : null);

    return classList;
};

export default {
    name: 'CCol',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps());
    },

    render(h, { props, data, children }) {
        const componentData = {
            class: currentClass(props)
        };

        return h('div', mergeData(data, componentData), children);
    }
};
