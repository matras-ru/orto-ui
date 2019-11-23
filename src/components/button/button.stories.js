import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('CButton', module)
    .addDecorator(withKnobs)
    .add('Button knobs', () => ({
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
                default: text('size (sm, lg)', 'md')
            },
            variant: {
                default: text('variant (primary, secondary, tertiary, quaternary)', 'primary')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            disabled: {
                default: boolean('disabled', false)
            }
        },
        template:
            '<CButton @onClick="action" v-bind="{ id, value, type, size, variant, autofocus, disabled }">Button</CButton>',
        methods: { action: action('clicked') }
    }))
    .add('Link knobs', () => ({
        props: {
            id: {
                default: text('id', 'id')
            },
            href: {
                default: text('href', '/')
            },
            size: {
                default: text('size (sm, lg)', 'md')
            },
            variant: {
                default: text('variant (primary, secondary, tertiary, quaternary)', 'primary')
            },
            autofocus: {
                default: boolean('autofocus', false)
            },
            disabled: {
                default: boolean('disabled', false)
            }
        },
        template:
            '<CButton @onClick="action" v-bind="{ id, href,  size, variant, autofocus, disabled }" tag="a" :disabled="disabled">Link</CButton>',
        methods: { action: action('clicked') }
    }))
    .add('Default', () => ({
        template:
            '<div><CButton @onClick="action" size="sm">Button</CButton><CButton @onClick="action">Button</CButton><CButton @onClick="action" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Primary', () => ({
        template:
            '<div><CButton @onClick="action" variant="primary" size="sm">Button</CButton><CButton @onClick="action" variant="primary">Button</CButton><CButton @onClick="action" variant="primary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Secondary', () => ({
        template:
            '<div><CButton @onClick="action" variant="secondary" size="sm">Button</CButton><CButton @onClick="action" variant="secondary">Button</CButton><CButton @onClick="action" variant="secondary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Tertiary', () => ({
        template:
            '<div><CButton @onClick="action" variant="tertiary" size="sm">Button</CButton><CButton @onClick="action" variant="tertiary">Button</CButton><CButton @onClick="action" variant="tertiary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }))
    .add('Quaternary', () => ({
        template:
            '<div><CButton @onClick="action" variant="quaternary" size="sm">Button</CButton><CButton @onClick="action" variant="quaternary">Button</CButton><CButton @onClick="action" variant="quaternary" size="lg">Button</CButton></div>',
        methods: { action: action('clicked') }
    }));
