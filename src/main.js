import Vue from 'vue'
import VueImg from 'v-img'
import VueGallery from 'vue-gallery'
import App from './App.vue'
import router from './router'

Vue.use(VueImg)
Vue.component('VGallery', VueGallery)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
