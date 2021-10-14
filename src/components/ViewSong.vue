<template>
  <b-container>
    <div class="row">
      <SongMetadata :song="song" />
      <div class="col-5">
        <Panel title="Tabs">
          {{song.tab}}
        </Panel>
      </div>
      <div class="col-5">
        <Panel title="Lyrics">
          {{song.lyrics}}
        </Panel>
      </div>
      <YouTube :youtubeId="song.youtubeId" />
    </div>
  </b-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from '@/components/SongMetadata'
import YouTube from '@/components/YouTube'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data // it is always neccessary to add ".data" at the end, next to parenthesis (without parenthesis it won't work either). Else, nothing will be returned.
  },
  components: {
    Panel,
    SongMetadata,
    YouTube
  }
}
</script>

<style scoped>
</style>
