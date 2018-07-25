import '@/assets/js/index.js'
import '@/assets/scss/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from '@/request'

Vue.config.productionTip = false
Vue.prototype.$http = request

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
