import Axios from 'axios'
import payload from './payload.js'
import _ from '@/util'
// import Router from '@/router'

// 创建axios实例
const axios = Axios.create({
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  },
  // 跨域发送cookie
  withCredentials: true
})

// api接口全局请求拦截器， 用于发送ajax时格式化空参数
axios.interceptors.request.use(function (config) {
  // 请求header带上token
  // if (localStorage.getItem('token')) {
  //   config.headers.common['Authorization'] = 'Bearer ' + token
  // }

  if (config.method === 'get') {
    config.params = _.formatParams(config.params)
  }

  // 合并api全局参数
  if (config.method === 'post') {
    let params = Object.assign({}, payload)
    params.data = _.formatParams(config.data)
    config.data = params
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// api接口全局响应拦截器，用于转换错误提示信息
axios.interceptors.response.use(function (response) {
  // if (服务器返回未登录) {
  //   Router.replace({ path: '/login' })
  //   throw new Error('拦截错误: ')
  // }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default axios
