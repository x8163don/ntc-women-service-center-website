<template>
  <div>
    <!-- title -->
    <div class="b pa2 f3">{{ title }}</div>

    <!-- menu items -->
    <div class="pa2 f5" v-for="link in links" :key="link.path">
      <router-link :to="link.path">{{ link.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    links: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style></style>
