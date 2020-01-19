<template>
  <v-btn :icon="isIcon" @click="logout">
    <slot>
      <v-icon>mdi-logout</v-icon>
    </slot>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LogoutButton',
  props: {
    isIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    logout() {
      this.logout()
    },
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>
