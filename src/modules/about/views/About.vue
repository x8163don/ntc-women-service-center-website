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
import AboutIntroduce from "../components/AboutIntroduce"
import AboutMap from "../components/AboutMap"

export default {
  components: { SideMenu, AboutIntroduce, AboutMap },
  data() {
    return {
      title: "關於我們",
      electedItem: "AboutIntroduce",
      menuItems: [
        {
          name: "中心簡介",
          component: "AboutIntroduce"
        },
        {
          name: "大紀事",
          component: ""
        },
        {
          name: "空間介紹",
          component: ""
        },
        {
          name: "交通資訊",
          component: "AboutMap"
        },
        {
          name: "租借方法",
          component: ""
        },
        {
          name: "參訪預約",
          component: ""
        },
        {
          name: "獲獎紀錄",
          component: ""
        },
        {
          name: "新聞報章",
          component: ""
        }
      ]
    }
  },
  methods: {
    selectMenuItem(selectedItem) {
      this.electedItem = selectedItem.component
    }
  }
}
</script>

<style></style>
