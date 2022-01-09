<template>
  <div class="container mt-5">
    <div class="row text-center border">
      <h1>{{ title }}</h1>
      <slot name="action" />
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     title: 'Default title'
  //   }
  // },
  props: [
    'title'
  ]
}
</script>
