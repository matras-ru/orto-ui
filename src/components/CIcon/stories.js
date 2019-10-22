import { storiesOf } from '@storybook/vue';

import CIcon from './';

import '@/assets/css/tailwind.css';

storiesOf('CIcon', module).add('Icon cart', () => ({
    components: { CIcon },
    template: '<CIcon name="cart" />'
}));
