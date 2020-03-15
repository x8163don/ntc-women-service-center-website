<template>
  <SideNav :title="title" :links="links"></SideNav>
</template>

<script>
import SideNav from "../../common/components/SideNav.vue";
export default {
  components: {
    SideNav
  },
  data() {
    return {
      title: "活動報報",
      links: [
        {
          name: "最新活動",
          path: "/activity/new"
        },
        {
          name: "過往活動",
          path: "/activity/pass"
        },
        {
          name: "主題活動",
          path: "/activity/theme"
        },
        {
          name: "系列活動",
          path: "/activity/series"
        }
      ]
    };
  }
};
</script>

<style></style>
