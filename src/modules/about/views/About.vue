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
import AboutIntroduce from "../components/AboutIntroduce";
import AboutSpace from "../components/AboutSpace";
import AboutMap from "../components/AboutMap";
import AboutBooking from "../components/AboutBooking";

export default {
  components: { SideMenu, AboutIntroduce, AboutSpace, AboutMap, AboutBooking },
  data() {
    return {
      title: "關於我們",
      selectedItem: "AboutIntroduce",
      menuItems: [
        {
          name: "中心簡介",
          component: "AboutIntroduce"
        },
        {
          name: "空間介紹",
          component: "AboutSpace"
        },
        {
          name: "交通資訊",
          component: "AboutMap"
        },
        {
          name: "場地租借",
          component: "AboutBooking"
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
