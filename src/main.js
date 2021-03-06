import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import store from './store/store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
import VueScrollTo from 'vue-scrollto'

import Home from './components/Home.vue'
import TOS from './components/TOS.vue'
import Quote from './components/Quote.vue'

Vue.use(VueAxios, axios)
Vue.use(Vuerouter)
Vue.use(VueScrollTo)
Vue.use(store)

const routes = [
  {path: '/', component: Home},
  {path: '/tos', component: TOS},
  {path: '/quote', component: Quote},
]

const router = new Vuerouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


//L2s21~31@311