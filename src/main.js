import Vue from 'vue';
import App from './App.vue';
import VueImg from 'v-img';

Vue.use(VueImg);
import VueGallery from 'vue-gallery';

Vue.component('VGallery', VueGallery)

import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
