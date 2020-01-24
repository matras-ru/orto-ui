import { getComponentConfig } from '@/config';
import merge from 'lodash.merge';
import radioCheckbox from '@/mixins/radio-checkbox';

export const NAME = 'CCheckbox';
const TYPE = 'checkbox';

const props = {
    modelValue: {
        type: [Array, Boolean, String, Number],
        default: null
    },

    trueValue: {
        type: [String, Number, Boolean],
        default: () => getComponentConfig(NAME, 'trueValue')
    },

    falseValue: {
        type: [String, Number, Boolean],
        default: () => getComponentConfig(NAME, 'falseValue')
    }
};

export default {
    name: NAME,

    ...merge(radioCheckbox(TYPE), {
        props
    })
};
