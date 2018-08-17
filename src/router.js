import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Video from './views/Video.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/photo',
      name: 'photo',
      component: Home
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
