import CCol from './col';

export default {
    title: 'Components/Layout/CCol',
    component: CCol,
    argTypes: {
        cols: {
            description: 'Cols',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'number',
                min: 1,
                step: 1,
                max: 12
            }
        },
        offset: {
            description: 'Offset',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'number'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CCol },
        props: Object.keys(argTypes),
        template: '<CCol v-bind="$props" />'
    };
};

export const Default = Template.bind({});
