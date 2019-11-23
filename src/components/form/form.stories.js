import { storiesOf } from '@storybook/vue';

storiesOf('CForm', module).add('Form', () => ({
    template: '<CForm action="/" method="POST">Form here</CForm>'
}));
