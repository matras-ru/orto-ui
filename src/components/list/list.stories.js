import { storiesOf } from '@storybook/vue';

storiesOf('CList', module)
    .add('vertical - default', () => ({
        template: `
        <CList>
          <CListItem class="mb-6">Lorem, ipsum.</CListItem>
          <CListItem>Lorem ipsum dolor sit.</CListItem>
        </CList>
        `
    }))
    .add('horizontal', () => ({
        template: `
        <CList horizontal>
          <CListItem>Lorem, ipsum.</CListItem>
          <CListItem class="ml-6">Lorem ipsum dolor sit.</CListItem>
        </CList>
        `
    }));
