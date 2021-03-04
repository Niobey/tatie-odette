import Vue from 'vue'
import VueRouter from 'vue-router'
import ChooseModele from '../views/ChooseModele.vue'
import ChoosePackaging from '../views/ChoosePackaging.vue'
import Emblem from '../views/Emblem.vue'
import EndOrder from "../views/EndOrder.vue"
import Eticket from '../views/Eticket.vue'
import Format from '../views/Format.vue'
import Marvel from '../views/Marvel.vue'
import Option from '../views/Option.vue'
import Packaging from '../views/Packaging.vue'
import Payment from '../views/Payment.vue'
import Pictogram from '../views/Pictogram'
import SummaryOrder from '../views/SummaryOrder'
import WriteWord from '../views/WriteWord'

Vue.use(VueRouter)

const ns = "Tatie Odette - ";

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
    path: '/ChooseModele',
    name: 'ChooseModele',
    component: ChooseModele,
    meta: {
      title: ns + "ChooseModele"
    }
  },
  {
    path: '/ChoosePackaging',
    name: 'ChoosePackaging',
    component: ChoosePackaging,
    meta: {
      title: ns + "Informations générales"
    }
  },
  {
    path: '/Emblem',
    name: 'Emblem',
    component: Emblem,
    meta: {
      title: ns + "Emblem"
    }
  },
  {
    path: '/EndOrder',
    name: 'EndOrder',
    component: EndOrder,
    meta: {
      title: ns + "EndOrder"
    }
  },
  {
    path: '/Eticket',
    name: 'Eticket',
    component: Eticket,
    meta: {
      title: ns + "Eticket"
    }
  },
  
  {
    path: '/Format',
    name: 'Format',
    component: Format,
    meta: {
      title: ns + "Format"
    }
  },
  
  {
    path: '/Marvel',
    name: 'Marvel',
    component: Marvel,
    meta: {
      title: ns + "Marvel"
    }
  },

  {
    path: '/Option',
    name: 'Option',
    component: Option,
    meta: {
      title: ns + "Option"
    }
  },

  {
    path: '/Packaging',
    name: 'Packaging',
    component: Packaging,
    meta: {
      title: ns + "Packaging"
    }
  },

    {
      path: '/Payment',
      name: 'Payment',
      component: Payment,
      meta: {
        title: ns + "Payment"
      }
  },

  {
    path: '/Pictogram',
    name: 'Pictogram',
    component: Pictogram,
    meta: {
      title: ns + "Pictogram"
    }
},

{
  path: '/SummaryOrder',
  name: 'SummaryOrder',
  component: SummaryOrder,
  meta: {
    title: ns + "SummaryOrder"
  }
},

{
  path: '/WriteWord',
  name: 'WriteWord',
  component: WriteWord,
  meta: {
    title: ns + "WriteWord"
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
