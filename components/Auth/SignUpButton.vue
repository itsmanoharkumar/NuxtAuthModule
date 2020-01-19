<template>
  <v-btn :icon="isIcon" to="/signup">
    <slot>
      <v-icon>mdi-account-plus</v-icon>
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'SignUpButton',
  props: {
    isIcon: {
      type: Boolean,
      default: true
    }
  }
}
</script>
