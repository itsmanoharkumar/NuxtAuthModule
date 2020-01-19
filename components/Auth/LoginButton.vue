<template>
  <v-btn :icon="isIcon" to="/login">
    <slot>
      <v-icon>mdi-login</v-icon>
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {
    isIcon: {
      type: Boolean,
      default: true
    }
  }
}
</script>
