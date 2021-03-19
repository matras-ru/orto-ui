import CFormField from './form-field';

export default {
    title: 'Components/Form/CFormField',
    component: CFormField,
    argTypes: {
        modelValue: {
            description: 'Model value',
            table: {
                type: { summary: ['string', 'number'] },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        label: {
            defaultValue: 'Label',
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
        inline: {
            defaultValue: false,
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
        name: {
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
        id: {
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
        placeholder: {
            description: 'Placeholder',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        hint: {
            description: 'Hint',
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
        errorMessage: {
            defaultValue: 'Error message',
            description: 'Error message',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        labelBgColor: {
            description: 'Label background color (hex)',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        labelStick: {
            defaultValue: true,
            description: 'Sticky label',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
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
                options: ['sm', 'md']
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CFormField },
        props: Object.keys(argTypes),
        template: '<CFormField v-bind="$props" />'
    };
};

export const Default = Template.bind({});
