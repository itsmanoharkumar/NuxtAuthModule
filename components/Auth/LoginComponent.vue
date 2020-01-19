<template>
  <form>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
    />
    <v-text-field v-model="password" label="Password" type="password" />
    <v-row>
      <v-col cols="auto">
        <v-btn @click="submit" :disabled="isDisabled" class="mr-4">Login</v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email }
  },

  data: () => ({
    email: '',
    password: '',
    isDisabled: false
  }),

  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    async submit() {
      this.$v.$touch()
      if (!this.$v.$anyError) {
        this.isDisabled = true
        this.$nuxt.$loading.start()
        try {
          await this.login({
            email: this.email,
            password: this.password
          })
        } catch (err) {
          this.showSnackBar({
            text: err.message,
            color: 'error',
            timeout: 3000
          })
        } finally {
          this.isDisabled = false
          this.$nuxt.$loading.finish()
        }
      }
    },
    ...mapActions({
      login: 'auth/login',
      showSnackBar: 'snackbar/showSnackBar'
    })
  }
}
</script>
