import { configure } from '@storybook/vue';

const req = require.context('../../src', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

import '@/assets/css/tailwind.css'; // global tailwind styles

configure(loadStories, module);
