<template>
  <HomeLinkList :items="activities"></HomeLinkList>
</template>

<script>
import { getPosts } from "../../api/index"
import HomeLinkList from "./HomeLinkList.vue"

export default {
  components: {
    HomeLinkList,
  },
  async mounted() {
    await getPosts({
      number: 10,
      category: "活動報報",
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
