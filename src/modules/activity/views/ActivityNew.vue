<template>
  <ActivityList :activities="activities"></ActivityList>
</template>

<script>
import Activities from "../data/activities.json";
import ActivityList from "../components/ActivityList";
export default {
  components: { ActivityList },
  data() {
    return {
      activities: Activities.filter(
        item => new Date(item.startDate).getYear() === new Date().getYear()
      ).sort(function(o) {
        return o.startDate * -1;
      })
    };
  }
};
</script>

<style></style>
