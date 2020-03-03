<template>
  <div>
    <div :key="video.url" v-for="video in videos.videos">
      <h3 class="gray ma0 pa3">{{ video.title }}</h3>
      <iframe
        :src="video.url"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="mb5 w-60 h5 pl3"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Videos from "../data/videos.json"

export default {
  data() {
    return {
      videos: Videos
    }
  }
}
</script>

<style></style>
