<template>
  <div v-html="post.content"></div>
</template>

<script>
import { getPost } from "../../api/index"

export default {
  async mounted() {
    await getPost(this.$route.params.id).then((response) => {
      this.post = response.data
    })
  },
  data() {
    return {
      post: {},
    }
  },
}
</script>
