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
      title: "成長小屋",
      menuItems: [
        {
          name: "中心館藏",
          component: ""
        },
        {
          name: "圖書雜誌典藏閱讀",
          component: ""
        },
        {
          name: "性別影音資料庫",
          component: ""
        },
        {
          name: "CEDAW專區",
          component: ""
        }
      ]
    };
  }
};
</script>

<style></style>
