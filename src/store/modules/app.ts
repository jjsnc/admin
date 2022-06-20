import Cookies from 'js-cookie'

export default {
  namespaced: true,
  name: 'app',
  state: () => ({
    sidebar: {
      // @ts-ignore
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    }
  }),
  mutations: {
    TOGGLE_SIDEBAR: (state: any) => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        // @ts-ignore
        Cookies.set('sidebarStatus', 1)
      } else {
        // @ts-ignore
        Cookies.set('sidebarStatus', 0)
      }
    },
    // @ts-ignore
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      // @ts-ignore
      Cookies.set('sidebarStatus', 0)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    }
  }
}
