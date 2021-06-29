import lodash from 'lodash';
import radioCheckboxGroup from '@/mixins/radio-checkbox-group';

const NAME = 'CCheckboxGroup';
const TYPE = 'checkbox';

export default {
    name: NAME,

    ...lodash.merge(radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: Array,
                default: () => []
            }
        }
    })
};
