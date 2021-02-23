<template>
  <ActivityList :activities="activities"></ActivityList>
</template>

<script>
import ActivityList from "../components/ActivityList"
import { getPosts } from "../../api/index"

export default {
  components: { ActivityList },
  async mounted() {
    await getPosts({
      number: 100,
      category: "系列活動",
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
