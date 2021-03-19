import CFormInput from './form-input';

export default {
    title: 'Components/Form/CFormInput',
    component: CFormInput,
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
            defaultValue: 'Text here',
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
            defaultValue: false,
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
        },
        type: {
            defaultValue: 'text',
            description: 'Type',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'text' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: [
                    'text',
                    'textarea',
                    'password',
                    'email',
                    'number',
                    'url',
                    'tel',
                    'search',
                    'date'
                ]
            }
        },
        readonly: {
            defaultValue: false,
            description: 'Readonly',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        rows: {
            defaultValue: 6,
            description: 'Rows',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'null' },
                category: 'Props (type textarea)'
            },
            control: {
                type: 'number',
                min: 1,
                step: 1
            }
        },
        min: {
            description: 'Min',
            table: {
                type: { summary: ['number', 'string', 'date'] },
                defaultValue: { summary: 'null' },
                category: 'Props (types number, date)'
            },
            control: {
                type: 'text'
            }
        },
        max: {
            description: 'Max',
            table: {
                type: { summary: ['number', 'string', 'date'] },
                defaultValue: { summary: 'null' },
                category: 'Props (types number, date)'
            },
            control: {
                type: 'text'
            }
        },
        focus: {
            action: 'focus',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events'
            }
        },
        blur: {
            action: 'blur',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events'
            }
        },
        input: {
            action: 'input',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events'
            }
        },
        change: {
            action: 'change',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events'
            }
        },
        click: {
            action: 'clicked',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events (type number)'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CFormInput },
        props: Object.keys(argTypes),
        data() {
            return {
                model: null
            };
        },
        template:
            '<CFormInput v-bind="$props" @focus="focus" @blur="blur" @input="input" @change="change" v-model="model" />'
    };
};

export const Default = Template.bind({});
