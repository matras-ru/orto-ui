import CBadge from './badge';

export default {
    title: 'Components/Badge/CBadge',
    component: CBadge,
    argTypes: {
        label: {
            defaultValue: 'Badge',
            description: 'Label',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        variant: {
            defaultValue: 'primary',
            description: 'Variant',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary']
            }
        },
        size: {
            defaultValue: 'md',
            description: 'Size',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'md' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg']
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CBadge },
        props: Object.keys(argTypes),
        template: '<CBadge v-bind="$props" />'
    };
};

export const Default = Template.bind({});
