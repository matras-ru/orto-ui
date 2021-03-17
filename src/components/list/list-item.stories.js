import CListItem from './list-item';

export default {
    title: 'Components/List/CListItem',
    component: CListItem,
    argTypes: {
        tag: {
            defaultValue: 'li',
            description: 'Tag',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'li' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        inline: {
            defaultValue: true,
            description: 'Inline',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        listItem: {
            defaultValue: false,
            description: 'List item',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CListItem },
        props: Object.keys(argTypes),
        template: '<CListItem v-bind="$props">List item</CListItem>'
    };
};

export const Default = Template.bind({});
