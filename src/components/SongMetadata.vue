<template>
    <div class="col-5">
      <Panel title="Song Metadata">
          <div class="col-5 d-flex flex-column text-center">
            <div class="song-title">
                {{song.title}}
            </div>
            <div class="song-artist">
                {{song.artist}}
            </div>
            <div>
                {{song.album}}
            </div>
            <div class="song-genre">
                {{song.genre}}
            </div>
            <b-button slot="action" variant="success" @click="navigateTo({name: 'song-edit', params: {songId: song.id}})">
              Edit
            </b-button>
          </div>
          <div class="col-5">
            <img class="album-image" :src="song.albumImageUrl" />
          </div>
      </Panel>
    </div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song-title {
  font-size: 3rem;
}

.song-genre {
  font-size: 2rem;
}

.song-artist {
  font-size: 1rem;
}

.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
