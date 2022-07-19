// @ts-nocheck
import { constantRoutes } from '@/router'

let state = {
  routes: [],
  addRoutes: []
}
const mutations = {
  SET_ROUTES: (state: any, routes: any) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

export function filterAsyncRoutes(routes) {
  const res = []

  routes.forEach((route) => {
    const tmp = { ...route }
    if (tmp.children) {
      tmp.children = filterAsyncRoutes(tmp.children)
    }
    res.push(tmp)
  })

  return res
}

const actions = {
  // @ts-ignore
  generateRoutes({ commit }, permissions) {
    return new Promise((resolve) => {
      let accessedRoutes = filterAsyncRoutes(permissions)
      console.log(accessedRoutes, '312321')
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  name: 'permission',
  state,
  mutations,
  actions
}
