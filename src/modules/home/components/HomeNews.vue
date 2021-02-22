<template>
  <HomeLinkList :items="news"></HomeLinkList>
</template>

<script>
import { getPosts } from "../../api/index.js"

import HomeLinkList from "./HomeLinkList.vue"

export default {
  components: {
    HomeLinkList,
  },
  async mounted() {
    const response = await getPosts({ category: "最新消息", number: 10 })
    this.news = response.data.posts
  },
  data() {
    return {
      news: [],
    }
  },
}
</script>
