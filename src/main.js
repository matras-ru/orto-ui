import Vue from 'vue';
import App from './App.vue';
import OrtoUi from './index.js';

import '@/assets/css/tailwind.css';

Vue.use(OrtoUi);
Vue.config.productionTip = false;

Vue.use(OrtoUi);

new Vue({
    render: h => h(App)
}).$mount('#app');
