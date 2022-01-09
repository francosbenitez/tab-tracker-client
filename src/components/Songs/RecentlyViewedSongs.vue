<template>
    <Panel title="Recently Viewed Songs">
        <div>
          <SongsTable :items="songsHistories" />
        </div>
    </Panel>
</template>

<script>
// import Panel from '@/components/Globals/Panel'
import { mapState } from 'vuex'
// import BookmarksService from '@/services/BookmarksService'
import SongHistoryService from '@/services/SongHistoryService'
import SongsTable from '@/components/Songs/SongsTable'

export default {
  data () {
    return {
      histories: [],
      songsHistories: []
    }
  },
  components: {
    SongsTable
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      // this.songs = (await SongHistoryService.index({
      //   userId: this.user.id
      // })).data
      this.histories = (await SongHistoryService.index()).data
      this.songsHistories = this.histories.map(item => item.Song)
    }
  }
}
</script>
