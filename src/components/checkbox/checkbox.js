import { getComponentConfig } from '@/config';
import lodash from 'lodash';
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
    },

    error: {
        type: Boolean,
        default: false
    }
};

export default {
    name: NAME,

    ...lodash.merge(radioCheckbox(TYPE), {
        props
    })
};
