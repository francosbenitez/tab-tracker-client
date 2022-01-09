<template>
    <div class="col">
        <Panel title="YouTube Video">
            <youtube :video-id="youtubeId" :player-width="200" :player-height="200"></youtube>
        </Panel>
    </div>
</template>

<script>
// import Panel from '@/components/Globals/Panel'

export default {
  props: [
    'youtubeId'
  ]
  // ],
  // components: {
  //   Panel
  // }
}
</script>
