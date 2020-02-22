<template>
  <div>
    <!-- title -->
    <div>{{ title }}</div>

    <!-- menu items -->
    <div
      v-for="(item, index) in menuItems"
      :key="index + item.component"
      @click="selectMenuItem(item)"
    >
      {{ item.name }}
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
    defaultSelectedItem: { type: String, default: "" },
    menuItems: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    selectMenuItem(selectedItem) {
      this.$emit("selectMenuItem", selectedItem)
    }
  }
}
</script>

<style></style>
