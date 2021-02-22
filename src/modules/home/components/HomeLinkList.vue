<template>
  <div class="pa3">
    <a
      class="db mb3 pointer link"
      v-for="item in items"
      :key="item.ID"
      :href="`/news/post/${item.ID}`"
    >
      {{ item.date | onlyDate }} {{ item.title }}
    </a>
  </div>
</template>

<script>
import moment from "moment"
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  filters: {
    onlyDate(isoDateStr) {
      return moment(new Date(isoDateStr)).format("yyyy-MM-DD")
    },
  },
}
</script>
