import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'

import store from '@/store/index'
import { getToken } from '@/utils/auth'
// const baseURL = '/dev-api'
const baseURL = 'http://backend.testc.northlife.com.cn'
const service = axios.create({
  baseURL: baseURL,
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    if (store.getters.token) {
      // @ts-ignore
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    if (res.code !== 20000 && res.code !== '1') {
      ElMessage({
        message: res.desc || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        ElMessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout',
          {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
        return Promise.reject(new Error(res.desc || 'Error'))
      }
    } else {
      return res
    }
  },
  (error) => {
    console.log(error, 111)
    ElMessage({
      message: error.desc,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// response interceptor

export default service
