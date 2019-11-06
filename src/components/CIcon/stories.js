import { storiesOf } from '@storybook/vue';

import CIcon from './';

storiesOf('CIcon', module).add('Icon cart', () => ({
    components: { CIcon },
    template: '<CIcon name="cart" />'
}));
