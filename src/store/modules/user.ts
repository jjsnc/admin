import { login, logout, getInfo } from '@/api/user'

import { getToken, setToken, removeToken } from '@/utils/auth'

let state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

let mutations = {
  SET_TOKEN: (state: any, token: any) => {
    state.token = token
  },
  SET_INTRODUCTION: (state: any, introduction: any) => {
    state.introduction = introduction
  },
  SET_NAME: (state: any, name: any) => {
    state.name = name
  },
  SET_AVATAR: (state: any, avatar: any) => {
    state.avatar = avatar
  },
  SET_ROLES: (state: any, roles: any) => {
    state.roles = roles
  }
}

let actions = {
  //user login
  // @ts-ignore
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          // @ts-ignore
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // user logout
  // @ts-ignore
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      logout(state.token)
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()

          // reset visited views and cached views
          // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
          dispatch('tagsView/delAllViews', null, { root: true })
          // @ts-ignore
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // remove token
  // @ts-ignore
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      // @ts-ignore
      resolve()
    })
  },
  // @ts-ignore
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          const { data } = response
          if (!data) {
            reject('Verification failed, please Login again.')
          }
          const { roles, name, avatar, introduction } = data
          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }

          commit('SET_ROLES', roles)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
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
