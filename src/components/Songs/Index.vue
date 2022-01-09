<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6" v-if="isUserLoggedIn">
        <SongsBookmarks />
        <RecentlyViewedSongs class="mt-5" />
      </div>
      <div :class="[ isUserLoggedIn ? 'col-md-6' : 'col-12' ]">
        <SongsSearchPanel />
        <Panel title="Songs">
          <div>
            <button slot="action" class="btn btn-success" @click="navigateTo({name: 'songs-create'})">
              Add
            </button>
          </div>
          <div v-for="song in songs" :key="song.id">
            <div class="row mb-5">
              <div class="col d-flex flex-column text-center">
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-album">
                  {{ song.album }}
                </div>
                <div class="song-genre">
                  {{ song.genre }}
                </div>
                <div>
                  <b-button @click="navigateTo({ name: 'song', params: { songId: song.id }})">
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
  </div>
</template>

<script>
import Panel from '@/components/Globals/Panel'
import SongsService from '@/services/SongsService'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import SongsBookmarks from '@/components/Songs/SongsBookmarks'
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs'
import { mapState } from 'vuex'

export default {
  components: {
    Panel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
      // 'isUserLoggedIn',
      // 'user'
    ])
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
