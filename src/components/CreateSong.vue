<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <Panel title="Song Metadata">
                        <b-form>
                            <b-form-group
                                label="Title"
                                label-for="titleId"
                                description=""
                                >
                                <b-form-input
                                id="titleId"
                                v-model="song.title"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Artist"
                                label-for="artistId"
                                description=""
                                >
                                <b-form-input
                                id="artistId"
                                v-model="song.artist"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Genre"
                                label-for="genreId"
                                description=""
                                >
                                <b-form-input
                                id="genreId"
                                v-model="song.genre"
                                label="Genre"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Album"
                                label-for="albumId"
                                description=""
                                >
                                <b-form-input
                                id="albumId"
                                v-model="song.album"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="Album Image Url"
                                label-for="albumImageUrlId"
                                description=""
                                >
                                <b-form-input
                                id="albumImageUrlId"
                                v-model="song.albumImageUrl"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                label="YouTube ID"
                                label-for="youtubeId"
                                description=""
                                >
                                <b-form-input
                                id="youtubeId"
                                v-model="song.youtubeId"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-form>
                    </Panel>
                </div>
                <div class="col">
                    <Panel title="Song Structure">
                        <b-form>
                            <b-form-group
                                label="Tab"
                                label-for="tabId"
                                description=""
                                >
                                <b-form-textarea
                                id="tabId"
                                v-model="song.tab"
                                required
                                ></b-form-textarea>
                            </b-form-group>

                            <b-form-group
                                label="Lyrics"
                                label-for="lyricsId"
                                description=""
                                >
                                <b-form-textarea
                                id="lyricsId"
                                v-model="song.lyrics"
                                label="Lyrics"
                                required
                                ></b-form-textarea>
                            </b-form-group>
                        </b-form>
                        <b-button class="mt-4"
                            @click="create">
                            Create Song
                        </b-button>
                    </Panel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({ // it returns me to the Songs page
          name: 'songs'
        })
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

<style scope>
</style>
