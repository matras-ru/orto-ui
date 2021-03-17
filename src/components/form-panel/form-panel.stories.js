import CFormPanel from './form-panel';

export default {
    title: 'CFormPanel',
    component: CFormPanel,
    argTypes: {
        label: {
            defaultValue: 'Form Panel',
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
        collapsible: {
            defaultValue: false,
            description: 'Collapsible',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        collapsed: {
            defaultValue: false,
            description: 'Collapsed',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CFormPanel },
        props: Object.keys(argTypes),
        template: '<CFormPanel v-bind="$props" />'
    };
};

export const Default = Template.bind({});
