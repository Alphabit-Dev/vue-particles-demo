import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'
import VueAgile from 'vue-agile'

// CSS imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueParticles)
Vue.use(VueObserveVisibility)
Vue.use(VueAgile)

Vue.config.productionTip = false

window.App = new Vue({
  router,
  render: h => h(App)  
}).$mount('#app')
