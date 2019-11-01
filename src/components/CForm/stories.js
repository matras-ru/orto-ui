import { storiesOf } from '@storybook/vue';

import CForm from './';

import '@/assets/css/tailwind.css'; // TODO: create a single loading of global styles -> FRONTEND-498

const stories = storiesOf('CForm', module);

stories.add('Form', () => ({
    components: { CForm },
    template: '<CForm action="/" method="POST">Form here</CForm>'
}));
