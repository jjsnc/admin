import defaultSettings from '@/settings'
const { showSettings, fixedHeader, tagsView, sidebarLogo } = defaultSettings

const state = {
  sidebarLogo: sidebarLogo,
  tagsView: tagsView,
  fixedHeader: fixedHeader
}

const mutations = {
  // @ts-ignore
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  // @ts-ignore
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}
export default {
  namespaced: true,
  name: 'settings',
  state,
  mutations,
  actions
}
