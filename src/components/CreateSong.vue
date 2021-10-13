<template>
    <div>
        <Panel title="Song Metadata">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <b-form>
                            <b-form-group
                                label="Title"
                                label-for="titleId"
                                description=""
                                >
                                <b-form-input
                                id="titleId"
                                v-model="title"
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
                                v-model="artist"
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
                                v-model="genre"
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
                                v-model="album"
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
                                v-model="albumImageUrl"
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
                                v-model="youtubeId"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-form>
                    </div>
                    <div class="col">
                        <b-form>
                            <b-form-group
                                label="Tab"
                                label-for="tabId"
                                description=""
                                >
                                <b-form-textarea
                                id="tabId"
                                v-model="tab"
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
                                v-model="lyrics"
                                label="Lyrics"
                                required
                                ></b-form-textarea>
                            </b-form-group>
                        </b-form>
                    </div>
                </div>
            </div>
        </Panel>
    </div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  components: {
    Panel
  }
}
</script>

<style scope>
</style>
