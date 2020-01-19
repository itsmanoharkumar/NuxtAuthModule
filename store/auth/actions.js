import login from '@/api/auth/login'
import signup from '@/api/auth/signup'

export default {
  async login({ dispatch }, payload) {
    try {
      const token = await login(this.$axios, payload)
      dispatch('setAuthToken', token)
    } catch (err) {
      throw err
    }
  },
  async signup({ dispatch }, payload) {
    try {
      const token = await signup(this.$axios, payload)
      dispatch('setAuthToken', token)
    } catch (err) {
      throw err
    }
  },
  logout({ commit }) {
    commit('logout')
  },
  setAuthToken({ commit }, payload) {
    commit('setAuthToken', payload)
  }
}
