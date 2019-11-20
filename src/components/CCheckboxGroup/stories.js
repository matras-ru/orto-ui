import { storiesOf } from '@storybook/vue';

import CCheckboxGroup from './';

const stories = storiesOf('CCheckboxGroup', module);

stories.add('CCheckboxGroup', () => ({
    components: { CCheckboxGroup },
    template:
        "<CCheckboxGroup :data=\"[{ id: 'checkbox4', label: 'Checkbox1', name: 'checkbox4' }, { id: 'checkbox5', label: 'Checkbox2', name: 'checkbox5' }]\" />"
}));
