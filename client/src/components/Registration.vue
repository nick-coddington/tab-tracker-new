<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="cyan">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
          <v-text-field
            Label="Email"
            placeholder="Email"
            v-model="email">
            </v-text-field>
          <br>
          <v-text-field
            Label="Password"
            placeholder="Password"
            type="password"
            auto-complete="new-password"
            v-model="password">
          </v-text-field>
          </form>
          <br>
          <div class="error" v-html="error" />
          <v-btn class="cyan" dark @click="register">Register</v-btn>
          </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const repsone = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', repsone.data.token)
        this.$store.dispatch('setUser', repsone.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>
