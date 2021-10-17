<template>
    <Panel title="Bookmarks">
        <div>
            <b-table striped hover :items="bookmarks">
                <td>
                    Algo
                </td>
                <td>
                    Algo otro
                </td>
            </b-table>
        </div>
    </Panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      bookmarks: []
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
