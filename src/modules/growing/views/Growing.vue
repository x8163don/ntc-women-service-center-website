<template>
  <div class="flex pa4">
    <SideMenu
      :title="title"
      :menuItems="menuItems"
      :defaultSelectedItem="electedItem"
      @selectMenuItem="selectMenuItem"
      class="w-20"
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
import GrowingCollection from "../components/GrowingCollections"
export default {
  components: { SideMenu, GrowingCollection },
  data() {
    return {
      title: "成長小屋",
      electedItem: "GrowingCollection",
      menuItems: [
        {
          name: "館藏書籍",
          component: "GrowingCollection"
        },
        {
          name: "CEDAW專區",
          component: ""
        }
      ]
    }
  }
}
</script>

<style></style>
