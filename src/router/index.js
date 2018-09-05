import Vue from 'vue'
import Router from 'vue-router'
import { getPlatform, getBrowerType } from '@/utils'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    }
  ]
})
// fix：iOS下的微信浏览器，分享页面或复制链接，其链接一直为初始页面时的链接
const isIosWx = getPlatform().os === 'iOS' && getBrowerType() === 'WX'

router.beforeEach((to, from, next) => {
  next()
  isIosWx && setTimeout(() => {
    window.location = window.location
  }, 500)
})

export default router
