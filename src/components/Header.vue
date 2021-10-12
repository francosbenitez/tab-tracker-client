<template>
  <b-nav>
    <b-nav-item>
      <router-link to="/">
        Tab Tracker
      </router-link>
    </b-nav-item>
    <!-- <b-nav-item>
      <b-button>
          Browse
      </b-button>
    </b-nav-item> -->
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
  </b-nav>
</template>

<script>
</script>

<style scope>
</style>
