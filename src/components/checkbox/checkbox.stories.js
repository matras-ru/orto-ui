import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('CCheckbox', module);
stories.addDecorator(withKnobs);

stories
    .add('Checkbox knobs', () => ({
        props: {
            id: {
                default: text('id', 'checkbox1')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            label: {
                default: text('label', 'Checkbox1')
            },
            name: {
                default: text('name', 'checkbox1')
            },
            disabled: {
                default: boolean('disabled', false)
            },
            value: {
                default: text('value', 'checkbox1')
            }
        },
        data() {
            return {
                checkboxModel: false
            };
        },
        template:
            '<CCheckbox @change="action" v-bind="{ id, autofocus, name, label, disabled, value}" v-model="checkboxModel" />',
        methods: { action: action('change') }
    }))
    .add('Default checkbox', () => ({
        data() {
            return {
                checkboxModel: false
            };
        },
        template:
            '<CCheckbox @change="action" id="checkbox2" label="Checkbox2" name="checkbox2" value="checkbox2" v-model="checkboxModel" />',
        methods: { action: action('change') }
    }))
    .add('Disabled checkbox', () => ({
        template:
            '<CCheckbox @change="action" id="checkbox3" label="Checkbox3" name="checkbox3" value="checkbox3" disabled />',
        methods: { action: action('change') }
    }));
