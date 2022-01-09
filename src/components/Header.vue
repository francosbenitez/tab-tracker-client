<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
          Tab Tracker
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/songs" class="nav-link">
              Browse
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
              User
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item">
                <router-link to="login">
                  <button v-if="!$store.state.isUserLoggedIn">
                    Login
                  </button>
                </router-link>
              </a>
              <a class="dropdown-item">
                <router-link to="register">
                  <button v-if="!$store.state.isUserLoggedIn">
                    Sign Up
                  </button>
                </router-link>
              </a>
              <a class="dropdown-item">
                <router-link to="/">
                  <button @click="logout" v-if="$store.state.isUserLoggedIn">
                    Log Out
                  </button>
                </router-link>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- <div class="container">
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
  </div> -->
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
