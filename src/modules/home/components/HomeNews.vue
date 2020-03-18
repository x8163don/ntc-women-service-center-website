<template>
  <HomeLinkList :items="news"></HomeLinkList>
</template>

<script>
import News from "../../news/data/news.json";

import HomeLinkList from "./HomeLinkList.vue";

export default {
  components: {
    HomeLinkList
  },
  data() {
    return {
      news: News.filter(
        item => new Date(item.startDate).getYear() === new Date().getYear()
      )
    };
  }
};
</script>
