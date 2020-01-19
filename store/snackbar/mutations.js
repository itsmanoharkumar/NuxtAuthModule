export default {
  showSnackBar(state, payload) {
    state.snackBarData = payload
    state.showSnackBar = true
  },
  hideSnackBar(state) {
    state.snackBarData = {}
    state.showSnackBar = false
  }
}
