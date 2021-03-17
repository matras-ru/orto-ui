import CTabPanel from './tab-panel';

export default {
    title: 'Components/Tab/CTabPanel',
    component: CTabPanel,
    argTypes: {
        tag: {
            defaultValue: 'section',
            description: 'Tag',
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
            description: 'Name',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CTabPanel },
        props: Object.keys(argTypes),
        template: '<CTabPanel v-bind="$props" />'
    };
};

export const Default = Template.bind({});
