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
import BackOffice from '../views/BackOffice'
import ProgrammationAdminister from '../views/ProgrammationAdminister'


Vue.use(VueRouter)

const ns = "Nation Sounds - ";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: ns + "Accueil"
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: ns + "Contact"
    }
  },
  {
    path: '/GeneralInformations',
    name: 'GeneralInformations',
    component: GeneralInformations,
    meta: {
      title: ns + "Informations générales"
    }
  },
  {
    path: '/LegalNotice',
    name: 'LegalNotice',
    component: LegalNotice,
    meta: {
      title: ns + "Mentions légales"
    }
  },
  {
    path: '/Map',
    name: 'Map',
    component: Map,
    meta: {
      title: ns + "Plan"
    }
  },
  {
    path: '/MeetArtists',
    name: 'MeetArtists',
    component: MeetArtists,
    meta: {
      title: ns + "Rencontrer les artistes"
    }
  },
  
  {
    path: '/Partners',
    name: 'Partners',
    component: Partners,
    meta: {
      title: ns + "Partenaires"
    }
  },
  
  {
    path: '/PraticalInformations',
    name: 'PraticalInformations',
    component: PraticalInformations,
    meta: {
      title: ns + "Informations Pratiques"
    }
  },

  {
    path: '/Programmation',
    name: 'Programmation',
    component: Programmation,
    meta: {
      title: ns + "Programmation"
    }
  },

  {
    path: '/TicketOffice',
    name: 'TicketOffice',
    component: TicketOffice,
    meta: {
      title: ns + "Billetterie"
    }
  },

    {
      path: '/BackOffice',
      name: 'BackOffice',
      component: BackOffice,
      meta: {
        title: ns + "Back Office"
      }
  },

  {
    path: '/ProgrammationAdminister',
    name: 'ProgrammationAdminister',
    component: ProgrammationAdminister,
    meta: {
      title: ns + "Programmation Administer"
    }
},
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
