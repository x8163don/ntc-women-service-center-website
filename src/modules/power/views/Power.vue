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
      title: "女力加油站",
      menuItems: [
        {
          name: "活動",
          component: ""
        },
        {
          name: "研習",
          component: ""
        },
        {
          name: "性別議題",
          component: ""
        }
      ]
    }
  }
}
</script>

<style></style>
