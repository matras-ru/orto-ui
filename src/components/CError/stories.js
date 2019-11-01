import { storiesOf } from '@storybook/vue';

import CError from './';

import '@/assets/css/tailwind.css'; // TODO: create a single loading of global styles -> FRONTEND-498

const stories = storiesOf('CError', module);

stories.add('Error message', () => ({
    components: { CError },
    template: '<CError>Error message</CError>'
}));
