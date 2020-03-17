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
      activities: Activities.filter(item => item.type.some(type => type === 2))
    };
  }
};
</script>
