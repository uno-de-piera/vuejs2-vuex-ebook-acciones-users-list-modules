import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import usersModule from './modules/usersModule'

export default new Vuex.Store({
  modules: {
      usersModule
  }
})
