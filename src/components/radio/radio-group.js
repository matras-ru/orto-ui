import { install, radioCheckboxGroup } from '@/mixins';
import merge from 'lodash.merge';

const NAME = 'CRadioGroup';
const TYPE = 'radio';

export default {
    name: NAME,
    ...install,
    ...merge(radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    })
};
