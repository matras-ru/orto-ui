import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CRadio from './';

const stories = storiesOf('CRadio', module);
stories.addDecorator(withKnobs);

stories
    .add('Radio knobs', () => ({
        components: { CRadio },
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
            }
        },
        template:
            '<CRadio @onChange="action" :id="id" :autofocus="autofocus" :name="name" :label="label" :disabled="disabled" />',
        methods: { action: action('change') }
    }))
    .add('Default radio', () => ({
        components: { CRadio },
        template: '<CRadio @onChanget="action" id="radio2" label="Radio2" name="radio2" />',
        methods: { action: action('change') }
    }))
    .add('Disabled radio', () => ({
        components: { CRadio },
        template: '<CRadio @onChange="action" id="radio3" label="Radio3" name="radio3" disabled />',
        methods: { action: action('change') }
    }));
