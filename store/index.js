const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {}
}
export const mutations = {}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      try {
        const parsed = cookieparser.parse(req.headers.cookie)
        if (parsed.authToken) {
          auth = JSON.parse(parsed.authToken)
          commit('auth/setAuthToken', auth)
        }
      } catch (err) {
        throw err
      }
    }
  }
}
