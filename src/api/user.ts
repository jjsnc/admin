import request from '@/utils/request'
interface Params {
  id?: string
  username?: string
  password?: string
  codeKey?: string
  captcha?: string
  env?: string
  loginMode?: string
  appCode?: string
}

export function login(data: any) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token: any) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getCode() {
  return request({
    url: '/backend/ops/captcha/145/40',
    method: 'post'
  })
}

export function getLogin(params: Params) {
  return request({
    url: '/ops/login',
    method: 'post',
    data: params
  })
}
