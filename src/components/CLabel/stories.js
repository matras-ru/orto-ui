import { storiesOf } from '@storybook/vue';

import CLabel from './';

const stories = storiesOf('CLabel', module);

stories.add('Label', () => ({
    components: { CLabel },
    template: '<CLabel>Label</CLabel>'
}));
