<template>
  <div>
    <SideMenu
      :title="title"
      :menuItems="menuItems"
      :defaultSelectedItem="menuItems[0].component"
    ></SideMenu>

    <!-- Content -->
    <div></div>
  </div>
</template>

<script>
import SideMenu from "../../common/components/SideMenu"
export default {
  components: { SideMenu },
  data() {
    return {
      title: "關於我們",
      menuItems: [
        {
          name: "中心簡介",
          component: ""
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
          component: ""
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
  }
}
</script>

<style></style>
