import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AsthemaView from '../views/AsthmaView.vue'
import CopdView from '../views/CopdView.vue'
import NoAsthema from '../components/NoAsthema.vue'
import AsthemaC from '../components/AsthemaC.vue'
import HardAsthema from '../components/HardAsthema.vue'
import Accuhalar from '../asthema/Accuhaler.vue'
import Handihaler from '../asthema/Handihaler.vue'
import MDI from '../asthema/MDI.vue'
import Spacer from '../asthema/Spacer.vue'
import Turbuhaler from '../asthema/Turbuhaler.vue'
import NoCopd from '../components/NoCopd.vue'
import CopdC from '../components/CopdC.vue'
import HardCopd from '../components/HardCopd.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/asthema',
    name: 'asthema',
    component: AsthemaView,
  },
  {
    path: '/copd',
    name: 'copd',
    component: CopdView,
  },
  {
    path: '/noasthema',
    name: 'noasthema',
    component: NoAsthema,
  },
  {
    path: '/asthemac',
    name: 'asthemac',
    component: AsthemaC,
  },
  {
    path: '/hardAsthema',
    name: 'hardAsthema',
    component: HardAsthema,
  },
  {
    path: '/nocopd',
    name: 'nocopd',
    component: NoCopd,
  },
  {
    path: '/copdc',
    name: 'copdc',
    component: CopdC,
  },
  {
    path: '/hardCopd',
    name: 'hardCopd',
    component: HardCopd,
  },
  {
    path: '/accuhaler',
    name: 'accuhaler',
    component: Accuhalar,
  },
  {
    path: '/handihaler',
    name: 'handihaler',
    component: Handihaler,
  },
  {
    path: '/mdi',
    name: 'mdi',
    component: MDI,
  },
  {
    path: '/spacer',
    name: 'spacer',
    component: Spacer,
  },
  {
    path: '/turbuhaler',
    name: 'turbuhaler',
    component: Turbuhaler,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
