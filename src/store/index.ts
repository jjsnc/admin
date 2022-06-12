import { createStore } from 'vuex'

const defaultState = {
  count: 0,
  loading: false
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      // eslint-disable-next-line no-param-reassign
      state.count += 1
    },
    setLoading(state: typeof defaultState, flag) {
      state.loading = flag
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    increment(state: typeof defaultState) {
      return state.count * 2
    },
    getLoading(state: typeof defaultState) {
      return state.loading
    }
  }
})
