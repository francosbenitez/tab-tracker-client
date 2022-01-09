<template>
    <Panel title="Recently Viewed Songs">
        <div>
           <b-table striped hover :items="songs"></b-table>
        </div>
    </Panel>
</template>

<script>
// import Panel from '@/components/Globals/Panel'
import { mapState } from 'vuex'
// import BookmarksService from '@/services/BookmarksService'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      songs: []
    }
  },
  // components: {
  //   Panel
  // },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.songs = (await SongHistoryService.index({
        userId: this.user.id
      })).data
    }
  }
}
</script>
