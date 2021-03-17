import CContainer from './container';
import CRow from './row';
import CCol from './col';

export default {
    title: 'Components/Layout/CContainer',
    component: CContainer,
    argTypes: {
        fluid: {
            defaultValue: false,
            description: 'Fluid',
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
        components: { CContainer },
        props: Object.keys(argTypes),
        template: '<CContainer v-bind="$props" />'
    };
};

export const Default = Template.bind({});

export const Example = (args, { argTypes }) => {
    return {
        components: { CContainer, CRow, CCol },
        props: Object.keys(argTypes),
        template:
            '<CContainer v-bind="$props"><CRow><CCol :cols=6><div class="bg-primary-100 p-0-6">Column 6/12</div></CCol><CCol :cols=6><div class="bg-primary-100 p-0-6">Column 6/12</div></CCol></CRow></CContainer>'
    };
};
