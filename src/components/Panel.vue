<template>
  <b-container fluid>
    <div class="row justify-content-center">
      <!-- <div class="col-md-4 col-md-offset-4"> -->
        <h1>{{title}}</h1>
        <slot>
            No slot content defined.
        </slot>
      <!-- </div> -->
    </div>
  </b-container>
</template>

<script>
export default {
  // data () {
  //   return {
  //     title: 'hello world'
  //   }
  // },
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
