import CRadioGroup from './radio-group';
import CRadio from './radio';

export default {
    title: 'Components/Radio/CRadioGroup',
    component: CRadioGroup,
    argTypes: {
        modelValue: {
            description: 'Model value',
            table: {
                type: { summary: ['string', 'number', 'boolean'] },
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
                    id: 'radio1',
                    label: 'radio1',
                    name: 'radio',
                    value: 'radio1'
                },
                {
                    id: 'radio2',
                    label: 'radio2',
                    name: 'radio',
                    value: 'radio2'
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
        components: { CRadioGroup, CRadio },
        props: Object.keys(argTypes),
        template: '<CRadioGroup v-bind="$props" @change="change"/>'
    };
};

export const Default = Template.bind({});
