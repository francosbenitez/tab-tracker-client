<template>
  <v-card
    color="grey lighten-4"
    text
    height="200px"
    tile
  >
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>
          <router-link to="root">
          Tab Tracker
          </router-link>
    </v-toolbar-title>
      <v-toolbar-items>
          <v-btn text dark>
              Browse
          </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <router-link to="login">
            <v-btn v-if="!$store.state.isUserLoggedIn" text dark>
            Login
            </v-btn>
        </router-link>
        <router-link to="register">
            <v-btn v-if="!$store.state.isUserLoggedIn" text dark>
            Sign Up
            </v-btn>
        </router-link>
      </v-toolbar-items>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-toolbar>
  </v-card>
</template>

<script>

</script>

<style scope>

</style>
