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
      title: "最新消息",
      menuItems: [
        {
          name: "中心公告",
          component: ""
        },
        {
          name: "中心活動",
          component: ""
        },
        {
          name: "活動轉知",
          component: ""
        }
      ]
    }
  }
}
</script>

<style></style>
