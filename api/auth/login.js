import Utils from '~/utils'

export default async (axios, payload) => {
  try {
    return await axios.$post('/auth/signin', payload)
  } catch (e) {
    throw Utils.handleApiError(e)
  }
}
