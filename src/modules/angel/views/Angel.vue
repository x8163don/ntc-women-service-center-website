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
      title: "微光天使",
      menuItems: [
        {
          name: "認識微光天使",
          component: ""
        },
        {
          name: "志願服務團組織準則",
          component: ""
        },
        {
          name: "微光行事曆",
          component: ""
        },
        {
          name: "活動紀事",
          component: ""
        },
        {
          name: "加入微光天使",
          component: ""
        }
      ]
    };
  }
};
</script>

<style></style>
