import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: true,

  state: {
    count: 0
  },

  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
