import axios from 'axios'

const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
}, err => Promise.reject(err))

// 相应拦截器
request.interceptors.response.use((response) => {
  return response
}, err => Promise.reject(err))

export default request