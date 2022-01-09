<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Artist</th>
        <th scope="col">Genre</th>
      </tr>
    </thead>
    <tbody v-for="item in items" :key="item.id">
      <tr>
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.title }}</td>
        <td>{{ item.artist }}</td>
        <td>{{ item.genre }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: [
    'items'
  ]
}
</script>
