<template>
  <NewsList :news="announcement"></NewsList>
</template>

<script>
import News from "../data/announcement.json";
import NewsList from "../components/NewsList";

export default {
  components: { NewsList },
  data() {
    return {
      announcement: News
    };
  }
};
</script>

<style></style>
