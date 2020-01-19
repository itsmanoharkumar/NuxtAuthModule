<template>
  <div>
    <v-btn @click="showSnackBar">show snackbar</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    showSnackBar() {
      this.showSnackBarAction({
        text: 'hello'
      })
    },
    ...mapActions({
      showSnackBarAction: 'snackbar/showSnackBar'
    })
  }
}
</script>
