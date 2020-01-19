<template>
  <form>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
    />
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
      name="password"
      label="Password"
      hint="Password must contain 1 uppercase, 1 lowercase, 1 number or special character"
    />

    <!--    <v-text-field v-model="password" label="Password" type="password" />-->
    <v-row>
      <v-col cols="auto">
        <v-btn @click="submit" :disabled="isDisabled" class="mr-4"
          >Sign up</v-btn
        >
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
    email: { required, email },
    password: {
      required,
      strongPassword(password) {
        return (
          /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
            password
          ) && password.length >= 6
        )
      }
    }
  },

  data: () => ({
    email: '',
    password: '',
    isDisabled: false,
    showPassword: false
  }),

  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.strongPassword && errors.push('Weak password')
      !this.$v.password.required && errors.push('Password is required')
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
          await this.signup({
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
      signup: 'auth/signup',
      showSnackBar: 'snackbar/showSnackBar'
    })
  }
}
</script>
