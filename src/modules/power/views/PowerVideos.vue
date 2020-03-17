<template>
  <div>
    <div :key="video.url" v-for="video in videos.videos">
      <h3 class="gray">{{ video.title }}</h3>
      <iframe
        :src="video.url"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="ml3 mb5 w-80 h5"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Videos from "../data/videos.json";

export default {
  data() {
    return {
      videos: Videos
    };
  }
};
</script>
