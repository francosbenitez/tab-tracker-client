<template>
  <b-container>
    <div class="row">
      <div class="col">
        <SongMetadata :song="song" />
      </div>
      <div class="col">
        <Panel title="Tabs">
          {{song.tab}}
        </Panel>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Panel title="Lyrics">
          {{song.lyrics}}
        </Panel>
      </div>
      <div class="col">
        <YouTube :youtubeId="song.youtubeId" />
      </div>
    </div>
  </b-container>
</template>

<script>
import SongsService from '@/services/SongsService'
// import Panel from '@/components/Globals/Panel'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import SongHistoryService from '@/services/SongHistoryService'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    // const songId = this.$store.state.route.params.songId
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data // it is always necessary to add ".data" at the end, next to parenthesis (without parenthesis it won't work either). Else, nothing will be returned.
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    // Panel,
    SongMetadata,
    YouTube
  }
}
</script>

<style scoped>
</style>
