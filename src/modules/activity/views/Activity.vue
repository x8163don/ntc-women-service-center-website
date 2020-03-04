<template>
  <div class="flex flex-column pa4">
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
      title: "活動報報",
      menuItems: [
        {
          name: "最新活動",
          component: ""
        },
        {
          name: "過往活動",
          component: ""
        },
        {
          name: "主題活動",
          component: ""
        },
        {
          name: "系列活動",
          component: ""
        }
      ]
    }
  }
}
</script>

<style></style>
