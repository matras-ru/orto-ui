import CCheckboxGroup from './checkbox-group';
import CCheckbox from './checkbox';

export default {
    title: 'Components/Checkbox/CCheckboxGroup',
    component: CCheckboxGroup,
    argTypes: {
        modelValue: {
            description: 'Model value',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        data: {
            defaultValue: [
                {
                    id: 'chkb1',
                    label: 'chkb1',
                    name: 'chkb1',
                    value: 'chkb1'
                },
                {
                    id: 'chkb2',
                    label: 'chkb2',
                    name: 'chkb2',
                    value: 'chkb2'
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
        components: { CCheckboxGroup, CCheckbox },
        props: Object.keys(argTypes),
        template: '<CCheckboxGroup v-bind="$props" @change="change"/>'
    };
};

export const Default = Template.bind({});
