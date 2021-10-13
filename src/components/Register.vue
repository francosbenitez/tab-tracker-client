<template>
  <b-container fluid>
    <div class="row justify-content-center">
      <div class="col-md-4 col-md-offset-4 border">
        <Panel title="Register">
          <b-form>
            <b-form-group
              label="Email"
              label-for="emailId"
              description=""
              >
              <b-form-input
                id="emailId"
                v-model="email"
                placeholder="Enter email"
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
                v-model="password"
                id="passwordId"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
          <br />
          <div class="error" v-html="error" />
          <br />
          <b-button
            @click="register">
            Register
          </b-button>
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
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data, 'register button was clicked', this.email, this.password)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
