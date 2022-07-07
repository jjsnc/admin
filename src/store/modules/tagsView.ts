// @ts-nocheck
const state = {
  visitedViews: [],
  cachedViews: []
}
const mutations = {
  DEL_ALL_CACHED_VIEWS: (state) => {
    state.cachedViews = []
  }
}

const actions = {
  delAllCachedViews({ commit, state }) {
    return new Promise((resolve) => {
      commit('DEL_ALL_CACHED_VIEWS')
      resolve([...state.cachedViews])
    })
  }
}

export default {
  namespaced: true,
  name: 'tagsView',
  state,
  mutations,
  actions
}
