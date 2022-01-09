<template>
  <Panel title="Search" class="mb-5">
    <b-form-group
      label="Search by song title, artist, album, or genre"
      label-for="searchId"
      description=""
      ><b-form-input
        id="searchId"
        v-model="search"
        placeholder="Search..."
        required
      ></b-form-input>
    </b-form-group>
  </Panel>
</template>

<script>
// import Panel from '@/components/Globals/Panel'
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
      // console.log(value)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
  // },
  // components: {
  //   Panel
  // }
}
</script>

<style scoped>
</style>
