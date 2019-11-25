import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('CRadioGroup', module).add('CRadioGroup', () => ({
    data() {
        return {
            radioGroupModel: null
        };
    },
    template: `<CRadioGroup
            @change="action"
            v-model='radioGroupModel' 
            :data=\"[{ id: 'radio2', label: 'Radio1', name: 'radio2', value: 'radio2' }, { id: 'radio3', label: 'Radio2', name: 'radio3', value: 'radio3' }]\" 
        />`,
    methods: { action: action('change') }
}));
