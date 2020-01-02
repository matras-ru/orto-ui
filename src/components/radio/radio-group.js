import { radioCheckboxGroup } from '@/mixins';
import merge from 'lodash.merge';

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
