<template>
  <Panel title="Bookmarks">
    <div>
      <SongsTable :items="songsBookmarks" />
      <!-- <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody v-for="bookmark in songsBookmarks" :key="bookmark.id">
          <tr>
            <th scope="row">{{ bookmark.id }}</th>
            <td>{{ bookmark.title }}</td>
            <td>{{ bookmark.artist }}</td>
            <td>{{ bookmark.genre }}</td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </Panel>
</template>

<script>
// import Panel from '@/components/Globals/Panel'
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'
import SongsTable from '@/components/Songs/SongsTable'

export default {
  data () {
    return {
      bookmarks: [],
      songsBookmarks: []
    }
  },
  components: {
    SongsTable
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      // this.bookmarks = (await BookmarksService.index({
      // userId: this.user.id
      // })).data
      this.bookmarks = (await BookmarksService.index()).data
      this.songsBookmarks = this.bookmarks.map(item => item.Song)
      // console.log(this.bookmarks)
    }
  }
}
</script>
