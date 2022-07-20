// @ts-nocheck
import { constantRoutes } from '@/router'
import { setMenus } from '@/utils/auth'
let state = {
  permission_menus: []
}
const mutations = {
  SET_MENUS: (state: any, permission_menus: any) => {
    state.permission_menus = permission_menus
  }
}

export function filterAsyncMenus(routes) {
  const res = []
  routes.forEach((route) => {
    if (route.type === 1) {
      const tmp = { ...route }
      if (tmp.children) {
        tmp.children = filterAsyncMenus(tmp.children)
      }
      res.push(tmp)
    }
  })

  return res
}

const actions = {
  // @ts-ignore
  generateMenus({ commit }, permission_menus) {
    return new Promise((resolve) => {
      let accessedMenus = filterAsyncMenus(permission_menus)
      setMenus(JSON.stringify(accessedMenus))
      commit('SET_MENUS', accessedMenus)
      resolve(accessedMenus)
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
