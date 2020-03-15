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
import CenterVideos from "../components/CenterVideos";
import CenterFiles from "../components/CenterFiles";

export default {
  components: { SideMenu, CenterVideos, CenterFiles },
  data() {
    return {
      title: "中心出版",
      selectedItem: "CenterVideos",
      menuItems: [
        {
          name: "影音專區",
          component: "CenterVideos"
        },
        {
          name: "文宣品/刊物",
          component: "CenterFiles"
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
