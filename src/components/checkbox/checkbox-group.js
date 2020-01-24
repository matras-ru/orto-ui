import merge from 'lodash.merge';
import radioCheckboxGroup from '@/mixins/radio-checkbox-group';

const NAME = 'CCheckboxGroup';
const TYPE = 'checkbox';

export default {
    name: NAME,

    ...merge(radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: Array,
                default: () => []
            }
        }
    })
};
