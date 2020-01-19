export default {
  showSnackBar({ commit }, payload) {
    commit('showSnackBar', payload)
  },
  hideSnackBar({ commit }) {
    commit('hideSnackBar')
  }
}
