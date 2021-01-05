import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from '../views/Contact.vue'
import GeneralInformations from '../views/GeneralInformations.vue'
import Home from '../views/Home.vue'
import Programmation from "../views/Programmation.vue"
import LegalNotice from '../views/LegalNotice.vue'
import Map from '../views/Map.vue'
import MeetArtists from '../views/MeetArtists.vue'
import Partners from '../views/Partners.vue'
import PraticalInformations from '../views/PraticalInformations.vue'
import TicketOffice from '../views/TicketOffice.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/GeneralInformations',
    name: 'GeneralInformations',
    component: GeneralInformations
  },
  {
    path: '/LegalNotice',
    name: 'LegalNotice',
    component: LegalNotice
  },
  {
    path: '/Map',
    name: 'Map',
    component: Map
  },
  {
    path: '/MeetArtists',
    name: 'MeetArtists',
    component: MeetArtists
  },
  
  {
    path: '/Partners',
    name: 'Partners',
    component: Partners
  },
  
  {
    path: '/PraticalInformations',
    name: 'PraticalInformations',
    component: PraticalInformations
  },

  {
    path: '/Programmation',
    name: 'Programmation',
    component: Programmation,
  },

  {
    path: '/TicketOffice',
    name: 'TicketOffice',
    component: TicketOffice
  },
]

const router = new VueRouter({
  routes
})

export default router
