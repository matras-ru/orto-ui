import Vue from 'vue';
import OrtoUi from '@/index';
import '@/assets/css/tailwind.css';

const customConfig = {
    common: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px'
        }
    },
    CFormSelectCustom: {
        optionValue: 'value',
        optionLabel: 'label',
        dropdownVariant: 'secondary'
    }
};

Vue.use(OrtoUi, {
    config: customConfig
});
