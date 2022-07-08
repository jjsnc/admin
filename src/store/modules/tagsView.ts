// @ts-nocheck
const state = {
  visitedViews: [],
  cachedViews: []
}
const mutations = {
  DEL_ALL_CACHED_VIEWS: (state) => {
    state.cachedViews = []
  },
  DEL_ALL_VISITED_VIEWS: (state) => {
    // keep affix tags
    const affixTags = state.visitedViews.filter((tag) => tag.meta.affix)
    state.visitedViews = affixTags
  }
}

const actions = {
  delAllCachedViews({ commit, state }) {
    return new Promise((resolve) => {
      commit('DEL_ALL_CACHED_VIEWS')
      resolve([...state.cachedViews])
    })
  },
  delAllViews({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delAllVisitedViews({ commit, state }) {
    return new Promise((resolve) => {
      commit('DEL_ALL_VISITED_VIEWS')
      resolve([...state.visitedViews])
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
