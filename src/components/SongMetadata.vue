<template>
    <div class="col">
      <Panel title="Song Metadata">
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
            <div class="row justify-content-md-center">
              <div class="col">
                <b-button slot="action" variant="success" @click="navigateTo({name: 'song-edit', params: {songId: song.id}})">
                  Edit
                </b-button>
              </div>
              <div class="col">
                <b-button v-if="isUserLoggedIn && !bookmark" variant="info" @click="setAsBookmark">
                  Set As Bookmark
                </b-button>
              </div>
              <div class="col">
                <b-button v-if="isUserLoggedIn && bookmark" variant="info" @click="unsetAsBookmark">
                  Unset As Bookmark
                </b-button>
              </div>
            </div>
          </div>
          <div class="col">
            <img class="album-image" :src="song.albumImageUrl" />
          </div>
      </Panel>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
        // this.isBookmarked = !!bookmark
        console.log('bookmark', this.bookmark)
      } catch (err) {
        console.log(err)
      }
    }
  },
  // async mounted () {
  // },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
        //   songId: this.song.id,
        //   userId: this.$store.state.user.id
        // })
      } catch (err) {
        console.log(err)
      }
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
