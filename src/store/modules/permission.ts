// @ts-nocheck
import { setRoutes } from '@/utils/auth'
import Layout from '@/layout/index.vue'
let state = {
  routes: [],
  addRoutes: []
}
const mutations = {
  SET_ROUTES: (state: any, routes: any) => {
    state.addRoutes = routes
    setRoutes(JSON.stringify(routes))
    state.routes = routes
  }
}

export function filterAsyncRoutes(routes) {
  const res = []
  routes.forEach((route) => {
    tmp = {}
    if (route.type === 1) {
      if (route.children.length > 0) {
        tmp = { ...route, component: Layout }
      } else {
        tmp = { ...route }
      }
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children)
      }
      res.push(tmp)
    }
  })

  return res
}

const actions = {
  // @ts-ignore
  generateRoutes({ commit }, permissions) {
    return new Promise((resolve) => {
      let accessedRoutes = filterAsyncRoutes(permissions)
      accessedRoutes = accessedRoutes

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
