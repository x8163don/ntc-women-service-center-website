<template>
  <NewsList :news="otherNews"></NewsList>
</template>

<script>
import NewsList from "../components/NewsList";

export default {
  components: { NewsList },
  data() {
    return {
      otherNews: []
    };
  }
};
</script>

<style></style>
