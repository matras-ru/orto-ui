import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CButton from './';

const stories = storiesOf('CButton', module);
stories.addDecorator(withKnobs);

stories
    .add('Button knobs', () => ({
        components: { CButton },
        props: {
            id: {
                default: text('id', 'id')
            },
            value: {
                default: text('value (string, number)', 'value')
            },
            type: {
                default: text('type (button, reset, submit)', 'button')
            },
            size: {
                default: text('size (sm, lg)', '')
            },
            variant: {
                default: text('variant (primary, secondary, tertiary, quaternary)', '')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            disabled: {
                default: boolean('disabled', false)
            }
        },
        template:
            '<CButton @onClick="action" :id="id" :value="value" :tagName="\'button\'" :type="type" :size="size" :variant="variant" :autofocus="autofocus" :disabled="disabled">Button</CButton>',
        methods: { action: action('clicked') }
    }))
    .add('Link knobs', () => ({
        components: { CButton },
        props: {
            id: {
                default: text('id', 'id')
            },
            href: {
                default: text('href', '/')
            },
            size: {
                default: text('size (sm, lg)', '')
            },
            variant: {
                default: text('variant (primary, secondary, tertiary, quaternary)', '')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            disabled: {
                default: boolean('disabled', false)
            }
        },
        template:
            '<CButton @onClick="action" :id="id" :tagName="\'a\'" :href="href" :size="size" :variant="variant" :autofocus="autofocus" :disabled="disabled">Link</CButton>',
        methods: { action: action('clicked') }
    }))
    .add('Default', () => ({
        components: { CButton },
        template:
            '<div><CButton @onClick="action" size="sm">Button</CButton><CButton @onClick="action">Button</CButton><CButton @onClick="action" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Primary', () => ({
        components: { CButton },
        template:
            '<div><CButton @onClick="action" variant="primary" size="sm">Button</CButton><CButton @onClick="action" variant="primary">Button</CButton><CButton @onClick="action" variant="primary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Secondary', () => ({
        components: { CButton },
        template:
            '<div><CButton @onClick="action" variant="secondary" size="sm">Button</CButton><CButton @onClick="action" variant="secondary">Button</CButton><CButton @onClick="action" variant="secondary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Tertiary', () => ({
        components: { CButton },
        template:
            '<div><CButton @onClick="action" variant="tertiary" size="sm">Button</CButton><CButton @onClick="action" variant="tertiary">Button</CButton><CButton @onClick="action" variant="tertiary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Quaternary', () => ({
        components: { CButton },
        template:
            '<div><CButton @onClick="action" variant="quaternary" size="sm">Button</CButton><CButton @onClick="action" variant="quaternary">Button</CButton><CButton @onClick="action" variant="quaternary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }));
