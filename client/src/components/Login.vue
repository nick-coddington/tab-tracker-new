<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
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
            v-model="password">
          </v-text-field>
          <br>
          <div class="error" v-html="error" />
          <v-btn class="cyan" dark @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const repsone = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', repsone.data.token)
        this.$store.dispatch('setUser', repsone.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>
