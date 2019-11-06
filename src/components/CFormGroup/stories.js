import { storiesOf } from '@storybook/vue';

import CFormGroup from './';

const stories = storiesOf('CFormGroup', module);

stories.add('Form group', () => ({
    components: { CFormGroup },
    template: '<CFormGroup>Form group here</CFormGroup>'
}));
