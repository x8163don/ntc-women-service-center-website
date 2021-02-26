<template>
  <NewsList :news="activities"></NewsList>
</template>

<script>
import NewsList from "../components/NewsList"
import { getPosts } from "../../api/index"

export default {
  components: { NewsList },
  async mounted() {
    await getPosts({
      number: 100,
      category: "中心活動",
    }).then((response) => {
      this.activities = response.data.posts
    })
  },
  data() {
    return {
      activities: [],
    }
  },
}
</script>
