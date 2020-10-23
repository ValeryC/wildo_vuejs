import Vue from 'vue'
import Router from 'vue-router'
import Invisible from './views/Invisible.vue'
import Invisible2 from './views/Invisible2.vue'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import Projects from './views/Projects.vue'
import Portefolio from './views/Portefolio.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/gallery',
      component: Gallery,
    },
    {
      path: '/projects',
      component: Projects,
    },
    {
      path: '/portefolio',
      component: Portefolio,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/invisible',
      component: Invisible,
    },
    {
      path: '/invisible2',
      component: Invisible2,
    },
  ],
})
