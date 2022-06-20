import { createStore } from 'vuex'
import getters from './getters'
const modulesFiles =import.meta.globEager("./modules/*.ts") // vite


let modules:any = {}
Object.values(modulesFiles).map((v) => {
  const name = v.default.name
  modules[name] = v.default
})




export default createStore({
  modules,
  getters,
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
