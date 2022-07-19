// @ts-nocheck

import { getToken, setToken, removeToken } from '@/utils/auth'

let state = {
  token: getToken(),
  user: {}
}

let mutations = {
  SET_TOKEN: (state: any, token: any) => {
    state.token = token
  },
  SET_USER: (state: any, user: any) => {
    state.user = user
  }
}

let actions = {
  setToken({ commit }, token) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', token)
      setToken(token)
      resolve()
    })
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      removeToken()
    })
  },
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },
  setUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('SET_USER', user)
      resolve(user)
    })
  }
}

export default {
  namespaced: true,
  name: 'user',
  state,
  mutations,
  actions
}
