import '@/assets/js/index.js'
import '@/assets/scss/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Bus from '@/bus/index.js'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
