import merge from 'lodash/merge';
import radioCheckbox from '@/mixins/radio-checkbox';

export const NAME = 'CRadio';
const TYPE = 'radio';

const props = {
    modelValue: {
        type: [String, Number, Boolean],
        default: null
    },

    value: {
        type: [String, Number, Boolean],
        default: null
    }
};

export default {
    name: NAME,

    ...merge(radioCheckbox(TYPE), {
        props
    })
};
