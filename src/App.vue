<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import './assets/sass/styles.scss'
import './assets/sass/bootstrap.scss'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
</style>
