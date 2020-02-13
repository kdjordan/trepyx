import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'

import VueScrollTo from 'vue-scrollto';

import Home from './components/Home.vue'
import Contact from './components/Contact.vue'


Vue.use(Vuerouter)
Vue.use(VueScrollTo)


const routes = [
  {path: '/', component: Home},
  {path: '/contact', component: Contact}
]

const router = new Vuerouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//L2s21~31@311