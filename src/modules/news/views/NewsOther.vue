<template>
  <NewsList :news="otherNews"></NewsList>
</template>

<script>
import NewsList from "../components/NewsList"
import { getPosts } from "../../api/index"

export default {
  components: { NewsList },
  async mounted() {
    const response = await getPosts({ category: "活動轉知", number: 100 })
    this.otherNews = response.data.posts
  },
  data() {
    return {
      otherNews: [],
    }
  },
}
</script>
