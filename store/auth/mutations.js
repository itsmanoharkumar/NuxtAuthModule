const Cookie = process.client ? require('js-cookie') : undefined

export default {
  setAuthToken(state, authToken) {
    state.authToken = authToken
    state.isLoggedIn = true
    if (Cookie) {
      Cookie.set('authToken', state.authToken)
    }
    this.$router.push('/')
  },
  logout(state) {
    Cookie.remove('authToken')
    state.authToken = null
    state.isLoggedIn = false
  }
}
