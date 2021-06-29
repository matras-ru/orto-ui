import merge from 'lodash/merge';
import radioCheckboxGroup from '@/mixins/radio-checkbox-group';

const NAME = 'CRadioGroup';
const TYPE = 'radio';

export default {
    name: NAME,

    ...merge(radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    })
};
