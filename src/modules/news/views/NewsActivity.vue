<template>
  <NewsList :news="news"></NewsList>
</template>

<script>
import NewsList from "../components/NewsList";
import Activities from "../../activity/data/activities.json";
export default {
  components: { NewsList },
  data() {
    return {
      news: Activities.filter(
        item => new Date(item.startDate).getYear() === new Date().getYear()
      )
    };
  }
};
</script>

<style></style>
