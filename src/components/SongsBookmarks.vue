<template>
    <Panel title="Bookmarks">
        <div>
           <b-table striped hover :items="bookmarks"></b-table>
        </div>
    </Panel>
</template>

<script>
import Panel from '@/components/Panel'
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      bookmarks: []
    }
  },
  components: {
    Panel
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
      // 'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index({
        userId: this.$store.state.user.id
      })).data
    }
  }
}
</script>

<style scoped>

</style>
