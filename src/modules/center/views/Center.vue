<template>
  <div class="flex pa4">
    <SideMenu
      :title="title"
      :menuItems="menuItems"
      :defaultSelectedItem="menuItems[0].component"
      class="w-25"
    ></SideMenu>

    <!-- Content -->
    <div class="w-80">
      <keep-alive>
        <component v-bind:is="electedItem" class="w-100"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideMenu from "../../common/components/SideMenu"
import CenterVideos from "../components/CenterVideos"
export default {
  components: { SideMenu, CenterVideos },
  data() {
    return {
      title: "中心出版",
      electedItem: "CenterVideos",
      menuItems: [
        {
          name: "影音專區",
          component: "CenterVideos"
        },
        {
          name: "文宣品/刊物",
          component: ""
        }
      ]
    }
  }
}
</script>

<style></style>
