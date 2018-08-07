import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import _ from '@/util'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
// fix：iOS下的微信浏览器，分享页面或复制链接，其链接一直为初始页面时的链接
const isIosWx = _.getPlatform().os === 'iOS' && _.getBrowerType() === 'WX'

// 部分页面要求登陆状态，若未登陆则自动跳转到登陆页，登陆完成自动跳回来
router.beforeEach((to, from, next) => {
  next()
  isIosWx && setTimeout(() => {
    window.location = window.location
  }, 500)
})

export default router
