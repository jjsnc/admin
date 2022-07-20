// @ts-nocheck
import { constantRoutes } from '@/router'
import { setMenus } from '@/utils/auth'
let MenuIcon = {
  用户管理: 'UserFilled',
  商户: 'Management',
  商品: 'GoodsFilled',
  订单: 'TrendCharts',
  营销: 'Promotion',
  运营: 'HelpFilled',
  目的地攻略: 'LocationFilled',
  公众号: 'StarFilled',
  设置: 'Tools'
}
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
      const tmp = { ...route, icon: MenuIcon[route.name] }
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
