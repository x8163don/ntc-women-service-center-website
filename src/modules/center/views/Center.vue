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
import SideMenu from "../../common/components/SideMenu";
export default {
  components: { SideMenu },
  data() {
    return {
      title: "中心出版",
      menuItems: [
        {
          name: "影音專區",
          component: ""
        },
        {
          name: "文宣品/刊物",
          component: ""
        }
      ]
    };
  }
};
</script>

<style></style>
