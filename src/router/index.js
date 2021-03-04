import Vue from 'vue'
import VueRouter from 'vue-router'
import ChooseModel from '../views/ChooseModel.vue'
import ChoosePackaging from '../views/ChoosePackaging.vue'
import Emblem from '../views/Emblem.vue'
import EndOrder from "../views/EndOrder.vue"
import Eticket from '../views/Eticket.vue'
import Format from '../views/Format.vue'
import Marvel from '../views/Marvel.vue'
import ChoosePrint from '../views/ChoosePrint.vue'
import Packaging from '../views/Packaging.vue'
import Payment from '../views/Payment.vue'
import Pictogram from '../views/Pictogram'
import SummaryOrder from '../views/SummaryOrder'
import WriteWord from '../views/WriteWord'
import Home from '../views/Home'

Vue.use(VueRouter)

const ns = "Tatie Odette - ";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ChooseModel',
    name: 'ChooseModel',
    component: ChooseModel,
  },
  {
    path: '/ChoosePackaging',
    name: 'ChoosePackaging',
    component: ChoosePackaging,
  },
  {
    path: '/Emblem',
    name: 'Emblem',
    component: Emblem,
  },
  {
    path: '/EndOrder',
    name: 'EndOrder',
    component: EndOrder,
  },
  {
    path: '/Eticket',
    name: 'Eticket',
    component: Eticket,
  },
  
  {
    path: '/Format',
    name: 'Format',
    component: Format,
  },
  
  {
    path: '/Marvel',
    name: 'Marvel',
    component: Marvel,
  },

  {
    path: '/ChoosePrint',
    name: 'ChoosePrint',
    component: ChoosePrint,
  },

  {
    path: '/Packaging',
    name: 'Packaging',
    component: Packaging,
  },

    {
      path: '/Payment',
      name: 'Payment',
      component: Payment,

  },

  {
    path: '/Pictogram',
    name: 'Pictogram',
    component: Pictogram,
},

{
  path: '/SummaryOrder',
  name: 'SummaryOrder',
  component: SummaryOrder
},

{
  path: '/WriteWord',
  name: 'WriteWord',
  component: WriteWord
},
]

const router = new VueRouter({
  routes
})

export default router
