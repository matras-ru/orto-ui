import CTabs from './tabs';
import CTab from './tab';
import CTabPanels from './tab-panels';
import CTabPanel from './tab-panel';

export default {
    title: 'Components/Tab/CTabs',
    component: CTabs,
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
        vertical: {
            defaultValue: false,
            description: 'Vertical',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        justify: {
            defaultValue: 'start',
            description: 'Justify',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['start', 'end', 'between', 'center']
            }
        },
        onChange: {
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
        components: { CTabs },
        props: Object.keys(argTypes),
        template: '<CTabs v-bind="$props" @onClick="onChange" />'
    };
};

export const Default = Template.bind({});

export const Example = (args, { argTypes }) => {
    return {
        components: { CTabs, CTab, CTabPanels, CTabPanel },
        props: Object.keys(argTypes),
        data() {
            return {
                activeTab: 'description'
            };
        },
        template:
            '<div><CTabs v-model="activeTab" justify="between" class="overflow-x-auto"><CTab label="Description" name="description" class="whitespace-nowrap" /><CTab label="Parameters" name="parameters" class="whitespace-nowrap" /></CTabs><CTabPanels v-model="activeTab" class="p-1-5"><CTabPanel name="description"><div>Content for description</div></CTabPanel><CTabPanel name="parameters"><div>Content for parameters</div></CTabPanel></CTabPanels></div>'
    };
};
