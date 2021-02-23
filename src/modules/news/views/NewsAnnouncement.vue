<template>
  <NewsList :news="news"></NewsList>
</template>

<script>
import NewsList from "../components/NewsList"
import { getPosts } from "../../api/index"

export default {
  components: { NewsList },
  async mounted() {
    const response = await getPosts({ category: "最新消息", number: 100 })
    this.news = response.data.posts
  },
  data() {
    return {
      news: [],
    }
  },
}
</script>
