import actions from './actions'
import mutations from './mutations'
import getters from './gettters'

const state = {
  isAuthenticated: false,
  errors: [],
  success: [],
  isLoading: false
}

export default {
  state,
  mutations,
  actions,
  getters
}
