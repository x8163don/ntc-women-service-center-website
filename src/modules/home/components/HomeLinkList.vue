<template>
  <div class="pa3">
    <a class="db mb3" v-for="item in items" :key="item.url" :href="item.url">
      {{ item.startDate }} {{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
