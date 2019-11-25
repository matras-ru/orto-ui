import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('CRadio', module)
    .addDecorator(withKnobs)
    .add('Radio knobs', () => ({
        props: {
            id: {
                default: text('id', 'radio1')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            label: {
                default: text('label', 'Radio1')
            },
            name: {
                default: text('name', 'radio1')
            },
            disabled: {
                default: boolean('disabled', false)
            },
            value: {
                default: text('value', 'radio1')
            }
        },
        data() {
            return {
                radioModel: false
            };
        },
        template:
            '<CRadio @change="action" v-bind="{ id, autofocus, name, label, disabled, value}" v-model="radioModel" />',
        methods: { action: action('change') }
    }))
    .add('Default radio', () => ({
        data() {
            return {
                radioModel: false
            };
        },
        template:
            '<CRadio @change="action" id="radio2" label="Radio2" name="radio2" value="radio2" v-model="radioModel" />',
        methods: { action: action('change') }
    }))
    .add('Disabled radio', () => ({
        template:
            '<CRadio @change="action" id="radio3" label="Radio3" name="radio3" value="radio3" disabled />',
        methods: { action: action('change') }
    }));
