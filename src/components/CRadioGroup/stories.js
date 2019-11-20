import { storiesOf } from '@storybook/vue';

import CRadioGroup from './';

const stories = storiesOf('CRadioGroup', module);

stories.add('CRadioGroup', () => ({
    components: { CRadioGroup },
    template:
        "<CRadioGroup :data=\"[{ id: 'radio2', label: 'Radio1', name: 'radio2' }, { id: 'radio3', label: 'Radio2', name: 'radio3' }]\" />"
}));
