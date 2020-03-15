<template>
  <div class="flex pa4">
    <SideMenu
      :title="title"
      :menuItems="menuItems"
      :defaultSelectedItem="selectedItem"
      @selectMenuItem="selectMenuItem"
      class="w-20"
    ></SideMenu>

    <!-- Content -->
    <div class="w-80">
      <keep-alive>
        <component v-bind:is="selectedItem" class="w-100"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideMenu from "../../common/components/SideMenu";
import PowerActivity from "../components/PowerActivity";
import PowerIssue from "../components/PowerIssue";

export default {
  components: { SideMenu, PowerActivity, PowerIssue },
  data() {
    return {
      title: "女力加油站",
      selectedItem: "PowerActivity",
      menuItems: [
        {
          name: "活動",
          component: "PowerActivity"
        },
        {
          name: "性別議題",
          component: "PowerIssue"
        }
      ]
    };
  },
  methods: {
    selectMenuItem(selectedItem) {
      this.selectedItem = selectedItem.component;
    }
  }
};
</script>

<style></style>
