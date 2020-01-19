<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" xl="3" lg="4" md="6" sm="6">
        <p class="display-1">Sign Up</p>
        <SignUpComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignUpComponent from '../components/Auth/SignUpComponent'

export default {
  components: { SignUpComponent },
  middleware: 'notAuthenticated',
  methods: {}
}
</script>
