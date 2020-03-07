<template>
  <div>
    <div
      v-for="activity in activities"
      :key="activity.startDate + activity.imgUrl"
    >
      <div>{{ activity.startDate }} - {{ activity.endDate }}</div>
      <img :src="activity.imgUrl" />
    </div>
  </div>
</template>

<script>
import Activities from "../data/activities.json";
export default {
  data() {
    return {
      activities: Activities.filter(
        item => new Date(item.startDate).getYear() === new Date().getYear()
      )
    };
  }
};
</script>

<style></style>
