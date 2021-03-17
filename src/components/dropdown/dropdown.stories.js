import CDropdown from './dropdown';

export default {
    title: 'CDropdown',
    component: CDropdown,
    argTypes: {
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
                options: ['primary', 'secondary']
            }
        },
        placement: {
            defaultValue: 'left',
            description: 'Placement',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'left' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['left', 'right']
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CDropdown },
        props: Object.keys(argTypes),
        template: '<CDropdown v-bind="$props" />'
    };
};

export const Default = Template.bind({});
