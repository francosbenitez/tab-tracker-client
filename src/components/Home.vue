<template>
  <div class="hello">
    <b-button variant="success">
      {{ msg }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<style scoped>
</style>
