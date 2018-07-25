import '@/assets/js/index.js'
import '@/assets/scss/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import request from '@/request'
import _ from '@/util'

Vue.config.productionTip = false
Vue.prototype.$http = request
Vue.prototype.$util = _

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
