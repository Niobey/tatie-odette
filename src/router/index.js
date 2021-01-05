import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
  },
  {
    path: '/GeneralInformations&Actuality',
    name: 'GeneralInformations&Actuality',
  },
  {
    path: '/LegalNotice',
    name: 'LegalNotice',
  },
  {
    path: '/Map',
    name: 'Map',
    component:Map,
  },
  {
    path: '/MeetArtists',
    name: 'MeetArtists',
  },
  
  {
    path: '/Partners',
    name: 'Partners',
  },
  
  {
    path: '/PraticalInformations',
    name: 'PraticalInformations',
  },

  {
    path: '/Programmation',
    name: 'Programmation',
  },

  {
    path: '/TicketOffice',
    name: 'TicketOffice',
  },
]

const router = new VueRouter({
  routes
})

export default router
