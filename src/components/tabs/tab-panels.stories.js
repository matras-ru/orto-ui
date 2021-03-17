import CTabPanels from './tab-panels';

export default {
    title: 'Components/Tab/CTabPanels',
    component: CTabPanels,
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
        lazy: {
            defaultValue: false,
            description: 'lazy',
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
        components: { CTabPanels },
        props: Object.keys(argTypes),
        template: '<CTabPanels v-bind="$props" />'
    };
};

export const Default = Template.bind({});
