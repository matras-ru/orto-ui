import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import CButton from './';

import '@/assets/css/tailwind.css'; // TODO: сделать единую загрузку глобальных стилей -> https://matras.atlassian.net/browse/FRONTEND-498

storiesOf('CButton', module)
    .add('Primary С текстом', () => ({
        components: { CButton },
        template: '<CButton @onClick="action" variant="primary">Кнопка</CButton>',
        methods: { action: action('clicked') }
    }))
    .add('Danger С Emoji', () => ({
        components: { CButton },
        template: '<CButton @onClick="action" variant="danger">😀 😎 👍 💯</CButton>',
        methods: { action: action('clicked') }
    }));
