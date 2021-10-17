<template>
  <b-container fluid>
    <div class="row">
      <div class="col">
        <SongsBookmarks />
      </div>
      <div class="col">
        <SongsSearchPanel />
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
              <div class="col d-flex flex-column text-center">
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
              <div class="col">
                <img class="album-image" :src="song.albumImageUrl" />
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  </b-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
import SongsSearchPanel from '@/components/SongsSearchPanel'
import SongsBookmarks from '@/components/SongsBookmarks'

export default {
  components: {
    Panel,
    SongsSearchPanel,
    SongsBookmarks
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
  // async mounted () {
  //   // do a request to the backend for all the songs
  //   this.songs = (await SongsService.index()).data
  // }
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
