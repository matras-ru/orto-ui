import CRadio from './radio';

export default {
    title: 'Components/Radio/CRadio',
    component: CRadio,
    argTypes: {
        label: {
            defaultValue: 'radio1',
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
            defaultValue: 'radio',
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
        value: {
            defaultValue: 'radio1',
            description: 'Value',
            table: {
                type: { summary: ['string', 'number', 'boolean'] },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        id: {
            defaultValue: 'radio1',
            description: 'ID',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        error: {
            defaultValue: false,
            description: 'Error',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        disabled: {
            defaultValue: false,
            description: 'Disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        modelValue: {
            description: 'Model value',
            table: {
                type: { summary: ['array', 'boolean', 'string', 'number'] },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        change: {
            action: 'changed',
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
        components: { CRadio },
        props: Object.keys(argTypes),
        template: '<CRadio v-bind="$props" @change="change" />'
    };
};

export const Default = Template.bind({});
