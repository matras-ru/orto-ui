import CPicture from './picture';

export default {
    title: 'Components/Picture/CPicture',
    component: CPicture,
    argTypes: {
        lazy: {
            defaultValue: false,
            description: 'Lazy',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        src: {
            defaultValue: `${require('@/assets/img/picture2.jpg')}`,
            description: 'SRC',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        formats: {
            defaultValue: undefined,
            description: 'List of Formats with images',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'jpg' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CPicture },
        props: Object.keys(argTypes),
        template: '<CPicture v-bind="$props" />'
    };
};

export const Default = Template.bind({});
