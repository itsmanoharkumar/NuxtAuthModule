<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" to="/" />
      <v-spacer />
      <LoginButton v-if="showLoginButton" :is-icon="false">Log in</LoginButton>
      <LogoutButton v-if="showLogoutButton" :is-icon="false"
        >Log out</LogoutButton
      >
      <SignUpButton v-if="showSignupButton" :is-icon="false"
        >Sign Up</SignUpButton
      >
    </v-app-bar>
    <v-content app>
      <v-container>
        <nuxt />
        <SnackBarComponent />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>fitx &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import LoginButton from '../components/Auth/LoginButton'
import LogoutButton from '../components/Auth/LogoutButton'
import SnackBarComponent from '../components/App/SnackBarComponent'
import SignUpButton from '../components/Auth/SignUpButton'
export default {
  components: { SignUpButton, SnackBarComponent, LogoutButton, LoginButton },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-information-variant',
          title: 'About',
          to: '/about'
        }
      ],
      title: 'FitX'
    }
  },
  computed: {
    showLoginButton() {
      return !this.$store.state.auth.isLoggedIn && this.$route.name !== 'login'
    },
    showLogoutButton() {
      return this.$store.state.auth.isLoggedIn && this.$route.name !== 'login'
    },
    showSignupButton() {
      return !this.$store.state.auth.isLoggedIn && this.$route.name === 'login'
    }
  }
}
</script>
