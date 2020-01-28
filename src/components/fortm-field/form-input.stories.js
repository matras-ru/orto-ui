import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('CFormInput', module)
    .addDecorator(withKnobs)
    .add('Input knobs', () => ({
        props: {
            id: {
                default: text('id', 'name')
            },
            value: {
                default: text('value (string, number)', '')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            type: {
                default: text('type (text, email, password)', 'text')
            },
            error: {
                default: boolean('is error)', false)
            },
            label: {
                default: text('label', 'Name')
            },
            name: {
                default: text('name', 'name')
            }
        },
        template:
            '<CFormInput @onInput="action" v-bind="{ id, value, autofocus, type, name, error, label }" />',
        methods: { action: action('input') }
    }))
    .add('Default input', () => ({
        template: '<CFormInput @onInput="action" type="text" id="name" label="Name" name="name" />',
        methods: { action: action('input') }
    }))
    .add('Default textarea', () => ({
        template: '<CFormInput @onInput="action" id="message" label="Message" name="message" />',
        methods: { action: action('input') }
    }));
