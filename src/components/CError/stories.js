import { storiesOf } from '@storybook/vue';

import CError from './';

const stories = storiesOf('CError', module);

stories.add('Error message', () => ({
    components: { CError },
    template: '<CError>Error message</CError>'
}));
