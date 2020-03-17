<template>
  <div>
    <!-- title -->
    <div class="b pa2 f3">{{ title }}</div>

    <!-- menu items -->
    <div
      v-for="(item, index) in menuItems"
      :key="index + item.component"
      @click="selectMenuItem(item)"
      class="pa3 pointer"
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
        return [];
      }
    }
  },
  methods: {
    selectMenuItem(selectedItem) {
      this.$emit("selectMenuItem", selectedItem);
    }
  }
};
</script>
