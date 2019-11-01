import { storiesOf } from '@storybook/vue';

import CLabel from './';

import '@/assets/css/tailwind.css'; // TODO: create a single loading of global styles -> FRONTEND-498

const stories = storiesOf('CLabel', module);

stories.add('Label', () => ({
    components: { CLabel },
    template: '<CLabel>Label</CLabel>'
}));
