
export default {
  namespaced: true,
  name: 'settings',
  state: () => ({ sidebarLogo: false }),
  mutations: {

    CHANGE_SETTING: (state: any, { key='sidebarLogo', value=true }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting({ commit=(type:any,data:any,)=>{} }, data:any) {
      commit('CHANGE_SETTING', data)
    }
  },
  getters: {}
}
