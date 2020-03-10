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
import ActivityNew from "../components/ActivityNew";
import ActivityPass from "../components/ActivityPass";
import ActivityTheme from "../components/ActivityTheme";
import ActivitySeries from "../components/ActivitySeries";

export default {
  components: {
    SideMenu,
    ActivityNew,
    ActivityPass,
    ActivityTheme,
    ActivitySeries
  },
  data() {
    return {
      title: "活動報報",
      selectedItem: "ActivityNew",
      menuItems: [
        {
          name: "最新活動",
          component: "ActivityNew"
        },
        {
          name: "過往活動",
          component: "ActivityPass"
        },
        {
          name: "主題活動",
          component: "ActivityTheme"
        },
        {
          name: "系列活動",
          component: "ActivitySeries"
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
