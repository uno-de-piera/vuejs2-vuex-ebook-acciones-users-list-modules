import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers (state, users) {
      state.users = users;
    }
  },
  actions: {
    async fetchUsers ({commit}) {
      const response = await fetch('users.json')
      const data = await response.json();
      commit('setUsers', data)
    }
  }
})
