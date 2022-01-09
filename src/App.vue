<template>
  <div id="app">
    <page-header />
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import './assets/sass/styles.scss'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
</style>
