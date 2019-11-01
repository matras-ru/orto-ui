import { storiesOf } from '@storybook/vue';

import CFormGroup from './';

import '@/assets/css/tailwind.css'; // TODO: create a single loading of global styles -> FRONTEND-498

const stories = storiesOf('CFormGroup', module);

stories.add('Form group', () => ({
    components: { CFormGroup },
    template: '<CFormGroup>Form group here</CFormGroup>'
}));
