import api from './api'
import axios from './axios'

const obj = {}

obj.testGet = async (data = {}) => {
  const res = await axios.get(api.testGet, { params: data })
  return res
}

obj.testPost = async (data = {}) => {
  const res = await axios.post(api.testPost, { params: data })
  return res
}

export default obj
