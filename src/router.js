import Vue from 'vue';
import Router from 'vue-router';
import Invisible from './views/Invisible';
import Home from './views/Home.vue';
import Projects from './views/Projects';
import Portefolio from './views/Portefolio';
import About from './views/About.vue';
import Contact from './views/Contact';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/portefolio',
      component: Portefolio
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/invisible',
      component: Invisible
    }
  ]
});
