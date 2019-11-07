import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CInput from './';

const stories = storiesOf('CInput', module);
stories.addDecorator(withKnobs);

stories
    .add('Input knobs', () => ({
        components: { CInput },
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
            variant: {
                default: text('variant (error)', '')
            },
            label: {
                default: text('label', 'Name')
            },
            name: {
                default: text('name', 'name')
            }
        },
        template:
            '<CInput @onInput="action" :id="id" :value="value" :autofocus="autofocus" :type="type" :name="name" :variant="variant" :label="label" />',
        methods: { action: action('input') }
    }))
    .add('Textarea knobs', () => ({
        components: { CInput },
        props: {
            id: {
                default: text('id', 'message')
            },
            value: {
                default: text('value (string, number)', '')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            size: {
                default: text('size (lg)', '')
            },
            variant: {
                default: text('variant (error)', '')
            },
            label: {
                default: text('label', 'Message')
            },
            name: {
                default: text('name', 'message')
            }
        },
        template:
            '<CInput @onInput="action" :id="id" :value="value" :autofocus="autofocus" :type="type" :name="name" :size="size" :variant="variant" :label="label" />',
        methods: { action: action('input') }
    }))
    .add('Default input', () => ({
        components: { CInput },
        template: '<CInput @onInput="action" type="text" id="name" label="Name" name="name" />',
        methods: { action: action('input') }
    }))
    .add('Default textarea', () => ({
        components: { CInput },
        template: '<CInput @onInput="action" id="message" label="Message" name="message" />',
        methods: { action: action('input') }
    }));
