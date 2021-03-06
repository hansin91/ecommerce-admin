import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import dashboard from './modules/dashboard'
import category from './modules/category'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    dashboard,
    category,
    product
  }
})
