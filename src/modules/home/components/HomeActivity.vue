<template>
  <HomeLinkList :items="activities"></HomeLinkList>
</template>

<script>
import Activities from "../../activity/data/activities.json";

import HomeLinkList from "./HomeLinkList.vue";

export default {
  components: {
    HomeLinkList
  },

  data() {
    return {
      activities: Activities.filter(
        item => new Date(item.startDate).getYear() === new Date().getYear()
      )
    };
  }
};
</script>
