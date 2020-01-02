import { radioCheckboxGroup } from '@/mixins';
import merge from 'lodash.merge';

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
