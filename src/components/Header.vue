<template>
  <div class="container">
    <b-navbar toggleable="lg">

      <router-link to="/">
        <b-navbar-brand href="#">
          Tab Tracker
        </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/songs">
              <b-button variant="link">
                Browse
              </b-button>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>

            <template #button-content>
              <em>User</em>
            </template>

            <b-dropdown-item href="#">
              <router-link to="login">
                <b-button variant="link" v-if="!$store.state.isUserLoggedIn">
                  Login
                </b-button>
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
              <router-link to="register">
                <b-button variant="link" v-if="!$store.state.isUserLoggedIn">
                  Sign Up
                </b-button>
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item href="#">
              <router-link to="/">
                  <b-button @click="logout" variant="link" v-if="$store.state.isUserLoggedIn">
                    Log Out
                  </b-button>
              </router-link>
            </b-dropdown-item>

          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scope>
.container {
  text-decoration: none;
}
</style>
