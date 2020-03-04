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
      title: "微光天使",
      menuItems: [
        {
          name: "認識微光天使",
          component: ""
        },
        {
          name: "招募志工",
          component: ""
        },
        {
          name: "獲獎紀錄",
          component: ""
        }
      ]
    }
  }
}
</script>

<style></style>
