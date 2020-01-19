import Utils from '~/utils'

export default async (axios, payload) => {
  try {
    return await axios.$post('/auth/signup', payload)
  } catch (err) {
    throw Utils.handleApiError(err)
  }
}
