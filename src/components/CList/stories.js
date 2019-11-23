import { storiesOf } from '@storybook/vue';

import CList from './';
import CListItem from '../CListItem';

storiesOf('CList - CListItem', module)
    .add('vertical - default', () => ({
        components: { CList, CListItem },
        template: `
        <CList>
          <CListItem class="mb-6">Lorem, ipsum.</CListItem>
          <CListItem>Lorem ipsum dolor sit.</CListItem>
        <CList>
        `
    }))
    .add('horizontal', () => ({
        components: { CList, CListItem },
        template: `
        <CList horizontal>
          <CListItem>Lorem, ipsum.</CListItem>
          <CListItem class="ml-6">Lorem ipsum dolor sit.</CListItem>
        <CList>
        `
    }));
