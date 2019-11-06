import { storiesOf } from '@storybook/vue';

import CForm from './';

const stories = storiesOf('CForm', module);

stories.add('Form', () => ({
    components: { CForm },
    template: '<CForm action="/" method="POST">Form here</CForm>'
}));
