import CRow from './row';

export default {
    title: 'Components/Layout/CRow',
    component: CRow,
    argTypes: {
        cols: {
            defaultValue: 12,
            description: 'Cols',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'number',
                min: 1,
                step: 1,
                max: 12
            }
        },
        gutters: {
            defaultValue: 'lg',
            description: 'Gutters',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'md' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['none', 'sm', 'md', 'lg', 'xl']
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CRow },
        props: Object.keys(argTypes),
        template: '<CRow v-bind="$props" />'
    };
};

export const Default = Template.bind({});
