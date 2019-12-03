import Vue from 'vue';
import App from './App.vue';
import OrtoUi from './index';

import '@/assets/css/tailwind.css';

// import * as CustomTheme from '@/themes/custom/index';

// import { CButton } from './index';

// const customConfig = {
//     CButton: {
//         variant: 'tertiary',
//         size: 'lg',
//         tag: 'button'
//     }
// };

Vue.use(OrtoUi);

// const btnTheme = {
//     baseClass:
//         'inline-block align-top rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3 mb-1-4',
//     smallSizeClass: 'text-2xl px-1-3 py-0-3 leading-snug',
//     secondaryClass:
//         'bg-white border-secondary-200 text-secondary-200 transition-bg transition-color hover:text-white hover:bg-secondary-200'
// };

// Vue.use(CButton, btnTheme);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
