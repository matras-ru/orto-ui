import CDropdown from './dropdown';
import CLink from '../link/link';
import CList from '../list/list';
import CListItem from '../list/list-item';

export default {
    title: 'Components/Dropdown/CDropdown',
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

export const Example = (args, { argTypes }) => {
    return {
        components: { CDropdown, CLink, CList, CListItem },
        props: Object.keys(argTypes),
        data() {
            return {
                list: [
                    {
                        id: 1,
                        label: 'List item 1'
                    },
                    {
                        id: 2,
                        label: 'List item 2'
                    },
                    {
                        id: 3,
                        label: 'List item 3'
                    },
                    {
                        id: 4,
                        label: 'List item 4'
                    },
                    {
                        id: 5,
                        label: 'List item 5'
                    }
                ]
            };
        },
        template:
            '<CDropdown v-bind="$props"><template #holder="{ toggle }"><CLink variant="primary" @click="toggle">Dropdown label</CLink></template><template #dropdown="{ toggle }"><CList class="p-0-6 list-disc list-inside"><CListItem v-for="({ id, label }) in list" :key="id">{{ label }}</CListItem></CList></template></CDropdown>'
    };
};
