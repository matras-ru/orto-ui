import CList from './list';
import CListItem from './list-item';

export default {
    title: 'Components/List/CList',
    component: CList,
    argTypes: {
        tag: {
            defaultValue: 'ul',
            description: 'Tag',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'ul' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        direction: {
            defaultValue: 'vertical',
            description: 'Direction',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'vertical' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['vertical', 'horizontal']
            }
        },
        justify: {
            description: 'Justify',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        block: {
            defaultValue: false,
            description: '100% width',
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
        components: { CList },
        props: Object.keys(argTypes),
        template: '<CList v-bind="$props" />'
    };
};

export const Default = Template.bind({});

export const Example = (args, { argTypes }) => {
    return {
        components: { CList, CListItem },
        props: Object.keys(argTypes),
        data() {
            return {
                list: [
                    {
                        id: 1,
                        label: 'List item 1'
                    },
                    {
                        id: 2,
                        label: 'List item 2'
                    },
                    {
                        id: 3,
                        label: 'List item 3'
                    },
                    {
                        id: 4,
                        label: 'List item 4'
                    },
                    {
                        id: 5,
                        label: 'List item 5'
                    }
                ]
            };
        },
        template:
            '<CList v-bind="$props" class="list-disc list-inside"><CListItem v-for="({ id, label }) in list" :key="id" :listItem=true>{{ label }}</CListItem></CList>'
    };
};
