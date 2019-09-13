import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'
import router from './router'

// CSS imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueParticles)

Vue.config.productionTip = false

window.App = new Vue({
  router,
  render: h => h(App)  
}).$mount('#app')
