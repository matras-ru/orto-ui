import CListToggle from './list-toggle';
import CList from '../list/list';
import CListItem from '../list/list-item';
import CLink from '../link/link';

export default {
    title: 'Components/List/CListToggle',
    component: CListToggle,
    argTypes: {
        limit: {
            defaultValue: 5,
            description: 'Limit',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'number',
                min: 1,
                step: 1
            }
        }
    }
};

export const Example = (args, { argTypes }) => {
    return {
        components: { CListToggle, CList, CListItem, CLink },
        props: Object.keys(argTypes),
        data() {
            return {
                list: [
                    {
                        title: '80 x 180'
                    },
                    {
                        title: '80 x 190'
                    },
                    {
                        title: '80 x 200'
                    },
                    {
                        title: '90 x 180'
                    },
                    {
                        title: '90 x 190'
                    },
                    {
                        title: '90 x 200'
                    },
                    {
                        title: '100 x 180'
                    },
                    {
                        title: '100 x 190'
                    },
                    {
                        title: '100 x 200'
                    },
                    {
                        title: '120 x 180'
                    },
                    {
                        title: '120 x 190'
                    },
                    {
                        title: '120 x 200'
                    },
                    {
                        title: '140 x 180'
                    },
                    {
                        title: '140 x 190'
                    },
                    {
                        title: '140 x 200'
                    }
                ]
            };
        },
        template:
            '<CListToggle v-bind="$props"><template #wrap><CList /></template><template #show><CListItem><CLink>More</CLink></CListItem></template><CListItem v-for="({ title }, idx) in list" :key="idx">{{ title }}</CListItem></CListToggle>'
    };
};
