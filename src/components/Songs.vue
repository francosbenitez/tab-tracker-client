<template>
  <b-container fluid>
    <div class="row">
      <div class="col">
        <SongsBookmarks />
        <RecentlyViewedSongs class="mt-5" />
      </div>
      <div class="col">
        <SongsSearchPanel />
        <Panel title="Songs">
          <div>
            <b-button slot="action" variant="success" @click="navigateTo({name: 'songs-create'})">
              Add
            </b-button>
          </div>
          <div v-for="song in songs" :key="song.id">
            <div class="row mb-5">
              <div class="col d-flex flex-column text-center">
                <div class="song-title">
                  {{song.title}}
                </div>
                <div class="song-artist">
                  {{song.artist}}
                </div>
                <div class="song-album">
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
import RecentlyViewedSongs from '@/components/RecentlyViewedSongs'

export default {
  components: {
    Panel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
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
}
</script>

<style scoped>
.song-title {
  font-size: 1.5rem;
}

.song-genre {
  font-size: 1rem;
}

.song-album {
  font-size: 1rem;
}

.song-artist {
  font-size: 1rem;
}

.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
