import CForm from './form';

export default {
    title: 'Components/Form/CForm',
    component: CForm
};

const Template = () => {
    return {
        components: { CForm },
        template: '<CForm />'
    };
};

export const Default = Template.bind({});
