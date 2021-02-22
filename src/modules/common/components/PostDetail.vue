<template>
  <div v-html="contentHtml"></div>
</template>

<script>
import { getPost } from "../../api/index"
import sanitizeHtml from "sanitize-html"

export default {
  async mounted() {
    await getPost(this.$route.params.id).then((response) => {
      this.post = response.data
    })
  },
  computed: {
    contentHtml() {
      return sanitizeHtml(this.post.content || "", {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      })
    },
  },
  data() {
    return {
      post: {},
    }
  },
}
</script>
