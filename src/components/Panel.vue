<template>
  <b-container>
    <div class="row text-center border">
      <!-- <div class="col-md-4 col-md-offset-4"> -->
        <h1>{{title}}</h1>
        <slot name="action" />
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
