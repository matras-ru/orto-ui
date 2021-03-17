import CCheckbox from './checkbox';

export default {
    title: 'Components/Checkbox/CCheckbox',
    component: CCheckbox,
    argTypes: {
        label: {
            defaultValue: 'chkb1',
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
            defaultValue: 'chkb1',
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
            defaultValue: 'chkb1',
            description: 'Value',
            table: {
                type: { summary: ['string', 'number'] },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        id: {
            defaultValue: 'chkb1',
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
        trueValue: {
            defaultValue: true,
            description: 'True value',
            table: {
                type: { summary: ['string', 'number', 'boolean'] },
                defaultValue: { summary: 'true' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        falseValue: {
            defaultValue: false,
            description: 'False value',
            table: {
                type: { summary: ['string', 'number', 'boolean'] },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'text'
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
        components: { CCheckbox },
        props: Object.keys(argTypes),
        template: '<CCheckbox v-bind="$props" @change="change" />'
    };
};

export const Default = Template.bind({});
