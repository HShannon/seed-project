import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
let debug = process.env.NODE_ENV != 'production'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default store;