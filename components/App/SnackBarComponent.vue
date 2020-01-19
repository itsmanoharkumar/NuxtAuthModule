<template>
  <v-snackbar v-model="showSnackBarModel" v-bind="snackBarData">
    {{ text }}
    <v-btn @click="hideSnackBar" text>
      {{ actionText }}
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SnackBarComponent',
  computed: {
    showSnackBarModel: {
      get() {
        return this.showSnackBar
      },
      set() {
        this.hideSnackBar()
      }
    },
    text() {
      return this.snackBarData.text ? this.snackBarData.text : ''
    },
    actionText() {
      return this.snackBarData.actionText
        ? this.snackBarData.actionText
        : 'Close'
    },
    ...mapState({
      showSnackBar: (state) => state.snackbar.showSnackBar,
      snackBarData: (state) => state.snackbar.snackBarData
    })
  },
  methods: {
    ...mapActions({
      hideSnackBar: 'snackbar/hideSnackBar'
    })
  }
}
</script>
