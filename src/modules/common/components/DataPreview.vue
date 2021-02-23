<template>
  <div ref="container" class="pa3 h-100" v-if="content">
    <div v-if="content.imgUrl.length">
      <img
        v-for="url in content.imgUrl"
        :key="url"
        :src="url"
        class="w-100 h-100"
      />
    </div>
    <div class="center" v-if="content.pdfUrl">
      <iframe
        name="iFrame"
        :src="content.pdfUrl"
        :width="width"
        :height="height"
      ></iframe>
    </div>
  </div>
</template>

<script>
import PowerStudy from "../../power/data/activities.json"

export default {
  mounted() {
    const posts = [].concat(Activities, PowerStudy)
    this.content = posts.find((item) => item.id === this.$route.params.id)
    this.$nextTick(() => {
      this.width = this.$refs.container.clientWidth
    })
  },
  data() {
    return {
      content: null,
      width: 0,
      height: document.documentElement.clientHeight,
    }
  },
  methods: {
    resizeIframe() {
      this.width = this.$refs.container.clientWidth
      this.height = this.$refs.container.clientHeight
    },
  },
}
</script>
