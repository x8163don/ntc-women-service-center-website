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
      title: "資訊專區",
      menuItems: [
        {
          name: "性別主流化專家人才資料庫",
          component: ""
        },
        {
          name: "新北市婦女福利政策",
          component: ""
        },
        {
          name: "新北市婦女服務連結地圖",
          component: ""
        },
        {
          name: "性別研究與統計資料",
          component: ""
        },
        {
          name: "好站連結",
          component: ""
        }
      ]
    };
  }
};
</script>

<style></style>
