<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <Panel title="Song Metadata">
                        <b-form class="needs-validation" novalidate>
                            <b-form-group
                                label="Title"
                                label-for="titleId"
                                description=""
                                >
                                <b-form-input
                                id="titleId"
                                v-model="song.title"
                                required="true"
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
                                required="true"
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
                                required="true"
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
                                required="true"
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
                                required="true"
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
                                required="true"
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
                                required="true"
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
                                required="true"
                                ></b-form-textarea>
                            </b-form-group>
                        </b-form>
                        <b-button class="mt-4"
                            @click="save">
                            Save Song
                        </b-button>
                        <div class="error alert alert-danger" role="alert" v-if="error">
                            {{error}}
                        </div>
                    </Panel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Panel from '@/components/Globals/Panel'
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
      },
      error: null
      // error: null,
      // required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scope>
</style>
