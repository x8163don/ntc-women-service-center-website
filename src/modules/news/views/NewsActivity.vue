<template>
  <NewsList :news="activities"></NewsList>
</template>

<script>
import NewsList from "../components/NewsList"
import { getPosts } from "../../api/index"
import moment from "moment"

const THREE_MONTH_AGO = moment().add("d", -90)
export default {
  components: { NewsList },
  async mounted() {
    await getPosts({
      number: 10,
      category: "活動報報",
      after: THREE_MONTH_AGO.toISOString(),
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
