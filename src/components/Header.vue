<template>
  <b-nav>
    <b-nav-item>
      <router-link to="/">
        Tab Tracker
      </router-link>
    </b-nav-item>

    <!-- <b-nav-item>
      <router-link :to="{name: 'root'}">
        <b-button variant="link">
            Tab Tracker
        </b-button>
      </router-link>
    </b-nav-item> this is other way to do the same -->

    <b-nav-item>
      <router-link to="/songs">
        <b-button variant="link">
            Browse
        </b-button>
      </router-link>
    </b-nav-item>

    <b-nav-item>
      <router-link to="login">
          <b-button variant="link" v-if="!$store.state.isUserLoggedIn">
          Login
          </b-button>
      </router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to="register">
          <b-button variant="link" v-if="!$store.state.isUserLoggedIn">
            Sign Up
          </b-button>
      </router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to="/">
          <b-button @click="logout" variant="link" v-if="$store.state.isUserLoggedIn">
            Log Out
          </b-button>
      </router-link>
    </b-nav-item>
  </b-nav>
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
</style>
