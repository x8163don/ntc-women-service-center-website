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
import SideMenu from "../../common/components/SideMenu"
import AngelIntroduce from "../components/AngelIntroduce"
import AngelRecruit from "../components/AngelRecruit"
import AngelPrize from "../components/AngelPrize"

export default {
  components: { SideMenu, AngelIntroduce, AngelRecruit, AngelPrize },
  data() {
    return {
      title: "微光天使",
      selectedItem: "AngelIntroduce",
      menuItems: [
        {
          name: "認識微光天使",
          component: "AngelIntroduce"
        },
        {
          name: "招募志工",
          component: "AngelRecruit"
        },
        {
          name: "獲獎紀錄",
          component: "AngelPrize"
        }
      ]
    }
  },
  methods: {
    selectMenuItem(selectedItem) {
      this.selectedItem = selectedItem.component
    }
  }
}
</script>

<style></style>
