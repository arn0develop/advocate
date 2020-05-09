import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Contacts from './views/Contacts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },
    {
      path: '/Services',
      name: 'services',
      component: Services
    },
    {
      path: '/Contacts',
      name: 'contacts',
      component: Contacts
    }
  ]
})
