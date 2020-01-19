<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" xl="3" lg="4" md="6" sm="6">
        <p class="display-1">Login</p>
        <LoginComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginComponent from '../components/Auth/LoginComponent'

export default {
  components: { LoginComponent },
  middleware: 'notAuthenticated',
  methods: {}
}
</script>
