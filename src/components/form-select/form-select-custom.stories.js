import CFormSelectCustom from './form-select-custom';

export default {
    title: 'Components/FormSelectCustom/CFormSelectCustom',
    component: CFormSelectCustom,
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
        placeholder: {
            defaultValue: 'Длина',
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
        data: {
            defaultValue: [
                {
                    value: 1,
                    label: 200
                },
                {
                    value: 2,
                    label: 100
                }
            ],
            description: 'Data',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
                category: 'Props'
            },
            control: {
                type: 'object'
            }
        },
        optionValue: {
            defaultValue: 'value',
            description: 'Option value',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        optionLabel: {
            defaultValue: 'label',
            description: 'Option label',
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
        useNativeList: {
            defaultValue: false,
            description: 'Use native list',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        change: {
            action: 'change',
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
        components: { CFormSelectCustom },
        props: Object.keys(argTypes),
        data() {
            return {
                model: null
            };
        },
        template: '<CFormSelectCustom v-bind="$props" @change="change" v-model="model" />'
    };
};

export const Default = Template.bind({});
