export default class Utils {
  static handleApiError(err) {
    const error = new Error()
    if (err) {
      if (err.response) {
        err = err.response
        if (err.status === 400) {
          if (err.data.message.length) {
            error.message = err.data.message[0].constraints.matches
          } else {
            error.message = err.data.message
          }
        } else {
          error.message = err.data.message
        }
      } else if (err.message) {
        error.message = err.message
      } else {
        error.message = 'Internal Server Error'
      }
    }
    return error
  }
}
