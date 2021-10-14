<template>
  <b-container>
    <Panel title="Songs">
      <!-- <router-link :to="{name: 'songs-create'}"> -->
      <div>
        <b-button slot="action" variant="success" @click="navigateTo({name: 'songs-create'})">
          Add
        </b-button>
      </div>
      <!-- </router-link> -->
      <div v-for="song in songs" :key="song.id">
        <div class="row">
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
            <div>
              <b-button @click="navigateTo({name: 'song', params: {songId: song.id}})">
                View
              </b-button>
            </div>
          </div>
          <div class="col-5">
            <img class="album-image" :src="song.albumImageUrl" />
          </div>
        </div>
      </div>
    </Panel>
  </b-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
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
