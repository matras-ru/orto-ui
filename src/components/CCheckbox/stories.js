import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CCheckbox from './';

const stories = storiesOf('CCheckbox', module);
stories.addDecorator(withKnobs);

stories
    .add('Checkbox knobs', () => ({
        components: { CCheckbox },
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
            '<CCheckbox @onChange="action" :id="id" :autofocus="autofocus" :name="name" :label="label" :disabled="disabled" :value="value" v-model="checkboxModel" />',
        methods: { action: action('change') }
    }))
    .add('Default checkbox', () => ({
        components: { CCheckbox },
        data() {
            return {
                checkboxModel: false
            };
        },
        template:
            '<CCheckbox @onChanget="action" id="checkbox2" label="Checkbox2" name="checkbox2" value="checkbox2" v-model="checkboxModel" />',
        methods: { action: action('change') }
    }))
    .add('Disabled checkbox', () => ({
        components: { CCheckbox },
        template:
            '<CCheckbox @onChange="action" id="checkbox3" label="Checkbox3" name="checkbox3" value="checkbox3" disabled />',
        methods: { action: action('change') }
    }));
