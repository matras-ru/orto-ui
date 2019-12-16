import Vue from 'vue';
import VueRouter from 'vue-router';

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

//
const routes = [
    { name: 'index', path: '/', component: () => import('@/pages/Index') },
    { name: 'test', path: '/test', component: () => import('@/pages/Test') },
    { name: 'layout', path: '/layout', component: () => import('@/pages/Layout') }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
