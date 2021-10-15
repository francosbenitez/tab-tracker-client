<template>
  <b-container fluid>
    <div class="row justify-content-center">
        <div class="col-md-4 col-md-offset-4">
        <!-- <h1>Login</h1> -->
        <Panel title="Login">
          <b-form>
            <b-form-group
              label="Email"
              label-for="emailId"
              description=""
              >
              <b-form-input
                id="emailId"
                v-model="email"
                placeholder="Enter your email"
                required
              ></b-form-input>
            </b-form-group>
            <br />
            <b-form-group
              label="Password"
              label-for="passwordId"
              description=""
              >
              <b-form-input
                id="passwordId"
                v-model="password"
                type="password"
                placeholder="Enter your password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
          <br />
          <div class="error" v-html="error" />
          <br />
          <div>
            <b-button
              @click="login">
              Login
            </b-button>
          </div>
        </Panel>
      </div>
    </div>
  </b-container>
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
