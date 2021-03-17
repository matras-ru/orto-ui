import CTab from './tab';

export default {
    title: 'Components/Tab/CTab',
    component: CTab,
    argTypes: {
        label: {
            defaultValue: 'Tab',
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
        name: {
            defaultValue: 'Tab',
            description: 'Name',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        isActive: {
            defaultValue: false,
            description: 'Is active',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'clicked',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CTab },
        props: Object.keys(argTypes),
        template: '<CTab v-bind="$props" @onClick="onClick" />'
    };
};

export const Default = Template.bind({});
