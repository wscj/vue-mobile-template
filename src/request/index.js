import axios from './axios'
const origin = process.env.VUE_APP_ORIGIN // 获取环境配置

export function testGet (data = {}) {
  return axios.get(origin + '/testGet', { params: data })
}

export function testPost (data = {}) {
  return axios.post(origin + '/testPost', { params: data })
}

export default {}
